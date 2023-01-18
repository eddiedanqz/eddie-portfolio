import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'5t7ugr6k',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
})


const builder = imageUrlBuilder(client);

export const imageUrlFor = (source) => builder.image(source);