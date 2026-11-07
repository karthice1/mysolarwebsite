"use client";
import AppShell from "../../../components/AppShell";

export default function Dashboard() {
  return (
    <AppShell title="Dashboard">
      <div className="cards-grid">
        {[
          {t:"Active Projects",v:"24",d:"Across residential and commercial sites"},
          {t:"Proposals Sent",v:"18",d:"This month"},
          {t:"Designs Created",v:"31",d:"2D/3D layouts ready"},
          {t:"Tasks Due",v:"7",d:"Action items this week"},
        ].map(c=>(
          <div key={c.t} className="card"><h3>{c.t}</h3><div style={{fontSize:28,fontWeight:700,margin:'6px 0'}}>{c.v}</div><p>{c.d}</p></div>
        ))}
      </div>
      <div className="card">
        <h3 style={{marginTop:0}}>Everything you need to grow your solar business</h3>
        <p>Use the navigation to manage Projects/CRM, create Proposals, design systems, track Tasks, and handle Books. This workspace includes the core Solar Ladder features: customer management, proposal generation, solar design, project tracking, and finance workflows.</p>
      </div>
      <div className="table">
        <div className="table-header"><div>Recent Activity</div><div>Module</div><div>Status</div><div>Updated</div></div>
        {[["Rooftop proposal for Green Villa","Proposals","Sent","Today"],["Site survey - Andheri East","Projects / CRM","In Progress","Today"],["3D design - 12kW commercial","Design","Ready","Yesterday"],["Invoice #INV-2041","Books","Paid","2 days ago"]].map((r,i)=>(
          <div key={i} className="table-row"><div>{r[0]}</div><div>{r[1]}</div><div><span className="badge">{r[2]}</span></div><div>{r[3]}</div></div>
        ))}
      </div>
    </AppShell>
  );
}
