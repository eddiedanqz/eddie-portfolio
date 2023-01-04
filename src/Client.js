import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId:'5t7ugr6k',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true
})

export default client