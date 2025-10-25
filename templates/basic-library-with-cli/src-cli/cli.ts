import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { hello } = await import(path.join(__dirname, "index.js"));

console.log(hello());
