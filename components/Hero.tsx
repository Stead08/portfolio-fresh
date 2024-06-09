import { asset } from "$fresh/runtime.ts";
import Balancer from "react-wrap-balancer";
import ArrowDown from "@tabler/icons/arrow-down.tsx";
import IconBrandGithub from "@tabler/icons/brand-github.tsx";

const Hero = () => {
  return (
    <div className="min-w-screen flex flex-col items-center justify-between bg-gray-100 sm:min-h-screen">
      <div className=""></div>
      <div className="sm:(mt-14 mb-14) mt-12 mb-4 flex flex-col items-center gap-y-5 gap-x-10 md:flex-row">
        <img
          className="sm:(w-52 h-52)  h-24 w-24 rounded-full"
          src={asset("selfie.jpg")}
          alt="avatar"
        />
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-2xl font-bold sm:text-4xl">
            <Balancer>
              <span className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text">
                Stead08
              </span>
            </Balancer>
          </h1>
          <h2 className="text-md  font-medium text-cyan-700  sm:text-xl">
            Web Developer in Japan
          </h2>

          <button
              type="button"
            className="px-3 py-2 mt-3 ml-auto mr-auto md:ml-0 bg-white rounded border(gray-400 1) hover:bg-gray-200 flex gap-2 items-center "
            onclick="location.href=`https://github.com/Stead08`"
          >
            <IconBrandGithub class="w-6 h-6" />Github
          </button>
        </div>
      </div>
      <div className="animate__animated animate__fadeIn animate__delay-5s hidden pb-2 sm:block">
        <div className="motion-safe:animate-bounce">
          <ArrowDown size={16} />
        </div>
      </div>
      <div className="block sm:hidden" />
    </div>
  );
};

export default Hero;
