import {redirect} from "next/navigation";

"user server";

export async function handleForm(prevState:any,formData:FormData){
    redirect("/");
    return {
        errors: ['wrong password!', "password short"]
    }
}