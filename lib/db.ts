import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

async function main() {
    const db = drizzle(process.env.DATABASE_URL!)
}

main();