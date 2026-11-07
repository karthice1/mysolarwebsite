"use client";
import AppShell from "../../../components/AppShell";

export default function DesignApp() {
  return (
    <AppShell title="Design">
      <div className="card">
        <h3 style={{marginTop:0}}>Solar Design Workspace</h3>
        <p>Create 2D/3D layouts, place modules, and share designs with proposals. This demo workspace represents the design feature set.</p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:16}}>
          {["New 2D Layout","New 3D Design","Import Site Image"].map(a=><button key={a} className="btn btn-outline" type="button">{a}</button>)}
        </div>
      </div>
      <div className="cards-grid">
        {[{n:"Green Villa",m:"12 modules",s:"Ready"},{n:"Sunrise Apartments",m:"48 modules",s:"In Review"},{n:"Apex Warehouse",m:"180 modules",s:"Draft"}].map(d=>(
          <div key={d.n} className="card"><h3>{d.n}</h3><p>{d.m}</p><div style={{marginTop:8}}><span className="badge">{d.s}</span></div></div>
        ))}
      </div>
    </AppShell>
  );
}
