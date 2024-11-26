import FormInput from "@/app/components/form-input";
import FormButton from "@/app/components/form-btn";
import SocialLogin from "@/app/components/social-login";

export default function SMSLogin() {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Vertify your phone number.</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput name="phone" type="number" placeholder="Phone number" required />
                <FormInput name="code" type="number" placeholder="Verification code" required />
                <FormButton text="Verify" />
            </form>
        </div>
    );
}