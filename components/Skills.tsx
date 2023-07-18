import IconBrandTypescript from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-typescript.tsx";
import IconBrandDocker from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-docker.tsx";
import IconBrandPython from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-python.tsx";
import IconBrandNextjs from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-nextjs.tsx";
import IconBrandTailwind from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-tailwind.tsx";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-deno.tsx";
export const Skills = () => {
  return (
    <>
      <h3
        id="skills"
        className="text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-center"
      >
        Skills Currently Learning
      </h3>
      <div className="flex justify-around ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-rust"
          width={48}
          height={48}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10.139 3.463c.473 -1.95 3.249 -1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714 -1.045 3.678 .918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95 .473 1.95 3.249 0 3.722a1.916 1.916 0 0 0 -1.185 2.859c1.045 1.714 -.918 3.678 -2.633 2.633a1.916 1.916 0 0 0 -2.858 1.184c-.473 1.95 -3.249 1.95 -3.722 0a1.916 1.916 0 0 0 -2.859 -1.185c-1.714 1.045 -3.678 -.918 -2.633 -2.633a1.916 1.916 0 0 0 -1.184 -2.858c-1.95 -.473 -1.95 -3.249 0 -3.722a1.916 1.916 0 0 0 1.185 -2.859c-1.045 -1.714 .918 -3.678 2.633 -2.633a1.914 1.914 0 0 0 2.858 -1.184z">
          </path>
          <path d="M8 12h6a2 2 0 1 0 0 -4h-6v8v-4z"></path>
          <path d="M19 16h-2a2 2 0 0 1 -2 -2a2 2 0 0 0 -2 -2h-1"></path>
          <path d="M9 8h-4"></path>
          <path d="M5 16h4"></path>
        </svg>
        <IconBrandTypescript class="w-12 h-12" />
        <IconBrandPython class="w-12 h-12" />
        <IconBrandTailwind class="w-12 h-12" />
        <IconBrandNextjs class="w-12 h-12" />
        <IconBrandDeno class="w-12 h-12" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-aws"
          width={48}
          height={48}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94">
          </path>
          <path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1">
          </path>
          <path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5"></path>
          <path d="M3 9h3"></path>
          <path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6"></path>
          <path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75">
          </path>
        </svg>
        <IconBrandDocker className="w-12 h-12" />
      </div>
    </>
  );
};

export default Skills;
