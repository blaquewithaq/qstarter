import { createHash } from "node:crypto";

export function anonymizeIp(ip: string, salt: string): string {
	return createHash("sha256")
		.update(ip + salt)
		.digest("hex");
}
