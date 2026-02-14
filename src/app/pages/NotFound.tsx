import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-slate-800">404</h1>
        <h2 className="text-2xl mb-4 text-slate-800">Página não encontrada</h2>
        <p className="text-slate-600 mb-8">
          A página que você está procurando não existe.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
        >
          <Home className="size-5" />
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
