import RevealAnimation from "@/motion/RevealAnimation";
import { ArrowRight, SunIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main
        className="md:max-w-6xl px-5 md:px-0 mx-auto flex flex-col justify-center space-y-3
       md:space-y-5 md:h-[70vh]"
      >
        <h1 className="font-bold text-3xl text-center mt-6 md:mt-0">MernGPT</h1>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 py-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <SunIcon className="w-6 h-6" />
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <SunIcon className="w-6 h-6" />
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <SunIcon className="w-6 h-6" />
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
            <span className="p-4 rounded-md bg-slate-400/40 hover:opacity-80 w-full">
              <RevealAnimation>
                &quot;Explain Something to me&quot;
              </RevealAnimation>
            </span>
          </div>
        </section>
      </main>

      <footer className="mt-auto w-full max-w-6xl md:mx-auto px-4 md:px-0 mb-6 pb-4 md:pb-0">
        <RevealAnimation>
          <Link to="/chat">
            <span
              className="bg-slate-400/40 rounded-lg hover:opacity-80 p-4 flex items-center 
            justify-between w-full"
            >
              Get started with GPT
              <ArrowRight className="w-6 h-6" />
            </span>
          </Link>
        </RevealAnimation>
      </footer>
    </>
  );
}
