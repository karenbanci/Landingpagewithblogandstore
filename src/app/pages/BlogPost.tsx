import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { supabase, type Devocional } from "../lib/supabase";
import { blogPosts } from "../data/blogPosts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, BookOpen, ArrowLeft } from "lucide-react";

export function BlogPost() {
  const { id } = useParams();
  const [devocional, setDevocional] = useState<Devocional | null>(null);
  const [loading, setLoading] = useState(true);
  const [useDatabase, setUseDatabase] = useState(false);

  useEffect(() => {
    loadDevocional();
  }, [id]);

  async function loadDevocional() {
    try {
      const { data, error } = await supabase
        .from("devocionais")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        setUseDatabase(false);
      } else {
        setDevocional(data);
        setUseDatabase(true);
      }
    } catch (err) {
      setUseDatabase(false);
    } finally {
      setLoading(false);
    }
  }

  const post = useDatabase ? devocional : blogPosts.find((p) => p.id === id);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600">Carregando...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4 text-slate-800">
            Devocional não encontrado
          </h1>
          <Link
            to="/blog"
            className="text-amber-700 hover:text-amber-800 inline-flex items-center gap-2"
          >
            <ArrowLeft className="size-4" />
            Voltar para devocionais
          </Link>
        </div>
      </div>
    );
  }

  // Adaptar estrutura do banco de dados para o componente
  const displayPost = useDatabase ? {
    id: post.id,
    title: (post as Devocional).title,
    imageUrl: (post as Devocional).image_url || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    date: (post as Devocional).date,
    verse: (post as Devocional).verse_reference,
    content: `
      <div class="mb-8 p-6 bg-amber-50 border-l-4 border-amber-700 rounded">
        <p class="text-lg italic text-slate-700">"${(post as Devocional).verse}"</p>
        <p class="text-sm text-slate-600 mt-2">${(post as Devocional).verse_reference}</p>
      </div>
      <h2 class="text-2xl mb-4 text-slate-800">Reflexão</h2>
      <p class="mb-6 text-slate-700 whitespace-pre-line">${(post as Devocional).content}</p>
      <div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-700 rounded">
        <h3 class="text-xl mb-3 text-slate-800">Oração</h3>
        <p class="text-slate-700 italic whitespace-pre-line">${(post as Devocional).prayer}</p>
      </div>
    `,
  } : post;

  return (
    <div className="min-h-screen bg-slate-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="text-amber-700 hover:text-amber-800 inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="size-4" />
          Voltar para devocionais
        </Link>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src={displayPost.imageUrl}
            alt={displayPost.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 mb-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4" />
                {new Date(displayPost.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2 text-amber-700 font-medium">
                <BookOpen className="size-4" />
                {displayPost.verse}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl mb-8 text-slate-800">
              {displayPost.title}
            </h1>

            <div
              className="prose prose-lg max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: displayPost.content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
              }}
            />
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl mb-6 text-slate-800">Outros Devocionais</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex"
                >
                  <ImageWithFallback
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    className="w-32 h-32 object-cover flex-shrink-0"
                  />
                  <div className="p-4">
                    <p className="text-xs text-amber-700 mb-1">
                      {relatedPost.verse}
                    </p>
                    <h3 className="text-lg mb-1 text-slate-800">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}