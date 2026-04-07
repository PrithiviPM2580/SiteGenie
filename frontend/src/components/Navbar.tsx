import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { NAVBAR } from "@/constants";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full mx-4 max-w-7xl fixed top-6 left-1/2 -translate-x-1/2 z-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-sm overflow-hidden">
          <Link to="/">
            <img
              src={logo}
              alt="Logo Image"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div>
          <p className="text-md font-semibold tracking-wide text-white">
            Site Genie
          </p>
        </div>
      </div>

      <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
        {NAVBAR.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="transition-colors hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Button className="rounded-full bg-[color-mix(in_oklch,var(--primary)_90%,black)] px-5 text-sm font-semibold text-white shadow-[0_16px_50px_color-mix(in_oklch,var(--primary)_30%,transparent)] hover:bg-[color-mix(in_oklch,var(--primary)_100%,black)]">
        Start Building
      </Button>
    </header>
  );
}
