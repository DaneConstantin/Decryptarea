// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const FEATURED_QUERY = groq`*[_type == "product" && featured == true]`;

export const FEATURED_GUIDES = groq`*[_type == "guides" && featured == true]`;

// export const FEATURED_COMPONENT_QUERY = groq`*[_type == "component" && defined(productCategory) && productCategory->slug.current == 'component']`;

export const ALLPRODUCTS_QUERY = groq`*[_type == 'product' && defined(slug)]`;
export const PRODUCT_QUERY = groq`*[_type == "product" && slug.current == $slug][0]`;


export const ALLGUIDES_QUERY = groq`*[_type == 'guides' && defined(slug)]`;
export const GUIDE_QUERY = groq`*[_type == "guides" && slug.current == $slug][0]{
  ...,
  "headings": body[style == "h4"]
}`;

