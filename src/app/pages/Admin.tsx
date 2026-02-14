import { useState, useEffect } from "react";
import { supabase, type Devocional, type Produto } from "../lib/supabase";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { DevocionalForm } from "../components/admin/DevocionalForm";
import { ProdutoForm } from "../components/admin/ProdutoForm";

export function Admin() {
  const [activeTab, setActiveTab] = useState<"devocionais" | "produtos">("devocionais");
  const [devocionais, setDevocionais] = useState<Devocional[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDevocionalForm, setShowDevocionalForm] = useState(false);
  const [showProdutoForm, setShowProdutoForm] = useState(false);
  const [editingDevocional, setEditingDevocional] = useState<Devocional | null>(null);
  const [editingProduto, setEditingProduto] = useState<Produto | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
    if (activeTab === "devocionais") {
      loadDevocionais();
    } else {
      loadProdutos();
    }
  }, [activeTab]);

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  }

  async function loadDevocionais() {
    setLoading(true);
    const { data, error } = await supabase
      .from("devocionais")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      console.error("Erro ao carregar devocionais:", error);
    } else {
      setDevocionais(data || []);
    }
    setLoading(false);
  }

  async function loadProdutos() {
    setLoading(true);
    const { data, error } = await supabase
      .from("produtos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao carregar produtos:", error);
    } else {
      setProdutos(data || []);
    }
    setLoading(false);
  }

  async function deleteDevocional(id: string) {
    if (!confirm("Tem certeza que deseja deletar este devocional?")) return;

    const { error } = await supabase.from("devocionais").delete().eq("id", id);

    if (error) {
      console.error("Erro ao deletar:", error);
      alert("Erro ao deletar devocional");
    } else {
      loadDevocionais();
    }
  }

  async function deleteProduto(id: string) {
    if (!confirm("Tem certeza que deseja deletar este produto?")) return;

    const { error } = await supabase.from("produtos").delete().eq("id", id);

    if (error) {
      console.error("Erro ao deletar:", error);
      alert("Erro ao deletar produto");
    } else {
      loadProdutos();
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  const handleDevocionalSuccess = () => {
    setShowDevocionalForm(false);
    setEditingDevocional(null);
    loadDevocionais();
  };

  const handleProdutoSuccess = () => {
    setShowProdutoForm(false);
    setEditingProduto(null);
    loadProdutos();
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Você precisa estar autenticado</p>
          <a href="/login" className="text-amber-700 hover:underline">
            Fazer login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl text-slate-800">Painel Administrativo</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <LogOut className="size-5" />
            <span>Sair</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("devocionais")}
            className={`px-4 py-2 -mb-px transition-colors ${
              activeTab === "devocionais"
                ? "border-b-2 border-amber-700 text-amber-700"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Devocionais
          </button>
          <button
            onClick={() => setActiveTab("produtos")}
            className={`px-4 py-2 -mb-px transition-colors ${
              activeTab === "produtos"
                ? "border-b-2 border-amber-700 text-amber-700"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Produtos
          </button>
        </div>

        {/* Content */}
        {activeTab === "devocionais" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-slate-800">Devocionais</h2>
              <button
                onClick={() => {
                  setEditingDevocional(null);
                  setShowDevocionalForm(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
              >
                <Plus className="size-5" />
                <span>Novo Devocional</span>
              </button>
            </div>

            {showDevocionalForm && (
              <DevocionalForm
                devocional={editingDevocional}
                onSuccess={handleDevocionalSuccess}
                onCancel={() => {
                  setShowDevocionalForm(false);
                  setEditingDevocional(null);
                }}
              />
            )}

            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-600">Carregando...</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Título
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Versículo
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {devocionais.map((devocional) => (
                      <tr key={devocional.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-sm text-slate-800">
                          {devocional.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {new Date(devocional.date).toLocaleDateString("pt-BR")}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {devocional.verse_reference}
                        </td>
                        <td className="px-6 py-4 text-sm text-right">
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => {
                                setEditingDevocional(devocional);
                                setShowDevocionalForm(true);
                              }}
                              className="p-2 text-amber-700 hover:bg-amber-50 rounded transition-colors"
                            >
                              <Edit className="size-4" />
                            </button>
                            <button
                              onClick={() => deleteDevocional(devocional.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === "produtos" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-slate-800">Produtos</h2>
              <button
                onClick={() => {
                  setEditingProduto(null);
                  setShowProdutoForm(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
              >
                <Plus className="size-5" />
                <span>Novo Produto</span>
              </button>
            </div>

            {showProdutoForm && (
              <ProdutoForm
                produto={editingProduto}
                onSuccess={handleProdutoSuccess}
                onCancel={() => {
                  setShowProdutoForm(false);
                  setEditingProduto(null);
                }}
              />
            )}

            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-600">Carregando...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {produtos.map((produto) => (
                  <div
                    key={produto.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    {produto.image_url && (
                      <img
                        src={produto.image_url}
                        alt={produto.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-lg text-slate-800 mb-2">{produto.name}</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {produto.description}
                      </p>
                      <p className="text-xl text-amber-700 mb-4">
                        R$ {produto.price.toFixed(2)}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingProduto(produto);
                            setShowProdutoForm(true);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-amber-700 border border-amber-700 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          <Edit className="size-4" />
                          <span>Editar</span>
                        </button>
                        <button
                          onClick={() => deleteProduto(produto.id)}
                          className="flex items-center justify-center gap-2 px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
