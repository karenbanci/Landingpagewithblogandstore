import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SupabaseWarning } from "./SupabaseWarning";

export function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/admin";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Header />}
      {!hideLayout && <SupabaseWarning />}
      <main className={hideLayout ? "" : "flex-1"}>
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}
