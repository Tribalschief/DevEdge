"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

// Country codes data
export const countryCodes = [
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+970", country: "Palestine", flag: "🇸🇦" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+970", country: "Palestine", flag: "🇵🇸" },
  { code: "+1", country: "Puerto Rico", flag: "🇵🇷" },
  { code: "+508", country: "France", flag: "🇫🇷" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+675", country: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+689", country: "French Polynesia", flag: "🇵🇫" },
  { code: "+51", country: "Peru", flag: "🇵🇪" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+683", country: "Niue", flag: "🇳🇺" },
  { code: "+674", country: "Nauru", flag: "🇳🇷" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+672", country: "Norfolk Island", flag: "🇳🇫" },
  { code: "+227", country: "Niger", flag: "🇳🇪" },
  { code: "+687", country: "New Caledonia", flag: "🇳🇨" },
]

interface CountryCodeSelectorProps {
  value: string
  onChange: (code: string) => void
  className?: string
}

export function CountryCodeSelector({ value, onChange, className = "" }: CountryCodeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return countryCodes.find((c) => c.code === value) || countryCodes[0]
  })
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const country = countryCodes.find((c) => c.code === value)
    if (country) {
      setSelectedCountry(country)
    }
  }, [value])

  const handleSelect = (country: (typeof countryCodes)[0]) => {
    setSelectedCountry(country)
    onChange(country.code)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className="flex items-center border-b border-gray-300 h-10 cursor-pointer px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-xl">{selectedCountry.flag}</span>
            <span className="text-sm">{selectedCountry.code}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-sm shadow-lg">
          {countryCodes.map((country) => (
            <div
              key={country.code}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(country)}
            >
              <span className="text-xl">{country.flag}</span>
              <span>{country.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
