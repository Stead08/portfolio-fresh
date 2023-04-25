import {createClient} from "microcms";
import {type Form} from "./types.ts";
type Endpoints = {
    object: {
        contact: Form;
    };
};
export const microcmsClient = createClient<Endpoints>({
    serviceDomain: "vzh782w7u9",
    apiKey: `${Deno.env.get("X-MICROCMS-API-KEY")}`,
});