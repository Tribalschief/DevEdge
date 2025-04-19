"use server"

import { createClient } from "next-sanity"
import { groq } from "next-sanity"

// Configure your Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: false, // Don't use CDN for server actions to get fresh data
})

// Server action to search Sanity content
export async function searchSanityContent(query: string) {
  if (!query || query.length < 2) return []

  try {
    // GROQ query to search across offeringCategory documents
    const searchQuery = groq`*[_type == "offeringCategory" && (
      title match $query + "*" || 
      overview match $query || 
      services[].name match $query
    )] {
      _id,
      _type,
      title,
      slug,
      overview,
      "image": image.asset->url,
      services[] {
        name,
        "image": image.asset->url
      }
    }`

const results = await client.fetch(searchQuery)

    return results.map((item: any) => ({
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
    console.error("Error searching Sanity content:", error)
    return []
  }
}
