export default function Profile() {
    import db from "@/app/lib/db";
    import getSession from "@/app/lib/session";
    import { notFound, redirect } from "next/navigation";
    async function getUser() {
        const session = await getSession();
        if (session.id) {
            const user = await db.user.findUnique({
                where: {
                    id: session.id,
                },
            });
            if (user) {
                return user;
            }
        }
        notFound(); // session id가 없을 경우 notFound 페이지로 이동 시킴
    }
    export default async function Profile() {
        const user = await getUser();
        const logOut = async () => {
            "use server";
            const session = await getSession();
            await session.destroy();
            redirect("/");
        };
        return (
            <div>
                <h1>Welcome! {user?.username}!</h1>
                <form action={logOut}>
                    <button>Log out</button>
                </form>
            </div>
        );