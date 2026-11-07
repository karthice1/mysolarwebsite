"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const nav = [
  { href: "/app/dashboard", label: "Dashboard" },
  { href: "/app/projects", label: "Projects / CRM" },
  { href: "/app/proposals", label: "Proposals" },
  { href: "/app/design", label: "Design" },
  { href: "/app/tasks", label: "Tasks" },
  { href: "/app/books", label: "Books" },
];

export default function AppShell({ title, children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState("");

  useEffect(() => {
    try {
      const ok = localStorage.getItem("solarladder_auth") === "true";
      const u = localStorage.getItem("solarladder_user") || "";
      if (!ok) { router.replace("/login"); return; }
      setUser(u);
    } catch (_) { router.replace("/login"); }
  }, [router]);

  const logout = () => {
    try { localStorage.removeItem("solarladder_auth"); localStorage.removeItem("solarladder_user"); } catch (_) {}
    router.push("/login");
  };

  return (
    <div className="app-shell">
      <aside className="app-side">
        <a className="brand" href="/app/dashboard" style={{color:'#fff', marginBottom:8}}><span className="brand-mark" style={{background:'#03989e'}}></span>Solar Ladder</a>
        <nav className="app-nav">
          {nav.map(n => <a key={n.href} href={n.href} className={pathname===n.href?"active":""}>{n.label}</a>)}
        </nav>
        <div style={{marginTop:'auto', fontSize:12, opacity:.85}}>Logged in as<br/>{user}</div>
        <button className="btn btn-outline" style={{borderColor:'rgba(255,255,255,.4)', color:'#fff', width:'100%'}} onClick={logout}>Logout</button>
      </aside>
      <div className="app-main">
        <header className="app-top"><h1>{title}</h1><a href="/" className="btn btn-outline">View Website</a></header>
        <div className="app-content">{children}</div>
      </div>
    </div>
  );
}
