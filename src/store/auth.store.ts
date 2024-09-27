import { create } from "zustand";
interface AuthState{
    status:'authenticated'|'unauthenticated'|'checking',
    token?:string,
    user?:{
        name: string;
        email:string;
    }
    login: (email:string,password:string)=>void,
    logout:()=>void,
}
export const UseAuthStore=create<AuthState>() ( (set)=>({
    status:'checking',
    token:'undefined',
    user:undefined, 
    login:(email:string,password:string)=>{
        set({
            status:'authenticated',
            token:'23456',
            user:{
                name: 'david',
                email:email,
            },
        });
    },
    logout:()=>{
        set({
            status:'unauthenticated',
            token:undefined,
            user:undefined,
        })
    }
}))
export default AuthState