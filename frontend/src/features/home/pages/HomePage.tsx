import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BotMessageSquareIcon } from "lucide-react";

export default function HomePage() {
  return (
    <section className="h-dvh overflow-hidden bg-[#050505] text-white">
      <div className="relative isolate h-full">
        <div className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(circle_at_50%_12%,color-mix(in_oklch,var(--primary)_34%,transparent)_0%,transparent_38%),linear-gradient(180deg,color-mix(in_oklch,var(--primary)_12%,black)_0%,rgba(5,5,5,0.35)_45%,#050505_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[74vh] overflow-hidden">
          <div className="absolute left-[-12%] top-[8%] h-208 w-208 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_65%_50%,color-mix(in_oklch,var(--primary)_62%,white)_0%,color-mix(in_oklch,var(--primary)_40%,black)_28%,rgba(0,0,0,0)_66%)] blur-3xl" />
          <div className="absolute right-[-12%] top-[8%] h-208 w-208 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_50%,color-mix(in_oklch,var(--primary)_62%,white)_0%,color-mix(in_oklch,var(--primary)_36%,black)_28%,rgba(0,0,0,0)_66%)] blur-3xl" />
          {/* <div className="absolute left-[-8%] top-[30%] h-72 w-3xl -translate-x-1/4 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,color-mix(in_oklch,var(--primary)_88%,black)_44%,rgba(0,0,0,0)_100%)] opacity-55 blur-2xl [clip-path:polygon(0%_50%,14%_34%,42%_26%,78%_42%,100%_58%,78%_74%,42%_88%,14%_80%)]" /> */}
          {/* <div className="absolute right-[-8%] top-[30%] h-72 w-3xl translate-x-1/4 bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,color-mix(in_oklch,var(--primary)_88%,black)_44%,rgba(0,0,0,0)_100%)] opacity-55 blur-2xl [clip-path:polygon(0%_58%,22%_42%,58%_26%,86%_34%,100%_50%,86%_66%,58%_74%,22%_58%)]" /> */}
          {/* <div className="absolute left-1/2 top-[14%] h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_18%,rgba(0,0,0,0)_62%)] blur-3xl" /> */}
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-10 pt-5 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center pt-10 sm:pt-14 lg:pt-16">
            <div className="relative flex w-full max-w-5xl flex-col items-center text-center">
              <div className="pointer-events-none absolute left-1/2 top-[34%] -z-10 -translate-x-1/2 -translate-y-1/2 opacity-70">
                <div className="loader loader--hero" aria-hidden="true">
                  <div className="loader-box" />
                  <div className="loader-box" />
                  <div className="loader-box" />
                  <div className="loader-box" />
                  <div className="loader-box" />
                  <div className="loader-core" />
                </div>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
                <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
                NEW
                <span className="text-white/45">
                  Try 30 days free trial option
                </span>
              </div>

              <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1.2] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.4rem]">
                Turn thoughts into{" "}
                <span className="bg-linear-to-r from-primary to-white bg-clip-text text-transparent">
                  websites
                </span>
                <span className="block">with powerful AI.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/65 sm:text-lg">
                Create, customize and publish website faster than ever with our
                AI Site Builder.
              </p>

              <div className="mt-10 w-full max-w-4xl rounded-[1.75rem] border border-[#6f4dff]/80 bg-[#171717] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-5">
                <label className="sr-only" htmlFor="prompt">
                  Describe your website
                </label>
                <Textarea
                  id="prompt"
                  rows={4}
                  placeholder="Describe your presentation in details"
                  className="h-52 w-full resize-none overflow-y-hidden border-none bg-transparent text-sm text-white/85 outline-none placeholder:text-white/35 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-base"
                />

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                      Landing page
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                      Portfolio
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                      SaaS
                    </span>
                  </div>

                  <div className="flex justify-center sm:justify-end">
                    <Button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90">
                      <BotMessageSquareIcon />
                      Create with AI
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
