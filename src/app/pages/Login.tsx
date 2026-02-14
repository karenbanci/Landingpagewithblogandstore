import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Cross } from "lucide-react";
import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/admin");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Cross className="size-12 text-amber-700" />
          </div>
          <h1 className="text-3xl text-slate-800 mb-2">Painel Administrativo</h1>
          <p className="text-slate-600">
            Entre com suas credenciais para gerenciar o blog
          </p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-lg p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-slate-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
              placeholder="seu@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-slate-700 mb-2">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-amber-700 hover:underline">
              Voltar para o site
            </a>
          </div>
        </form>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-slate-700">
            <strong>Configuração necessária:</strong> Crie sua conta no{" "}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:underline"
            >
              Supabase
            </a>{" "}
            e configure as variáveis de ambiente VITE_SUPABASE_URL e
            VITE_SUPABASE_ANON_KEY.
          </p>
        </div>
      </div>
    </div>
  );
}
