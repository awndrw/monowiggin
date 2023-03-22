import { getInternalHosts } from "./internal";

const env =
  process.env.VERCEL_ENV ??
  process.env.NEXT_PUBLIC_VERCEL_ENV ??
  process.env.NODE_ENV ??
  "";

export const HOSTS = getInternalHosts(env);

export * from "./external";
