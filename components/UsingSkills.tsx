import IconBrandTypescript from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-typescript.tsx";
import IconBrandReact from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-react.tsx";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-deno.tsx";
import IconBrandVue from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-vue.tsx";

interface Skill {
  category: string;
  name: string;
}

const skills = [
  {
    category: "Programming Language",
    name: "TypeScript, Rust, Python",
  },
  {
    category: "Frontend UI Library",
    name: "React, Preact, Vue, Svelte, Qwik",
  },
  {
    category: "Frontend CSS Framework",
    name: "SCSS, Panda CSS, Emotion, Tailwind CSS, Twind, Stylus",
  },
  {
    category: "Frontend Framework",
    name: "Remix, Nuxt.js, Astro, Next.js, Qwik City",
  },
  {
    category: "Frontend State Management",
    name: "Zustand",
  },
  {
    category: "Frontend Dev Toolchain ",
    name: "Biome, eslint, prettier, lefthook",
  },
  {
    category: "JavaScript Runtime",
    name: "Node.js, Deno, Bun, Workerd",
  },
  {
    category: "Backend Framework",
    name: "Deno, Hono",
  },
  {
    category: "Mono-repo",
    name: "Turbo",
  },
  {
    category: "Serverless Edge Computing",
    name: "Cloudflare Workers",
  },
  {
    category: "Node.js Package Manager",
    name: "pnpm, npm",
  },
  {
    category: "CI/CD",
    name: "GitHub Actions",
  },
  {
    category: "VCS",
    name: "Git",
  },
  {
    category: "Git Hosting",
    name: "GitHub, GitLab",
  },
  {
    category: "Unit Testing",
    name: "Vitest",
  },
  {
    category: "e2e Testing",
    name: "Playwright",
  },
] as const satisfies Skill[];

export const UsingSkills = () => {
  return (
    <>
      <h3
        id="using-skills"
        className="text-3xl font-bold uppercase text-gray-600 lg:text-center"
      >
        Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="bg-gray-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              {skill.category}
            </h4>
            <p className="text-gray-600">{skill.name}</p>
          </div>
        ))}
      </div>
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
        <IconBrandReact class="w-12 h-12" />
        <IconBrandVue class="w-12 h-12" />
        <div class="w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs w-full h-full"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
            <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
          </svg>
        </div>
        <IconBrandDeno class="w-12 h-12" />
        <div class="w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-cloudflare w-full h-full"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13.031 7.007c2.469 -.007 3.295 1.293 3.969 2.993c4 0 4.994 3.825 5 6h-20c-.001 -1.64 1.36 -2.954 3 -3c0 -1.5 1 -3 3 -3c.66 -1.942 2.562 -2.986 5.031 -2.993z" />
            <path d="M12 13h6" />
            <path d="M17 10l-2.5 6" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default UsingSkills;
