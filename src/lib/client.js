import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'f2peo1n1',
  dataset: 'production',
  apiVersion: '2022-11-26',
  useCdn: true,
  token: process.env.REACT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source) 