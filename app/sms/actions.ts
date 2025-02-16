"use server";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z.object({ //현재 object형이므로 아래처럼 받아야함. {phone:phone}
    phone : z.string().trim()
    // .refine(validator.isMobilePhone, "Invalid phone number"), //아래와 동일
    .refine((phone) => validator.isMobilePhone(phone, "ko-KR"), "Wrong phone number")
})

const tokenSchema = z.object({
    token : z.coerce.number().min(100000).max(999999), // coerce:string to number
})

interface ActionState {
    token:boolean;
}

export async function smsLogin(prevState:ActionState, formData:FormData) {
    // tokenSchema.parse(formData.get("token"))
    const phone = formData.get("phone");
    const token = formData.get("token");
    if(!prevState.token) {
        // console.log("phone : ", phone);
        // console.log("token : ", token);
        const result = phoneSchema.safeParse({phone:phone});
        // console.log("result : ", result);
        if(!result.success) {
            console.log("error : ", result.error.flatten());
            return {
                token : false,
                error : result.error.flatten(),
            }
        } else {
            return {
                token : true, //page.tsx에서 사용되는 state값에 전달
            }
        }
    } else {
        // console.log("phone : ", phone);
        // console.log("token : ", token);
        const result = tokenSchema.safeParse({token:token});
        // console.log("result : ", result);
        if(!result.success) {
            return {
                token : true,
                // return the error.
            }
        } else {
            redirect("/");
        }
    }
}