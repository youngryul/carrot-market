import FormInput from "@/app/components/form-input";
import FormButton from "@/app/components/form-btn";
import { useFormState } from "react-dom";
import { smsVerification } from "./actions";

const initialState = {
    token: false,
    error: undefined,
};

export default function SMSLogin() {
    const [state, action] = useFormState(smsVerification, initialState);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Vertify your phone number.</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                {state.token ? (
                    <FormInput
                        name="token"
                        type="number"
                        placeholder="Verification code"
                        required
                        min={100000}
                        max={999999}
                    />
                ) : (
                    <FormInput
                        name="phone"
                        type="text"
                        placeholder="Phone number"
                        required
                        errors={state.error?.formErrors}
                    />
                )}
                <FormButton text={state.token ? "Verify Token" : "Send Verification SMS"} />
            </form>
        </div>
    );
}