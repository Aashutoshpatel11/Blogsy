import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwrite_URL)
        .setProject(conf.appwrite_projectID);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        console.log(email,password,name);
        
        try {
            const userAccount = await this.account.create( ID.unique(), email, password, name )
            console.log(userAccount);
            
            if( userAccount ){
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AppWrite Service :: GetCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log("Appwrite :: Logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;