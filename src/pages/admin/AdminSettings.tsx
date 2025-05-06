
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VortexLogo } from "@/components/VortexLogo";

const AdminSettings = () => {
  return (
    <div>
      <h1 className="text-3xl font-heading font-bold mb-2">Configuración</h1>
      <p className="text-muted-foreground mb-6">
        Gestiona la configuración del Archivo Vortex
      </p>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Apariencia</TabsTrigger>
          <TabsTrigger value="advanced">Avanzado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información del Sitio</CardTitle>
              <CardDescription>
                Configura la información básica de tu sitio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="site-name">Nombre del sitio</Label>
                <Input 
                  id="site-name" 
                  defaultValue="Archivo de Conocimiento Vortex" 
                  placeholder="Nombre de tu sitio"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="site-description">Descripción</Label>
                <Input 
                  id="site-description" 
                  defaultValue="Explora el universo del conocimiento a través de nuestra colección de artículos especializados" 
                  placeholder="Descripción del sitio"
                />
              </div>
              
              <div className="flex justify-end">
                <Button>Guardar cambios</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personalización</CardTitle>
              <CardDescription>
                Personaliza la apariencia de tu sitio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Logo</Label>
                <div className="flex items-center gap-4">
                  <VortexLogo size="lg" />
                  <Button variant="outline">Cambiar logo</Button>
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label>Colores</Label>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary"></div>
                  <div className="w-8 h-8 rounded-full bg-accent"></div>
                  <Button variant="outline" size="sm">Personalizar</Button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Guardar cambios</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuración Avanzada</CardTitle>
              <CardDescription>
                Opciones avanzadas para administradores.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="api-key">Clave API</Label>
                <Input 
                  id="api-key" 
                  defaultValue="vx-api-12345-67890-abcde" 
                  readOnly
                />
                <p className="text-xs text-muted-foreground">
                  Esta clave es necesaria para acceder a la API del Archivo Vortex.
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button variant="outline">Regenerar clave API</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
