
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { VortexLogo } from "@/components/VortexLogo";
import { VortexAnimation } from "@/components/VortexAnimation";

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 relative overflow-hidden">
      <VortexAnimation />
      <VortexLogo size="lg" className="mb-6" />
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-heading font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Lo sentimos, esta página no existe o ha sido movida
        </p>
        <Button asChild>
          <Link to="/">
            Volver al Inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
