"use server";
import { z } from "zod";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE } from "@/lib/constants";

const formSchema = z.object({
    email : z.string().email().toLowerCase(),
    password : z.string({
        required_error : "Password is required",
    }).min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
})

export async function login(prevState:any, formData:FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    }
    const result = formSchema.safeParse(data);
    if(!result.success) {
        return {
            error : result.error.flatten().fieldErrors,
        }
    }
    return { 
        error : {
            email : [],
            password : [],
        }
    }
}