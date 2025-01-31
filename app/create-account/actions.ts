"use server";
import { z } from "zod";

// function checkUsername(username:string) {
//     return !username.includes("potato");
// }

const checkUsername = (username:string) => 
    !username.includes("potato");

const checkPassword = ({password, confirmPassword}:{password:string, confirmPassword:string}) => 
    password === confirmPassword;

const formSchema = z.object({
    username : z.string({
        invalid_type_error : "Username must be a string",
        required_error : "Username is required",
    })
    .min(3, "Way too short!").max(10, "Way too long!")
    .refine(checkUsername, "No potato allowed!"),
    email : z.string().email(),
    password : z.string().min(10),
    confirmPassword : z.string().min(10),
}).refine(checkPassword, { message:"Both passwords must match", path:["confirmPassword"]});
//즉, 전체 object에 대한 refine을 만들고, 그 다음에 path를 설정해줘서 refine을 함

export async function createAccount(prevState:any, formData:FormData) {
    const data = { //유효성 검사 대상
        username : formData.get("username"),
        email : formData.get("email"),
        password : formData.get("password"),
        confirmPassword : formData.get("confirmPassword"),
    };
    const result = formSchema.safeParse(data);
    if (!result.success) {
        return result.error.flatten();
    }
}