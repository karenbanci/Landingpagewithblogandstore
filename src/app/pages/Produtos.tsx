import { useState, useEffect } from "react";
import { supabase, type Produto } from "../lib/supabase";
import { produtos } from "../data/produtos";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Check, ShoppingCart } from "lucide-react";

export function Produtos() {
  const [produtosDb, setProdutosDb] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [useDatabase, setUseDatabase] = useState(false);

  useEffect(() => {
    loadProdutos();
  }, []);

  async function loadProdutos() {
    try {
      const { data, error } = await supabase
        .from("produtos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log("Usando dados estáticos (Supabase não configurado)");
        setUseDatabase(false);
      } else if (data && data.length > 0) {
        setProdutosDb(data);
        setUseDatabase(true);
      } else {
        setUseDatabase(false);
      }
    } catch (err) {
      console.log("Usando dados estáticos");
      setUseDatabase(false);
    } finally {
      setLoading(false);
    }
  }

  const produtosList = useDatabase ? produtosDb : produtos;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-800">
            Planners Cristãos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Ferramentas práticas e inspiradoras para organizar sua vida
            espiritual. Cada planner foi cuidadosamente desenvolvido para
            fortalecer sua caminhada com Cristo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-slate-600">Carregando produtos...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {produtosList.map((produto) => {
              // Adaptar estrutura do banco de dados para o componente
              const displayProduct = useDatabase ? {
                id: produto.id,
                name: (produto as Produto).name,
                description: (produto as Produto).description,
                imageUrl: (produto as Produto).image_url || "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
                price: (produto as Produto).price,
                features: (produto as Produto).features,
              } : produto;

              return (
                <div
                  key={displayProduct.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <ImageWithFallback
                    src={displayProduct.imageUrl}
                    alt={displayProduct.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-8">
                    <h2 className="text-2xl mb-3 text-slate-800">{displayProduct.name}</h2>
                    <p className="text-slate-600 mb-6">{displayProduct.description}</p>

                    <div className="mb-6">
                      <h3 className="font-medium text-slate-800 mb-3">
                        Características:
                      </h3>
                      <ul className="space-y-2">
                        {displayProduct.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-slate-600"
                          >
                            <Check className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Preço</p>
                        <p className="text-3xl text-amber-700">
                          R$ {displayProduct.price.toFixed(2)}
                        </p>
                      </div>
                      <button className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors">
                        <ShoppingCart className="size-5" />
                        Comprar Agora
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-8">
          <h2 className="text-2xl mb-4 text-slate-800">
            Por que escolher nossos planners?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-slate-800 mb-2">
                Conteúdo Bíblico
              </h3>
              <p className="text-slate-600 text-sm">
                Cada página é enriquecida com versículos e reflexões baseadas
                na Palavra de Deus.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-2">
                Alta Qualidade
              </h3>
              <p className="text-slate-600 text-sm">
                Papel premium, encadernação durável e design inspirador para
                acompanhar você o ano todo.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-2">
                Fácil de Usar
              </h3>
              <p className="text-slate-600 text-sm">
                Layout intuitivo e organizado para facilitar seu tempo diário
                com Deus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}