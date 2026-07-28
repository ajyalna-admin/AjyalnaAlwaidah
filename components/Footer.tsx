import Image from "next/image";
import { brand } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-content px-6 sm:px-10 lg:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt={brand.name} width={28} height={22} className="h-6 w-auto opacity-80" />
          <span className="text-sm text-muted">{brand.parentEntity}</span>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
