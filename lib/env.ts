import { z } from 'zod';

const envSchema = z.object({
	NEXT_PUBLIC_DISCOVERY_CALL_URL: z.url(),
	NEXT_PUBLIC_X_URL: z.url(),
	NEXT_PUBLIC_EMAIL: z.email(),
});

export const env = envSchema.parse({
	NEXT_PUBLIC_DISCOVERY_CALL_URL: process.env.NEXT_PUBLIC_DISCOVERY_CALL_URL,
	NEXT_PUBLIC_X_URL: process.env.NEXT_PUBLIC_X_URL,
	NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
});
