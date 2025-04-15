import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getServiceBySlug = async (slug:string) => {
    const Product_By_Slug_Query = defineQuery(`
  *[_type == "offeringCategory" && slug.current == $slug][0] {
    title,
    overview,
    "slug": slug.current,
    image {
      asset -> {
        url
      }
    },
    features{
      heading,
      highlightedText,
      headingDescription,
      imageSrc {
        asset -> {
          url
        }
      },
      imageAlt,
      features[] {
        iconSrc {
          asset -> {
            url
          }
        },
        text,
      }

    },
    offering[] {
      type,
      title,
      description,
      coverageItems,
      backgroundImage {
        asset -> {
          url
        }
      }
    }
  }
`)
        try {
            const product = await sanityFetch({
                query: Product_By_Slug_Query,
                params: { slug },
            })
            return product.data || null
        } catch (error) {
            console.error("Error fetching products",error)
        }
}