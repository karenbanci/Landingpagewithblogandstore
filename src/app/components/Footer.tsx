import { Cross, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cross className="size-6 text-amber-500" />
              <span className="font-semibold text-white">
                Devocionais Diários
              </span>
            </div>
            <p className="text-sm">
              Compartilhando a Palavra de Deus e ferramentas para fortalecer
              sua caminhada cristã.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-amber-500 transition-colors"
                >
                  Devocionais
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className="hover:text-amber-500 transition-colors"
                >
                  Produtos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-amber-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Devocionais Diários. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
