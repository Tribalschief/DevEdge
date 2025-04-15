import { defineQuery } from "next-sanity";
import { client } from "./client";

export const getService = async () => {
    const Product_By_Slug_Query = defineQuery(`
    *[_type == "offeringCategory" ] {
      title,
      "slug": slug.current
    }
  `)
        try {
            const services = await client.fetch(Product_By_Slug_Query)
            return services
          } catch (error) {
            console.error("Error fetching services:", error)
            return []
          }
}