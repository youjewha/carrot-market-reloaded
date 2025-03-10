"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {

    const [state, action] = useFormState(login, { error: { email: [], password: [] } });
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Hello!</h1>
                <h2 className="text-xl">Log in with eamil and password.</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <Input
                name="email"
                type="email"
                placeholder="Email"
                required={true}
                error={state?.error?.email}
                />
                <Input
                name="password"
                type="password"
                placeholder="Password"
                required={true}
                minLength={PASSWORD_MIN_LENGTH}
                error={state?.error?.password}
                />
                <Button text="Log In" />
            </form>
            <SocialLogin />
        </div>
    )
}