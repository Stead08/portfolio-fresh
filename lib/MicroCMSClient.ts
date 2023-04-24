import { createClient } from "microcms";
import { env } from "./deps.ts";

export const microcmsClient = createClient({
    serviceDomain: "vzh782w7u9",
    apiKey: `${env.get("X-MICROCMS-API-KEY")}`,
});