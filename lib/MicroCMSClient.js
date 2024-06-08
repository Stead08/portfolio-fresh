import { createClient } from "https://esm.sh/microcms-js-sdk@3.1.1";

export const microcmsClient = createClient({
  serviceDomain: "vzh782w7u9",
  apiKey: `${Deno.env.get("X-MICROCMS-API-KEY")}`,
});
