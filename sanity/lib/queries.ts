// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const FEATURED_QUERY = groq`*[_type == "product" && defined(productCategory) && productCategory->slug.current == 'template' && featured == true]`;

// export const FEATURED_COMPONENT_QUERY = groq`*[_type == "component" && defined(productCategory) && productCategory->slug.current == 'component']`;


export const ALLTEMPLATES_QUERY = groq`*[_type == 'product' && defined(productCategory) && productCategory->slug.current == 'template']`;

export const ALLCOMPONENTS_QUERY = groq`*[_type == 'component' && defined(productCategory) && productCategory->slug.current == 'component']`;


export const POSTS_QUERY = groq`*[_type == "product" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "product" && slug.current == $slug][0]`;

export const COMPONENTS_QUERY = groq`*[_type == "component" && defined(slug)]`;

export const COMPONENT_QUERY = groq`*[_type == "component" && slug.current == $slug][0]`;
