"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { debounce } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"
import { createClient } from "next-sanity"

// Static pages from your array
const staticPages = [
  { title: "About Us", path: "/company/about" },
  { title: "Contact", path: "/contact" },
  { title: "Careers", path: "/company/career" },
  { title: "Leadership", path: "/company/leadership" },
  { title: "RFP", path: "/rfp" },
  { title: "Privacy Policy", path: "/privacy" },
  { title: "Terms of Use", path: "/terms" },
  { title: "Cookie Policy", path: "/Cookies" },
  { title: "Software", path: "/erp" },
  { title: "Zakwan", path: "/company/leadership" },
  { title: "Zabeeh", path: "/company/leadership" },
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
  type: "static" | "offering" | "offeringItem" | "other" | "service"
  parentTitle?: string
  parentSlug?: string
  elementId?: string // Added to store the element ID for scrolling
}

// Store the last selected item for navigation after page load
let lastSelectedItem: SearchResult | null = null

export default function Searching() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const pathname = usePathname()

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
      const offeringCategoryQuery = `*[_type == "offeringCategory" && title match "*${searchQuery}*"] {
        _id,
        _type,
        title,
        slug,
        overview,
        "image": image.asset->url,
        services
      }`

      // GROQ query to search for offeringItems within offeringCategory documents
      const offeringItemsQuery = `*[_type == "offeringCategory"] {
        _id,
        _type,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        "offeringItems": offering[_type == "offeringItem" && title match "*${searchQuery}*"] {
          _key,
          title,
          description,
          type
        }
      }[count(offeringItems) > 0]`

      const [categoryData, itemsData] = await Promise.all([
        client.fetch(offeringCategoryQuery),
        client.fetch(offeringItemsQuery),
      ])

      // Process category results
      const categoryResults = categoryData.map((item: any) => ({
        _id: item._id,
        _type: item._type,
        title: item.title,
        path: `/services/${item.slug?.current}`,
        slug: item.slug,
        overview: item.overview,
        description: item.overview || "",
        image: item.image,
        services: item.services,
        type: "offering",
      }))

      // Process offering items results
      const offeringItemResults: SearchResult[] = []

      itemsData.forEach((category: any) => {
        if (category.offeringItems && category.offeringItems.length > 0) {
          category.offeringItems.forEach((item: any) => {
            const elementId = item.title.toLowerCase().replace(/\s+/g, "-")
            offeringItemResults.push({
              _id: `${category._id}-${item._key || item.title}`,
              _type: "offeringItem",
              title: item.title,
              path: `/services/${category.slug}#${elementId}`,
              description: item.description || "",
              image: category.image,
              type: "offeringItem",
              parentTitle: category.title,
              parentSlug: category.slug,
              elementId: elementId, // Store the element ID for direct scrolling
            })
          })
        }
      })

      return [...categoryResults, ...offeringItemResults]
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

  // Function to scroll to an element with ID
  const scrollToElement = (elementId: string) => {
    console.log("Attempting to scroll to element:", elementId)

    // Try to find the element
    const element = document.getElementById(elementId)

    if (element) {
      console.log("Element found, scrolling...")

      // Scroll the element into view with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Add highlight effect
      element.classList.add("highlight-element")
      setTimeout(() => {
        element.classList.remove("highlight-element")
      }, 2000)

      return true
    } else {
      console.log("Element not found")
      return false
    }
  }

  // Check for navigation after page load
  useEffect(() => {
    // If we have a lastSelectedItem and we're on the correct page
    if (lastSelectedItem && lastSelectedItem.type === "offeringItem" && lastSelectedItem.elementId) {
      const currentPath = window.location.pathname
      const expectedPath = lastSelectedItem.path.split("#")[0]

      if (currentPath === expectedPath) {
        console.log("Page loaded, attempting to scroll to:", lastSelectedItem.elementId)

        // Try to scroll immediately
        if (!scrollToElement(lastSelectedItem.elementId)) {
          // If element not found, try again after content has likely loaded
          const attempts = [100, 300, 600, 1000, 1500, 2000]

          attempts.forEach((delay, index) => {
            setTimeout(() => {
              console.log(`Attempt ${index + 1} to scroll to ${lastSelectedItem?.elementId}`)
              scrollToElement(lastSelectedItem?.elementId || "")
            }, delay)
          })
        }

        // Clear the lastSelectedItem after navigation
        lastSelectedItem = null
      }
    }
  }, [pathname])

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  const handleSelect = (result: SearchResult) => {
    clearSearch()

    // For offering items, store the item for post-navigation scrolling
    if (result.type === "offeringItem" && result.elementId) {
      console.log("Selected offering item:", result.title, "with ID:", result.elementId)
      lastSelectedItem = result

      // Navigate to the page without the hash
      const basePath = result.path.split("#")[0]
      console.log("Navigating to:", basePath)

      // Use window.location for a full page navigation
      window.location.href = result.path
    } else {
      // For regular navigation without hash
      router.push(result.path)
    }
  }

  const filteredResults = activeTab === "all" ? results : results.filter((result) => result.type === activeTab)

  return (
    <>
      {/* Inline styles for highlight effect */}
      <style jsx global>{`
        .highlight-element {
          animation: highlight-pulse 2s ease-in-out;
          scroll-margin-top: 100px; /* Add space at the top when scrolling to the element */
        }
        
        @keyframes highlight-pulse {
          0% {
            background-color: transparent;
          }
          25% {
            background-color: rgba(var(--primary-rgb, 79, 70, 229), 0.2);
            box-shadow: 0 0 20px rgba(var(--primary-rgb, 79, 70, 229), 0.4);
            transform: scale(1.03);
          }
          75% {
            background-color: rgba(var(--primary-rgb, 79, 70, 229), 0.15);
            box-shadow: 0 0 15px rgba(var(--primary-rgb, 79, 70, 229), 0.3);
          }
          100% {
            background-color: transparent;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="relative w-full mx-auto" ref={searchRef}>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search offerings and pages..."
            className="w-full pl-8 pr-10 h-9 md:h-10"
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
          <Card className="absolute top-full mt-1 w-full z-50 max-h-[60vh] lg:max-h-[70vh] overflow-auto shadow-lg">
            <CardContent className="p-0">
              {query.length < 2 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  Type at least 2 characters to search
                </div>
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
                        {results.some((r) => r.type === "offeringItem") && (
                          <TabsTrigger value="offeringItem" className="text-xs">
                            Services ({results.filter((r) => r.type === "offeringItem").length})
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
                    <TabsContent value="offeringItem" className="m-0">
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
    </>
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
                      : result.type === "offeringItem"
                        ? "Service"
                        : result._type || "Content"}
                </span>
              </div>

              {result.parentTitle && <p className="text-xs text-primary mt-0.5">In: {result.parentTitle}</p>}

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
