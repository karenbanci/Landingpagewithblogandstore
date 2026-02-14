import { Info, X } from "lucide-react";
import { useState } from "react";

export function SupabaseWarning() {
  const [dismissed, setDismissed] = useState(
    localStorage.getItem("supabase-warning-dismissed") === "true"
  );

  // Verifica se o Supabase está configurado
  const isConfigured =
    import.meta.env.VITE_SUPABASE_URL &&
    import.meta.env.VITE_SUPABASE_URL !== "YOUR_SUPABASE_URL";

  if (dismissed || isConfigured) {
    return null;
  }

  function handleDismiss() {
    setDismissed(true);
    localStorage.setItem("supabase-warning-dismissed", "true");
  }

  return (
    <div className="bg-blue-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-start gap-3">
          <Info className="size-5 text-blue-700 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-slate-700">
              <strong>Modo de demonstração:</strong> Este site está exibindo
              dados de exemplo. Para habilitar o painel administrativo e
              gerenciar seu próprio conteúdo, configure o Supabase seguindo as
              instruções no arquivo{" "}
              <code className="bg-blue-100 px-1 py-0.5 rounded text-xs">
                SUPABASE_SETUP.md
              </code>
              .
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-slate-600 flex-shrink-0"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
