import conf from "../conf/conf"
import { Client, Account, ID, Databases, Query, Storage} from "appwrite";
import authService from "./auth";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwrite_URL)
        .setProject(conf.appwrite_projectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    };

    async createPost({title, slug, tagline, content, featured_image, status, userid}){
        const username = await authService.getCurrentUser()

        try {
            return await this.databases.createDocument(
                conf.appwrite_databaseID,
                conf.appwrite_collectionID,
                slug,
                {
                    title,
                    tagline,
                    content,
                    featured_image,
                    status, 
                    userid,
                    username: username.name
                }
            )
        } catch (error) {
            console.log("AppWrite :: createPost :: error", error);
            
        }
    }
    
    async updatePost(slug, {title, tagline, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwrite_databaseID,
                conf.appwrite_collectionID,
                slug,
                {
                    title,
                    tagline,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("AppWrite :: Update post :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwrite_databaseID,
                conf.appwrite_collectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("AppWrite :: Delete Post :: error", error);
            
        }
        return false;
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwrite_databaseID,
                conf.appwrite_collectionID,
                slug
            )
        } catch (error) {
            console.log("AppWrite :: GetPost :: error", error);
        }
    }

    

    async getPosts(queries=[Query.equal("status", "Active")]){
        
        try {
            return await this.databases.listDocuments(
                conf.appwrite_databaseID,
                conf.appwrite_collectionID,
                queries
            )
        } catch (error) {
            console.log("AppWrite :: GetPosts :: error", error);
        }
    }

    // Bucket methods

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwrite_bucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppWrite :: Upload FIle :: error", error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwrite_bucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log("AppWrite :: Delete FIle :: error", error);
        }
        return false;
    } 

    async getFilePreview(fileId){
        
        try {
            // return await this.bucket.getFilePreview(
            //     conf.appwrite_bucketID,
            //     fileId
            // );
            const result = await this.bucket.getFileView(
                conf.appwrite_bucketID,
                fileId
            )
            return result;
            
        } catch (error) {
            console.log("AppWrite :: File preview :: error", error);
            return false;
        }
    }

}

const service = new Service()

export default service;