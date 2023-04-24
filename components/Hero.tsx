import { asset } from "$fresh/runtime.ts";
import Balancer from "react-wrap-balancer";
import ArrowDown from "@tabler/icons/arrow-down.tsx";

const Hero = () => {
    return (
        <div
            className="min-w-screen flex flex-col items-center justify-between bg-gray-100 sm:min-h-screen">
            <div className=""></div>
            <div className="sm:(mt-14 mb-14) mt-12 mb-4 flex flex-col items-center gap-y-5 gap-x-10 md:flex-row">
                <img
                    className="sm:(w-52 h-52) animate__animated animate__fadeIn h-24 w-24 rounded-full"
                    src={asset("selfie.jpg")}
                    alt="avatar"
                />
                <div className="space-y-2 text-center md:text-left">
                    <h1 className="animate__animated animate__fadeInUp animate__delay-1s text-2xl font-bold sm:text-4xl">
                        <Balancer>
              <span
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text">
                Stead08
              </span>{" "}

                        </Balancer>
                    </h1>
                    <h2 className="text-md animate__animated animate__fadeInUp animate__delay-2s font-medium text-cyan-700 dark:text-cyan-200 sm:text-xl">
                        University Student in Japan
                    </h2>
                </div>
            </div>
            <div className="animate__animated animate__fadeIn animate__delay-5s hidden pb-2 sm:block">
                <div className="motion-safe:animate-bounce">
                    <ArrowDown size={16}/>
                </div>
            </div>
            <div className="block sm:hidden"/>
        </div>
    )
}

export default Hero;