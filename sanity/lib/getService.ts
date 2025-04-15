
import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getServices = async () => {
    const Title = defineQuery(`
    *[_type == "offeringCategory" ] {
    title,
    slug {
      current
    }
  }
  `)
        
return Title || null
        
}