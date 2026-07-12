import { PrismaClient } from "../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Parse DATABASE_URL or use individual env variables
function createAdapter() {
    const dbUrl = process.env.DATABASE_URL;
    
    if (dbUrl) {
        const url = new URL(dbUrl);
        return new PrismaMariaDb({
            host: url.hostname,
            port: parseInt(url.port) || 3306,
            user: url.username,
            password: url.password,
            database: url.pathname.slice(1), // Remove leading '/'
            connectionLimit: 10,
        });
    }
    
    // Fallback to individual env variables
    return new PrismaMariaDb({
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "booking_db",
        connectionLimit: 10,
    });
}

const adapter = createAdapter();
const prisma = new PrismaClient({ adapter });

export default prisma;