import { Link } from "react-router";
import { Book, Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { produtos } from "../data/produtos";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const recentPosts = blogPosts.slice(0, 3);
  const featuredProducts = produtos.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6 text-slate-800">
                Fortaleça Sua Jornada Espiritual
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Descubra devocionais diários que inspiram e transformam, além
                de ferramentas práticas para organizar sua vida cristã.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
                >
                  <Book className="size-5" />
                  Ler Devocionais
                </Link>
                <Link
                  to="/produtos"
                  className="inline-flex items-center gap-2 bg-white text-amber-700 border-2 border-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  <ShoppingBag className="size-5" />
                  Ver Produtos
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534297169727-a78dc2d3dea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBkZXZvdGlvbmFsJTIwYmlibGUlMjByZWFkaW5nfGVufDF8fHx8MTc3MTA0OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bíblia e devocional"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-16 bg-amber-100 text-amber-700 rounded-full mb-4">
                <Book className="size-8" />
              </div>
              <h3 className="text-xl mb-2 text-slate-800">
                Devocionais Diários
              </h3>
              <p className="text-slate-600">
                Mensagens inspiradoras baseadas na Palavra de Deus para cada
                dia
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-16 bg-amber-100 text-amber-700 rounded-full mb-4">
                <Heart className="size-8" />
              </div>
              <h3 className="text-xl mb-2 text-slate-800">Crescimento Espiritual</h3>
              <p className="text-slate-600">
                Ferramentas práticas para fortalecer sua caminhada com Cristo
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-16 bg-amber-100 text-amber-700 rounded-full mb-4">
                <ShoppingBag className="size-8" />
              </div>
              <h3 className="text-xl mb-2 text-slate-800">Planners Cristãos</h3>
              <p className="text-slate-600">
                Organize sua vida de oração, gratidão e estudos bíblicos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-slate-800">Devocionais Recentes</h2>
            <Link
              to="/blog"
              className="text-amber-700 hover:text-amber-800 inline-flex items-center gap-2"
            >
              Ver todos
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-amber-700 mb-2">{post.verse}</p>
                  <h3 className="text-xl mb-2 text-slate-800">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-slate-800">Nossos Planners</h2>
            <Link
              to="/produtos"
              className="text-amber-700 hover:text-amber-800 inline-flex items-center gap-2"
            >
              Ver todos
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200"
              >
                <ImageWithFallback
                  src={produto.imageUrl}
                  alt={produto.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-slate-800">
                    {produto.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {produto.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-amber-700">
                      R$ {produto.price.toFixed(2)}
                    </span>
                    <button className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-700 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Comece Sua Jornada Hoje
          </h2>
          <p className="text-lg mb-8 text-amber-50">
            Junte-se a milhares de cristãos que estão fortalecendo sua fé
            diariamente com nossos devocionais e ferramentas práticas.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors"
          >
            Começar Agora
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
