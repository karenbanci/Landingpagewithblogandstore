import { Link } from "react-router";
import { useState, useEffect } from "react";
import { supabase, type Devocional } from "../lib/supabase";
import { blogPosts } from "../data/blogPosts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, BookOpen } from "lucide-react";

export function Blog() {
  const [devocionais, setDevocionais] = useState<Devocional[]>([]);
  const [loading, setLoading] = useState(true);
  const [useDatabase, setUseDatabase] = useState(false);

  useEffect(() => {
    loadDevocionais();
  }, []);

  async function loadDevocionais() {
    try {
      const { data, error } = await supabase
        .from("devocionais")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.log("Usando dados estáticos (Supabase não configurado)");
        setUseDatabase(false);
      } else if (data && data.length > 0) {
        setDevocionais(data);
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

  const posts = useDatabase ? devocionais : blogPosts;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-800">
            Devocionais Diários
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Fortaleça sua fé com reflexões profundas baseadas na Palavra de
            Deus. Cada devocional inclui versículos, reflexões e orações.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-slate-600">Carregando devocionais...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              // Adaptar estrutura do banco de dados para o componente
              const displayPost = useDatabase ? {
                id: post.id,
                title: (post as Devocional).title,
                excerpt: (post as Devocional).subtitle,
                imageUrl: (post as Devocional).image_url || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
                date: (post as Devocional).date,
                verse: (post as Devocional).verse_reference,
              } : post;

              return (
                <article
                  key={displayPost.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Link to={`/blog/${displayPost.id}`}>
                    <ImageWithFallback
                      src={displayPost.imageUrl}
                      alt={displayPost.title}
                      className="w-full h-56 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-4" />
                        {new Date(displayPost.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1 text-amber-700">
                        <BookOpen className="size-4" />
                        {displayPost.verse}
                      </span>
                    </div>
                    <Link to={`/blog/${displayPost.id}`}>
                      <h2 className="text-2xl mb-3 text-slate-800 hover:text-amber-700 transition-colors">
                        {displayPost.title}
                      </h2>
                    </Link>
                    <p className="text-slate-600 mb-4">{displayPost.excerpt}</p>
                    <Link
                      to={`/blog/${displayPost.id}`}
                      className="text-amber-700 hover:text-amber-800 inline-flex items-center gap-2"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}