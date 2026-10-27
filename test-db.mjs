import "dotenv/config";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 10000,
});

client.connect()
  .then(() => {
    console.log("✅ PostgreSQL connection successful!");
    return client.end();
  })
  .catch((error) => {
    console.error("❌ PostgreSQL connection failed:");
    console.error(error);
    process.exitCode = 1;
    return client.end().catch(() => undefined);
  });
