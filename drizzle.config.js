import { config as loadEnv } from "dotenv";
import path from "path";
loadEnv();

console.log("Schema Path:", path.resolve("./configs/Schema.jsx"));

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/Schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://agri-shield_owner:Cad2F7NWElRo@ep-old-recipe-a57wssnl.us-east-2.aws.neon.tech/Ai-Course-generator?sslmode=require',
  },
};
