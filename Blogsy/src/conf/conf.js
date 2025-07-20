const conf = {
    appwrite_URL: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_collectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_bucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwrite_apikey: String(import.meta.env.VITE_APPWRITE_API_KEY0,)
}

export default conf;