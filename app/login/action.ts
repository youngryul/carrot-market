"use server";

import {redirect} from "next/navigation";

export async function handleForm(prevState:any,formData:FormData){
    redirect("/");
    return {
        errors: ['wrong password!', "password short"]
    }
}