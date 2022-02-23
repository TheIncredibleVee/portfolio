import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mem40bvx',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skfxndbLhtoRXH6SZ5xmuXxVfSkZze9NEqRohrkn5QBKaAtYGjPAxubnTvcC6KCGx7Kf6YJGSGEG1No4Fk7NUxMJglqy5CPhOqvVe58UsYb4w3kPPcsw98q8KOAJCAGGXbldLuzbf21TVgBSN8eDbNVyI9usLNJqIoBHozSDVV44pzRm0338',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
