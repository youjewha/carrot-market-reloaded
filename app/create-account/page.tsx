"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useActionState } from "react";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
export default function CreateAccount() {
    const [state, action] = useActionState(createAccount, null);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Hello!</h1>
                <h2 className="text-xl">Fill in the form below to join</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <Input
                name="username"
                type="text"
                placeholder="Username"
                required={true}
                error={state?.fieldErrors?.username}
                minLength={3}
                maxLength={10}
                />
                <Input
                name="email"
                type="email"
                placeholder="Email"
                required={true}
                error={state?.fieldErrors?.email}
                />
                <Input
                name="password"
                type="password"
                placeholder="Password"
                required={true}
                error={state?.fieldErrors?.password}
                minLength={PASSWORD_MIN_LENGTH}
                />
                <Input
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                required={true}
                error={state?.fieldErrors?.confirmPassword}
                minLength={4}
                />
                <Button text="Create Account"/>
            </form>
            <SocialLogin />
        </div>
    )
}