import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

db.user.create({
    data: {
        username: ""
    }
})

export default db;