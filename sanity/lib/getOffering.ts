import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getServiceBySlug = async (slug: string) => {
  const Product_By_Slug_Query = defineQuery(`
  *[_type == "offeringCategory" && slug.current == $slug][0]  {
    title,
    overview,
    "slug": slug.current,
    image {
      asset -> {
        url
      }
    },
    features[]{
      featuresTitle,
      featuresList
    },
    offering[] {
        ...,
        _type == "offeringItem" => {
          type,
          title,
          description,
          backgroundIcon{
          asset -> {
            url
          }
        }
        },
        _type == "titleBlock" => {
          title
        }
      },
      
    
  } 
`);
  try {
    const product = await sanityFetch({
      query: Product_By_Slug_Query,
      params: { slug },
    });
    return product.data || null;
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    return null;
  }
};