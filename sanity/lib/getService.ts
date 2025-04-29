import { createClient } from "next-sanity"
import { groq } from "next-sanity"

// Configure your Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

// Get a specific service by slug
export async function getServiceBySlug(slug: string) {
  const query = groq`*[_type == "offeringCategory" && slug.current == $slug][0]`
  return client.fetch(query, { slug })
}

// Search services by query
export async function getServiceBySearch(searchQuery: string) {
  const query = groq`*[_type == "offeringCategory" && (
    title match $query + "*" || 
    overview match $query || 
    services[].name match $query
  )] | order(_updatedAt desc) {
    _id,
    _type,
    
    title,
    slug,
    overview
  } `

const searchParam = searchQuery.toLowerCase()
return client.fetch(query, { searchParam })
}
