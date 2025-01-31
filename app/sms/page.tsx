import { ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function SMSLogin() {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Verify your phone number.</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput
                name="number"
                type="number"
                placeholder="Phone Number"
                required={true}
                errors={[]}
                />
                <FormInput
                name="number"
                type="number"
                placeholder="Verification Code"
                required={true}
                errors={[]}
                />
                <FormButton text="Verify" loading={false} />
            </form>
        </div>
    )
}