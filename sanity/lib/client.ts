import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'lfiibxjy', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false,  // `false` if you want to ensure fresh data
  apiVersion: "2023-05-03",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
})
export default client;