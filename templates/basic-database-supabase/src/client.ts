import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabase.js";

export interface ClientOptions {
	url: string;
	publishableKey: string;
	secretKey: string;
	options?: {
		serviceRole?: boolean;
		autoRefreshToken?: boolean;
		persistSession?: boolean;
		detectSessionInUrl?: boolean;
	};
}

export type Client = ReturnType<typeof createClient<Database>>;

export function useClient({
	url,
	publishableKey,
	secretKey,
	options,
}: ClientOptions): Client {
	const key = (options?.serviceRole ? secretKey : publishableKey) as string;

	return createClient<Database>(url, key, {
		auth: {
			autoRefreshToken: options?.autoRefreshToken ?? true,
			persistSession: options?.persistSession ?? true,
			detectSessionInUrl: options?.detectSessionInUrl ?? true,
		},
	});
}
