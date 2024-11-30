"use server";
import { z } from "zod";
import {
    PASSWORD_MIN_LENGTH,
    PASSWORD_REGEX,
    PASSWORD_REGEX_ERROR,
} from "@/app/lib/constants";
import db from "@/app/lib/db";
import bcrypt from "bcrypt";
import {getIronSession} from "iron-session";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import getSession from "@/app/lib/session";

const formSchema = z
    .object({
        username: z
            .string({
                invalid_type_error: "Username must be a string!",
                required_error: "Where is my username???",
            })
            .trim()
            .toLowerCase()
            .transform((username) => `${username}`)
            .refine(
                (username) => !username.includes("potato"),
                "No potatoes allowed!"
            ),
        email: z.string().email(),
        password: z.string().min(PASSWORD_MIN_LENGTH),
            // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
        confirmPW: z.string().min(PASSWORD_MIN_LENGTH),
    })
    .superRefine(({ password, confirmPW }, ctx) => {
        if (password !== confirmPW) {
            ctx.addIssue({
                code: "custom",
                message: "Two passwords should be equal",
                path: ["confirm_password"],
            });
        }
    })
    .superRefine(async ({ username }, ctx) => {
        const user = await db.user.findUnique({
            where: {
                username,
            },
            select: {
                id: true,
            },
        });
        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "This username is already taken",
                path: ["username"],
                fatal: true, // 여기서 에러가 발생하면 뒤에 refine이 실행안됨
            });
            return z.NEVER;
        }
    })
    .superRefine(async ({ email }, ctx) => {
        const user = await db.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
            },
        });
        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "This email is already taken",
                path: ["email"],
                fatal: true,
            });
            return z.NEVER;
        }
    })

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
    else {
        const hashedPassword = await bcrypt.hash(result.data.password, 12);
        const user = await db.user.create({
            data: {
                username: result.data.username,
                email: result.data.email,
                password: hashedPassword,
            },
            select: {
                id: true,
            },
        });

        const session = await getSession();

        session.id = user.id
        await session.save();

        redirect("/profile");
    }
}