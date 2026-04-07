import React from "react";
import { SpinnerCustom } from "@/components/ui/spinner";
import { DUMMY_PROJECT_CARDS } from "@/constants";
import { Button } from "@/components/ui/button";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function CommunityPage() {
  const loading = false;
  const navigate = useNavigate();

  const getPreviewDoc = (doc: string) =>
    doc.includes("</head>")
      ? doc.replace(
          "</head>",
          "<style>html,body{height:100%;overflow:hidden !important;scrollbar-width:none;}body::-webkit-scrollbar{display:none;}</style></head>",
        )
      : doc;

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

        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col px-5 pb-6 pt-32 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Published Projects
              </h1>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-auto pr-1 [scrollbar-width:thin] [scrollbar-color:color-mix(in_oklch,var(--primary)_45%,black)_transparent]">
            <div className="grid grid-cols-1 gap-4 pb-2 sm:grid-cols-2 lg:grid-cols-4">
              {DUMMY_PROJECT_CARDS.map((project) => (
                <Link
                  to={`/view/${project.id}`}
                  target="_blank"
                  key={project.id}
                  className="group rounded-[1.4rem] cursor-pointer bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary)_36%,transparent)_0%,rgba(255,255,255,0.04)_24%,rgba(255,255,255,0.02)_52%,rgba(0,0,0,0.35)_100%)] p-px shadow-[0_14px_34px_rgba(0,0,0,0.46)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="overflow-hidden rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,#151c2d_0%,#0e1424_52%,#090c16_100%)]">
                    <div className="relative aspect-video overflow-hidden bg-[#0a0e16]">
                      <iframe
                        title={`${project.name} preview`}
                        srcDoc={getPreviewDoc(project.previewDoc)}
                        className="pointer-events-none h-[400%] w-[400%] origin-top-left scale-25 border-0"
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                      />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#090c16] via-[#090c16]/85 to-transparent" />

                      <button
                        type="button"
                        className="absolute right-2 top-2 rounded-md border border-[color-mix(in_oklch,var(--primary)_18%,white)] bg-black/55 p-1.5 text-white/75 transition hover:border-[color-mix(in_oklch,var(--primary)_42%,white)] hover:text-[color-mix(in_oklch,var(--primary)_70%,white)]"
                        aria-label="Delete project"
                      >
                        <Trash2Icon className="size-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 p-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="line-clamp-2 text-base font-semibold leading-5 text-white">
                        {project.name}
                      </h2>

                      <span className="shrink-0 rounded-full border border-[color-mix(in_oklch,var(--primary)_35%,transparent)] bg-[color-mix(in_oklch,var(--primary)_16%,black)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[color-mix(in_oklch,var(--primary)_82%,white)]">
                        {project.badge}
                      </span>
                    </div>

                    <p className="line-clamp-2 text-sm leading-5 text-white/55">
                      {project.prompt}
                    </p>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-white/40">
                      <span>{project.createdAt}</span>

                      <div className="flex gap-1.5">
                        <Button
                          type="button"
                          className="rounded-md flex items-center justify-center border border-[color-mix(in_oklch,var(--primary)_26%,transparent)] bg-[color-mix(in_oklch,var(--primary)_20%,black)] px-2.5 py-1 text-[11px] font-medium text-white/90 transition hover:bg-[color-mix(in_oklch,var(--primary)_32%,black)]"
                        >
                          <span className="bg-gray-200 size-3.5 rounded-full text-black font-semibold flex items-center justify-center">
                            {project.user?.name?.slice(0, 1) || "Anonymous"}
                          </span>
                          {project.user?.name}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="absolute inset-0 z-20 bg-black/30 backdrop-blur-[1px]">
          <SpinnerCustom />
        </div>
      ) : null}
    </section>
  );
}
