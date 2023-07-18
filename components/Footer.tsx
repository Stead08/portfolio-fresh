import { ComponentChildren } from "preact";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer() {
  return (
    <div className="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
      <div className="flex-1 p-2">
        <div className="flex items-center gap-1">
          <div className="font-bold text-2xl">
            Stead08 Portfolio
          </div>
        </div>
        <div className="text-gray-500">
          feel free to contact via a form bottom of the page.
        </div>
      </div>

      <div className="text-gray-500 space-y-2">
        <div className="text-xs">
          Copyright © 2023 Stead08<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/Stead08/portfolio-fresh"
          className="inline-block hover:text-black"
        >
          <BrandGithub />
        </a>
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
    </div>
  );
}
