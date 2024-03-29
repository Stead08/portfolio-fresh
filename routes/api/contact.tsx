import { microcmsClient } from "../../lib/MicroCMSClient.js";
import { Handlers, STATUS_CODE } from "$fresh/server.ts";
import { Form } from "../../lib/types.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    const form: Form = await req.json();
    return await microcmsClient
      .create({
        endpoint: "contact",
        content: {
          email: form.email,
          message: form.message,
        },
      })
      .then(() => {
        return new Response("", { status: STATUS_CODE.Created });
      })
      .catch((e) => {
        console.error(e);
        return new Response("", { status: STATUS_CODE.InternalServerError });
      });
  },
};
