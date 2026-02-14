import { useState, useEffect } from "react";
import { supabase, type Devocional } from "../../lib/supabase";
import { X } from "lucide-react";

interface DevocionalFormProps {
  devocional: Devocional | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export function DevocionalForm({ devocional, onSuccess, onCancel }: DevocionalFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    date: new Date().toISOString().split("T")[0],
    verse: "",
    verse_reference: "",
    content: "",
    prayer: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (devocional) {
      setFormData({
        title: devocional.title,
        subtitle: devocional.subtitle,
        date: devocional.date.split("T")[0],
        verse: devocional.verse,
        verse_reference: devocional.verse_reference,
        content: devocional.content,
        prayer: devocional.prayer,
        image_url: devocional.image_url || "",
      });
    }
  }, [devocional]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = {
      ...formData,
      updated_at: new Date().toISOString(),
    };

    if (devocional) {
      // Update
      const { error } = await supabase
        .from("devocionais")
        .update(data)
        .eq("id", devocional.id);

      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        onSuccess();
      }
    } else {
      // Insert
      const { error } = await supabase.from("devocionais").insert([
        {
          ...data,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        onSuccess();
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl text-slate-800">
            {devocional ? "Editar Devocional" : "Novo Devocional"}
          </h3>
          <button
            onClick={onCancel}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="size-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm text-slate-700 mb-1">Título</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">Subtítulo</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">Data</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">Versículo</label>
            <textarea
              value={formData.verse}
              onChange={(e) =>
                setFormData({ ...formData, verse: e.target.value })
              }
              required
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">
              Referência do Versículo
            </label>
            <input
              type="text"
              value={formData.verse_reference}
              onChange={(e) =>
                setFormData({ ...formData, verse_reference: e.target.value })
              }
              required
              placeholder="Ex: João 3:16"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">
              Reflexão
            </label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
              rows={6}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">Oração</label>
            <textarea
              value={formData.prayer}
              onChange={(e) =>
                setFormData({ ...formData, prayer: e.target.value })
              }
              required
              rows={4}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">
              URL da Imagem (opcional)
            </label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) =>
                setFormData({ ...formData, image_url: e.target.value })
              }
              placeholder="https://exemplo.com/imagem.jpg"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
