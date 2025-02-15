import { InputHTMLAttributes } from "react";

interface InputProps {
    error?: string[];
    name:string;
}

export default function Input(
    {error = [], name,
        ...rest //나머지 변수가 전부 담김
    }: InputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
    <div className="flex flex-col gap-2">
        <input className="bg-transparent rounded-md w-full h-10 focus:outline-none
        ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none
        placeholder:text-neutral-400"
        name={name}
        {...rest}
        />
        {error && error.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">{error}</span>
        ))}
    </div>
    )
}