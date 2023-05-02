import { PrismaClient } from "@prisma/client";

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default client