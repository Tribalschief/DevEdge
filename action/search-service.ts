"use server"

import { getServiceBySearch } from "@/sanity/lib/getService"


export async function searchServices(query: string) {
  if (!query || query.length < 2) {
    return []
  }

  try {
    const results = await getServiceBySearch(query)
    return results
  } catch (error) {
    console.error("Error searching services:", error)
    return []
  }
}