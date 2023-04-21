import IconBrandTypescript from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-typescript.tsx"
import IconBrandDocker from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-docker.tsx"
import IconBrandPython from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-python.tsx"
import IconBrandNextjs from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-nextjs.tsx"
import IconBrandTailwind from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-tailwind.tsx"
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-deno.tsx"
import { IconBrandRust, IconBrandJavascript, IconBrandAws, IconBrandReact, IconSql } from '@tabler/icons-preact';
export const Skills = () => {
    return (
        <>
            <h3 id="skills" className="text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-center">Skills Currently Learning</h3>
            <div class="flex justify-around ">
                <IconBrandRust class="w-12 h-12"/>
                <IconBrandTypescript class="w-12 h-12"/>
                <IconBrandJavascript class="w-12 h-12"/>
                <IconBrandPython class="w-12 h-12"/>
                <IconBrandTailwind class="w-12 h-12"/>
                <IconBrandReact class="w-12 h-12"/>
                <IconBrandNextjs class="w-12 h-12"/>
                <IconBrandDeno class="w-12 h-12"/>
                <IconBrandAws class="w-12 h-12"/>
                <IconBrandDocker class="w-12 h-12"/>
                <IconSql class="w-12 h-12"/>

            </div>
        </>
    )
}

export default Skills;