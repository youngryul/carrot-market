"use client";
import { z } from "zod";
import {
    PASSWORD_MIN_LENGTH,
    PASSWORD_REGEX,
    PASSWORD_REGEX_ERROR,
} from "@/app/lib/constants";

const formSchema = z
    .object({
        username: z
            .string({
                invalid_type_error: "Username must be a string!",
                required_error: "Where is my username???",
            })
            .trim()
            .toLowerCase()
            .transform((username) => `🔥 ${username}`)
            .refine(
                (username) => !username.includes("potato"),
                "No potatoes allowed!"
            ),
        email: z.string().email(),
        password: z.string().min(10).min(PASSWORD_MIN_LENGTH)
            .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
        confirmPW: z.string().min(PASSWORD_MIN_LENGTH),
    })
    .superRefine(({ password, confirm_password }, ctx) => {
        if (password !== confirm_password) {
            ctx.addIssue({
                code: "custom",
                message: "Two passwords should be equal",
                path: ["confirm_password"],
            });
        }
    });

export async function createAccount(prevState:any, formData:FormData) {
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPW: formData.get("confirmPW"),
    };

    const result = formSchema.safeParse(data);

    if(!result.success) {
        return result.error.flatten();
    }
}