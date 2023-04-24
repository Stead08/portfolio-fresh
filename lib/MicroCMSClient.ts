import { createClient } from "microcms";

export const microcmsClient = createClient({
    serviceDomain: "vzh782w7u9",
    apiKey: `${Deno.env.get("X-MICROCMS-API-KEY")}`,
});