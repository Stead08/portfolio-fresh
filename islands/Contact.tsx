import {useCallback, useState} from "preact/hooks";
import IconLoaderQuarter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/loader-quarter.tsx";
import { microcmsClient } from "../lib/MicroCMSClient.ts";

interface Form {
    mail: string;
    message: string;
}

export const Contact = () => {
    const [status, setStatus] = useState<"sending" | "sent" | "error">();
    const [form, setForm] = useState<Form>({
        mail: "",
        message: "",
    });
    const submit = useCallback(async (event: Event) => {
        event.preventDefault();
            setStatus("sending");
            const response = await microcmsClient.create<Form>({
                endpoint: 'contact',
                content: {
                    email: form.mail,
                    message: form.message,
                },
            })
                .then((res) => {
                    setStatus("sent");
                    console.log(res);
                })
                .catch((err) => {
                    setStatus("error");
                    console.log(err)}
                );
    }, [form]);
    return (
        <section
            id="contact"
            className="lg:grid-cols-desktop grid scroll-mt-16 grid-cols-1 gap-x-10 gap-y-4"
        >
            <h3 className="text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-center">Contact</h3>
            <div>
                {status === "sent" ? <h3>sent</h3>
                    : (
                        <form onSubmit={submit} className="space-y-3">
                            {status === "error" && <h3>error</h3>}
                            <div className="space-y-1">
                                <label for="mail" className="text-sm uppercase">
                                    email
                                </label>

                                <input
                                    type="text"
                                    id="mail"
                                    name="mail"
                                    className="border(gray-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-gray-100 px-3 py-2 dark:bg-gray-800"
                                    required
                                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                    onInput={(e) => {
                                        setForm((current) => ({
                                            ...current,
                                            mail: e.currentTarget.value,
                                        }));
                                    }}/>
                            </div>
                            <div className="space-y-1">
                                <label form="message" className="text-sm uppercase">message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="border(gray-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-gray-100 px-3 py-2 dark:bg-gray-800"
                                    required
                                    onInput={(e) => {
                                        setForm((current) => ({
                                            ...current,
                                            message: e.currentTarget.value,
                                        }));
                                    }}
                                >
                            </textarea>
                            </div>
                            <div class="flex justify-center">
                                {status === "sending" ? (
                                    <IconLoaderQuarter class="text-sm uppercase w-6 h-6"/>
                                ) : (
                                    <input
                                        type="submit"
                                        className="text-sm uppercase border(gray-500 1) hover:(bg-gray-200 dark:bg-gray-700) disabled:(opacity-50 cursor-not-allowed)  cursor-pointer rounded-md bg-gray-100 px-3 py-2 active:bg-gray-300 dark:bg-gray-800"
                                        value="send"/>)}
                            </div>
                        </form>
                    )}
            </div>
        </section>
    )

}

export default Contact;