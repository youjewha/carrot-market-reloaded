"use client";

import { ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import { useFormState } from "react-dom";
import { smsLogin } from "./actions";

const initialState = {
    token: false,
    error: undefined,
}

export default function SMSLogin() {
    const [state, dispatch] = useFormState(smsLogin, initialState);

    // console.log("state : ", state);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Verify your phone number.</h2>
            </div>
            <form action={dispatch} className="flex flex-col gap-3">
                {state.token ? (
                    <Input
                    name="token"
                    type="number"
                    placeholder="Verification Code"
                    required={true}
                    min={100000}
                    max={999999}
                    />
                ) : <Input
                name="phone"
                type="text"
                placeholder="Phone Number"
                required={true}
                error={state.error?.fieldErrors?.phone}
                />}
                <Button text={state.token ? "Verify Token" : "Send VerificationSMS"}/>
            </form>
        </div>
    )
}