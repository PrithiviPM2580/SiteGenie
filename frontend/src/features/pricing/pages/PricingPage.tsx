import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { PRICING_PLANS } from "@/constants";
import type { Plan } from "@/types";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const [plans] = useState<Plan[]>(PRICING_PLANS);

  const handlePurchase = (planId: string) => {};

  return (
    <section className="h-svh overflow-hidden bg-[#050505] text-white">
      <div className="relative isolate h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,color-mix(in_oklch,var(--primary)_34%,transparent)_0%,transparent_38%),linear-gradient(180deg,color-mix(in_oklch,var(--primary)_12%,black)_0%,rgba(5,5,5,0.35)_45%,#050505_100%)]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-12%] top-[8%] h-208 w-208 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_65%_50%,color-mix(in_oklch,var(--primary)_62%,white)_0%,color-mix(in_oklch,var(--primary)_40%,black)_28%,rgba(0,0,0,0)_66%)] blur-3xl" />
          <div className="absolute right-[-12%] top-[8%] h-208 w-208 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_50%,color-mix(in_oklch,var(--primary)_62%,white)_0%,color-mix(in_oklch,var(--primary)_36%,black)_28%,rgba(0,0,0,0)_66%)] blur-3xl" />
          {/* <div className="absolute left-[-8%] top-[30%] h-72 w-3xl -translate-x-1/4 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,color-mix(in_oklch,var(--primary)_88%,black)_44%,rgba(0,0,0,0)_100%)] opacity-55 blur-2xl [clip-path:polygon(0%_50%,14%_34%,42%_26%,78%_42%,100%_58%,78%_74%,42%_88%,14%_80%)]" /> */}
          {/* <div className="absolute right-[-8%] top-[30%] h-72 w-3xl translate-x-1/4 bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,color-mix(in_oklch,var(--primary)_88%,black)_44%,rgba(0,0,0,0)_100%)] opacity-55 blur-2xl [clip-path:polygon(0%_58%,22%_42%,58%_26%,86%_34%,100%_50%,86%_66%,58%_74%,22%_58%)]" /> */}
          {/* <div className="absolute left-1/2 top-[14%] h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_18%,rgba(0,0,0,0)_62%)] blur-3xl" /> */}
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-5 pb-6 pt-24 sm:px-6 sm:pt-28 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8 text-center sm:mb-10">
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Choose Your Plan
              </h1>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-white/60">
                Start for free and scale up as you grow. Find the perfect plan
                for your content creation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className="group w-full max-w-sm rounded-2xl bg-[linear-gradient(145deg,color-mix(in_oklch,var(--primary)_48%,transparent)_0%,rgba(255,255,255,0.06)_36%,rgba(255,255,255,0.02)_65%,rgba(0,0,0,0.45)_100%)] p-px shadow-[0_14px_36px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex h-full min-h-116 flex-col rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#0f1320_0%,#0a0d16_100%)] p-6">
                    <p className="text-base font-semibold text-white">
                      {plan.name}
                    </p>

                    <div className="mt-2 flex items-end gap-1.5">
                      <p className="text-4xl font-semibold leading-none text-white">
                        {plan.price}
                      </p>
                      <p className="pb-1 text-xs text-white/55">
                        /{plan.credits}
                      </p>
                    </div>

                    <p className="mt-3 text-sm text-white/65">
                      {plan.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/75"
                        >
                          <span className="inline-flex size-4 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--primary)_28%,black)] text-[color-mix(in_oklch,var(--primary)_90%,white)]">
                            <CheckIcon className="size-3" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      type="button"
                      className="mt-auto w-full rounded-md border border-[color-mix(in_oklch,var(--primary)_25%,white)] bg-[linear-gradient(90deg,color-mix(in_oklch,var(--primary)_78%,black)_0%,color-mix(in_oklch,var(--primary)_62%,black)_100%)] px-3 py-2 text-sm font-medium text-white transition hover:brightness-110"
                      onClick={() => handlePurchase(plan.id)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 text-center text-[11px] text-white/45">
              Project creation / revisions consume 5 credits. You can purchase
              more anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
