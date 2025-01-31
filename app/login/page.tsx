"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {

    const [state, action] = useFormState(handleForm, { error: [] });
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Hello!</h1>
                <h2 className="text-xl">Log in with eamil and password.</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput
                name="email"
                type="email"
                placeholder="Email"
                required={true}
                />
                <FormInput
                name="password"
                type="password"
                placeholder="Password"
                required={true}
                />
                <FormButton text="Log In" />
            </form>
            <SocialLogin />
        </div>
    )
}