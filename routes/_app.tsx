import { PageProps } from "$fresh/server.ts";
import { css } from "twind/css";
const globalStyles = css({
  ":global": {
    html: {
      scrollBehavior: "smooth",
    },
  },
});

export default function App({ Component }: PageProps) {
  return (
    <html className={globalStyles}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>portfolio-fresh</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
