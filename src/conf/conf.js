const conf={
    MyAIURL:String(import.meta.env.VITE_MYAI_URL),
    MyAIProjectId:String(import.meta.env.VITE_MYAI_PROJECT_ID),
    MyAIDatabaseId:String(import.meta.env.VITE_MYAI_DATABASE_ID),
    MyAICollectionId:String(import.meta.env.VITE_MYAI_USER_COLLECTION_ID),
    MyAIUserDetailId:String(import.meta.env.VITE_MYAI_DIARY_COLLECTION_ID),
    MyAIBucketId:String(import.meta.env.VITE_MYAI_BUCKET_ID),
    MyAIInboxCollectionId:String(import.meta.env.VITE_MYAI_HEALTH_COLLECTION_ID)
 }
 export default conf