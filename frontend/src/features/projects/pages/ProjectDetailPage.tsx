import { useMemo, useState, type FormEventHandler } from "react";
import {
  DownloadIcon,
  EyeIcon,
  SaveIcon,
  SparklesIcon,
  UploadIcon,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [prompt, setPrompt] = useState("");
  const [activityLabel, setActivityLabel] = useState(
    "now generating your website...",
  );
  const [messages, setMessages] = useState<string[]>([
    'I have enhanced your prompt to: "Create a modern, responsive navbar with a clean, minimalist design featuring a fixed position at the top of the page. Use a light background (#ffffff) with subtle shadow for depth, and dark gray text (#333333) that transitions to a deeper gray (#000000) on hover."',
  ]);

  const promptTemplates = [
    "create a simple navbar",
    "add testimonial section",
    "make the hero more bold",
  ];
  const primaryPrompt = promptTemplates[0] ?? "create a simple navbar";
  const secondaryPrompts = promptTemplates.slice(1);

  const pageTitle = useMemo(
    () => `Project (${projectId ?? "Builder"})`,
    [projectId],
  );

  const submitPrompt = (rawPrompt: string) => {
    const nextPrompt = rawPrompt.trim();
    if (!nextPrompt) return;

    setMessages((prev) => [
      `I have enhanced your prompt to: \"${nextPrompt}\"`,
      ...prev,
    ]);
    setActivityLabel("prompt applied to preview");
    setPrompt("");
  };

  const handlePromptSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitPrompt(prompt);
  };

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

        <div className="relative mx-auto flex h-full w-full max-w-384 flex-col px-3 pb-3 pt-16 sm:px-4 lg:px-6">
          <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-[#0f1726]/85 px-3 py-2 backdrop-blur-md">
            <div>
              <p className="text-xs text-white/50">{pageTitle}</p>
              <h1 className="text-sm font-semibold text-white">
                {messages[0]
                  ?.replace('I have enhanced your prompt to: "', "")
                  .replace('"', "")
                  .slice(0, 64) || "Create a modern website"}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                className="h-8 border border-white/15 bg-[#0d1a2f] px-3 text-xs text-white hover:bg-[#14233d]"
              >
                <SaveIcon className="size-3.5" />
                Save
              </Button>
              <Button
                type="button"
                className="h-8 border border-white/15 bg-[#0d1a2f] px-3 text-xs text-white hover:bg-[#14233d]"
              >
                <EyeIcon className="size-3.5" />
                Preview
              </Button>
              <Button
                type="button"
                className="h-8 border border-[color-mix(in_oklch,var(--primary)_35%,white)] bg-[linear-gradient(90deg,color-mix(in_oklch,var(--primary)_70%,black)_0%,color-mix(in_oklch,var(--primary)_58%,black)_100%)] px-3 text-xs text-white"
              >
                <DownloadIcon className="size-3.5" />
                Download
              </Button>
              <Button
                type="button"
                className="h-8 border border-white/15 bg-[linear-gradient(90deg,#31154d_0%,#501c7a_100%)] px-3 text-xs text-white hover:brightness-110"
              >
                <UploadIcon className="size-3.5" />
                Unpublish
              </Button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#081122]/70 backdrop-blur-sm">
            <div className="grid h-full grid-cols-1 md:grid-cols-[18.5rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)]">
              <aside className="flex min-h-0 flex-col border-r border-white/10 bg-[#0b1730]/90 p-3">
                <button
                  type="button"
                  onClick={() => submitPrompt(primaryPrompt)}
                  className="mb-3 inline-flex w-fit items-center rounded-full border border-[color-mix(in_oklch,var(--primary)_34%,white)] bg-[color-mix(in_oklch,var(--primary)_26%,black)] px-3 py-1 text-[11px] font-medium text-white hover:brightness-110"
                >
                  {primaryPrompt}
                </button>

                <div className="min-h-0 flex-1 overflow-auto rounded-2xl border border-white/10 bg-white/5 p-3 text-[12px] leading-6 text-white/75 [scrollbar-width:thin]">
                  {messages[0]}
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex gap-2">
                    {secondaryPrompts.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => submitPrompt(item)}
                        className="rounded-full border border-white/15 bg-[#0f1d39] px-2.5 py-1 text-[10px] text-white/80 hover:bg-[#13284d]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handlePromptSubmit}>
                    <Input
                      aria-label="Prompt input"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Type prompt"
                      className="sr-only"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-full border border-white/12 bg-[#12203c] px-3 py-2 text-left text-[11px] text-white/65"
                    >
                      {activityLabel}
                    </button>
                  </form>
                </div>
              </aside>

              <main className="min-h-0 overflow-auto bg-[#f4f5f7] p-3 text-[#121212] [scrollbar-width:thin]">
                <div className="overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
                  <header className="flex h-11 items-center justify-between border-b border-black/8 px-6">
                    <p className="text-3xl font-semibold tracking-tight">
                      LOGO
                    </p>
                    <nav className="flex items-center gap-6 text-sm text-black/75">
                      <span>Features</span>
                      <span>Testimonials</span>
                      <span>Contact</span>
                    </nav>
                  </header>

                  <section className="grid min-h-80 place-items-center px-6 py-14 text-center">
                    <div className="max-w-xl">
                      <h2 className="text-6xl font-semibold tracking-tight text-[#0f1115] max-sm:text-4xl">
                        Excellence in Minimalism
                      </h2>
                      <p className="mt-4 text-2xl text-black/55 max-sm:text-base">
                        Discover the power of clean design and high contrast
                        aesthetics
                      </p>
                      <button
                        type="button"
                        className="mt-7 rounded-md bg-black px-6 py-2.5 text-base font-medium text-white shadow-lg"
                      >
                        Get Started Today
                      </button>
                    </div>
                  </section>

                  <section className="bg-[#f0f1f3] px-6 py-14 text-center">
                    <h3 className="text-5xl font-semibold tracking-tight text-[#0f1115] max-sm:text-3xl">
                      Simplicity That Speaks Volumes
                    </h3>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-black/55 max-sm:text-base">
                      Our design philosophy focuses on what matters most. By
                      eliminating clutter, your message gets clearer and your
                      users get a better experience.
                    </p>
                    <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/65">
                      <SparklesIcon className="size-4" />
                      Live website preview powered by your prompt
                    </div>
                  </section>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
