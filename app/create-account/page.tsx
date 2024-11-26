"use client";

import FormInput from "@/app/components/form-input";
import FormButton from "@/app/components/form-btn";
import SocialLogin from "@/app/components/social-login";
import {useActionState} from "react";
import {createAccount} from "@/app/create-account/action";


export default function CreateAccount() {
    const [state, action] = useActionState(createAccount, null);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput
                    name="userName"
                    type="text"
                    placeholder="UserName"
                    required
                    errors={state?.fieldErrors.username}
                />
                <FormInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    errors={state?.fieldErrors.email}
                />
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    errors={state?.fieldErrors.password}
                />
                <FormInput
                    name="confirmPW"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    errors={state?.fieldErrors.confirmPW}
                />
                <FormButton text="Create account" />
            </form>
            <SocialLogin />
        </div>
    );
}