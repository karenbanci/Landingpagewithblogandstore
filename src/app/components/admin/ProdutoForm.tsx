import { useState, useEffect } from "react";
import { supabase, type Produto } from "../../lib/supabase";
import { X, Plus, Trash2 } from "lucide-react";

interface ProdutoFormProps {
  produto: Produto | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export function ProdutoForm({ produto, onSuccess, onCancel }: ProdutoFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    image_url: "",
    features: [""],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (produto) {
      setFormData({
        name: produto.name,
        description: produto.description,
        price: produto.price,
        image_url: produto.image_url || "",
        features: produto.features.length > 0 ? produto.features : [""],
      });
    }
  }, [produto]);

  function addFeature() {
    setFormData({
      ...formData,
      features: [...formData.features, ""],
    });
  }

  function removeFeature(index: number) {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      features: newFeatures.length > 0 ? newFeatures : [""],
    });
  }

  function updateFeature(index: number, value: string) {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = {
      ...formData,
      features: formData.features.filter((f) => f.trim() !== ""),
      updated_at: new Date().toISOString(),
    };

    if (produto) {
      // Update
      const { error } = await supabase
        .from("produtos")
        .update(data)
        .eq("id", produto.id);

      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        onSuccess();
      }
    } else {
      // Insert
      const { error } = await supabase.from("produtos").insert([
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
            {produto ? "Editar Produto" : "Novo Produto"}
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
            <label className="block text-sm text-slate-700 mb-1">Nome</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">Descrição</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-700 mb-1">
              Preço (R$)
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: parseFloat(e.target.value) })
              }
              required
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

          <div>
            <label className="block text-sm text-slate-700 mb-2">
              Características
            </label>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    placeholder="Ex: 365 páginas de devocionais"
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  />
                  {formData.features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="size-5" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addFeature}
                className="flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors"
              >
                <Plus className="size-4" />
                <span className="text-sm">Adicionar característica</span>
              </button>
            </div>
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
