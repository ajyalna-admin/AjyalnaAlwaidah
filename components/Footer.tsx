import Image from "next/image";
import { brand } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-content px-6 sm:px-10 lg:px-16 py-14">
        <div className="flex items-center gap-2.5 mb-4">
          <Image src="/logo.png" alt={brand.name} width={28} height={22} className="h-6 w-auto opacity-80" />
          <span className="font-display font-bold">{brand.name}</span>
        </div>
        <p className="text-sm text-muted leading-relaxed max-w-2xl mb-8">{brand.footerDescription}</p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
