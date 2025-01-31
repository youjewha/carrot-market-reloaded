"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useActionState } from "react";
import { createAccount } from "./actions";

export default function CreateAccount() {
    const [state, action] = useActionState(createAccount, null);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Hello!</h1>
                <h2 className="text-xl">Fill in the form below to join</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput
                name="username"
                type="text"
                placeholder="Username"
                required={true}
                errors={state?.fieldErrors?.username}
                />
                <FormInput
                name="email"
                type="email"
                placeholder="Email"
                required={true}
                errors={state?.fieldErrors?.email}
                />
                <FormInput
                name="password"
                type="password"
                placeholder="Password"
                required={true}
                errors={state?.fieldErrors?.password}
                />
                <FormInput
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                required={true}
                errors={state?.fieldErrors?.confirmPassword}
                />
                <FormButton text="Create Account"/>
            </form>
            <SocialLogin />
        </div>
    )
}