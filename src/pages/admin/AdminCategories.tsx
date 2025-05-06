
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Folder, Plus, Trash2 } from "lucide-react";

const AdminCategories = () => {
  // Mock categories based on the categoryId from articles
  const categories = [
    { id: "tech", name: "Tecnología", description: "Artículos sobre tecnología y sistemas", count: 1 },
    { id: "dev", name: "Desarrollo", description: "Artículos sobre desarrollo de software", count: 1 },
    { id: "ai", name: "Inteligencia Artificial", description: "Artículos sobre IA y algoritmos", count: 1 },
    { id: "design", name: "Diseño UX", description: "Artículos sobre experiencia de usuario", count: 1 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-heading font-bold mb-2">Categorías</h1>
          <p className="text-muted-foreground">
            Gestiona las categorías de los artículos
          </p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Nueva Categoría
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <Card key={category.id} className="overflow-hidden">
            <div className="bg-primary/5 p-4 flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Folder className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-medium text-lg">{category.name}</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
              <p className="text-xs mb-4">
                <span className="font-medium">{category.count}</span> {category.count === 1 ? "artículo" : "artículos"}
              </p>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Edit className="h-3 w-3" />
                  Editar
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-destructive">
                  <Trash2 className="h-3 w-3" />
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
