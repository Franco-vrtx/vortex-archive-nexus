
import { VortexLogo } from "./VortexLogo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <VortexLogo size="sm" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Archivo de Conocimiento Vortex
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Hecho con 💙 para los amantes del conocimiento</p>
        </div>
      </div>
    </footer>
  );
}
