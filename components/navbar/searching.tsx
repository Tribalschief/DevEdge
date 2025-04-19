"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { debounce } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { createClient } from "next-sanity"

// Static pages from your array
const staticPages = [
  { title: "About Us", path: "/company/about" },
  { title: "Contact", path: "/contact" },
  { title: "Careers", path: "/company/career" },
  { title: "Leadership", path: "/company/leadership" },
  { title: "RFP", path: "/rfp" },
]

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: true,
})

type SearchResult = {
  _id?: string
  _type?: string
  title: string
  path: string
  slug?: { current: string }
  overview?: string
  description?: string
  image?: string
  services?: Array<{ name: string; image?: string }>
  type: "static" | "offering" | "other" | "service"
}

export default function Searching() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Function to search static pages
  const searchStaticPages = (searchQuery: string): SearchResult[] => {
    if (!searchQuery) return []

    const normalizedQuery = searchQuery.toLowerCase()
    return staticPages
      .filter((page) => page.title.toLowerCase().includes(normalizedQuery))
      .map((page) => ({
        title: page.title,
        path: page.path,
        type: "static",
      }))
  }

  // Function to search Sanity content directly
  const searchSanity = async (searchQuery: string): Promise<SearchResult[]> => {
    if (!searchQuery || searchQuery.length < 2) return []

    setIsLoading(true)
    try {
      // GROQ query to search for offeringCategory documents by title
      const query = `*[_type == "offeringCategory" && title match "*${searchQuery}*"] {
        _id,
        _type,
        title,
        slug,
        overview,
        "image": image.asset->url,
        services
      }`

      const data = await client.fetch(query)

      return data.map((item: any) => ({
        _id: item._id,
        _type: item._type,
        title: item.title,
        path: `/offerings/${item.slug?.current}`,
        slug: item.slug,
        overview: item.overview,
        description: item.overview || "",
        image: item.image,
        services: item.services,
        type: "offering",
      }))
    } catch (error) {
      console.error("Error searching content:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery || searchQuery.length < 2) {
        setResults([])
        return
      }

      const staticResults = searchStaticPages(searchQuery)
      const sanityResults = await searchSanity(searchQuery)

      setResults([...staticResults, ...sanityResults])
    }, 300),
    [],
  )

  // Update search results when query changes
  useEffect(() => {
    if (query.length >= 2) {
      debouncedSearch(query)
      setIsOpen(true)
    } else {
      setResults([])
      if (query.length === 0) {
        setIsOpen(false)
      }
    }
  }, [query, debouncedSearch])

  // Handle keyboard shortcut to open search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        if (isOpen) {
          clearSearch()
        } else {
          setIsOpen(true)
          setTimeout(() => inputRef.current?.focus(), 100)
        }
      }

      if (e.key === "Escape") {
        clearSearch()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [isOpen])

  // Handle clicks outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  const handleSelect = (result: SearchResult) => {
    clearSearch()
    router.push(result.path)
  }

  const filteredResults = activeTab === "all" ? results : results.filter((result) => result.type === activeTab)

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search offerings and pages..."
          className="w-full pl-8 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.length >= 2) setIsOpen(true)
          }}
        />
        <div className="absolute right-2 top-2 flex items-center gap-1">
          {query && (
            <Button variant="ghost" size="icon" className="h-5 w-5" onClick={clearSearch}>
              <X className="h-4 w-4" />
              <span className="sr-only">Clear</span>
            </Button>
          )}
          <kbd className="hidden sm:flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {isOpen && (
        <Card className="absolute top-full mt-1 w-full z-50 max-h-[80vh] overflow-auto shadow-lg">
          <CardContent className="p-0">
            {query.length < 2 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">Type at least 2 characters to search</div>
            ) : isLoading ? (
              <div className="flex justify-center p-6">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : results.length > 0 ? (
              <div>
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="px-1 pt-1">
                    <TabsList className="w-full justify-start h-9 bg-transparent">
                      <TabsTrigger value="all" className="text-xs">
                        All Results ({results.length})
                      </TabsTrigger>
                      {results.some((r) => r.type === "static") && (
                        <TabsTrigger value="static" className="text-xs">
                          Pages ({results.filter((r) => r.type === "static").length})
                        </TabsTrigger>
                      )}
                      {results.some((r) => r.type === "offering") && (
                        <TabsTrigger value="offering" className="text-xs">
                          Offerings ({results.filter((r) => r.type === "offering").length})
                        </TabsTrigger>
                      )}
                    </TabsList>
                  </div>

                  <TabsContent value="all" className="m-0">
                    <SearchResultsList results={filteredResults} onSelect={handleSelect} />
                  </TabsContent>
                  <TabsContent value="static" className="m-0">
                    <SearchResultsList results={filteredResults} onSelect={handleSelect} />
                  </TabsContent>
                  <TabsContent value="offering" className="m-0">
                    <SearchResultsList results={filteredResults} onSelect={handleSelect} />
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">No results found for "{query}"</div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function SearchResultsList({
  results,
  onSelect,
}: {
  results: SearchResult[]
  onSelect: (result: SearchResult) => void
}) {
  return (
    <div className="py-2">
      {results.map((result, index) => (
        <button
          key={result._id || `${result.type}-${index}`}
          className="w-full text-left px-2 py-2 hover:bg-muted/50 focus:bg-muted/50 focus:outline-none transition-colors rounded-md"
          onClick={() => onSelect(result)}
        >
          <div className="flex items-start gap-3">
            {result.image && (
              <div className="h-12 w-12 rounded overflow-hidden flex-shrink-0">
                <img
                  src={result.image || "/placeholder.svg"}
                  alt={result.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium truncate">{result.title}</h3>
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {result.type === "static"
                    ? "Page"
                    : result.type === "offering"
                      ? "Offering"
                      : result._type || "Content"}
                </span>
              </div>

              {result.description && <p className="text-sm text-muted-foreground line-clamp-2">{result.description}</p>}

              {result.type === "offering" && result.services && result.services.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {result.services.slice(0, 3).map((service, i) => (
                    <span key={i} className="text-xs bg-muted px-1.5 py-0.5 rounded">
                      {service.name}
                    </span>
                  ))}
                  {result.services.length > 3 && (
                    <span className="text-xs bg-muted px-1.5 py-0.5 rounded">+{result.services.length - 3} more</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
