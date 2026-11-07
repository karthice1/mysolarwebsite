"use client";
import AppShell from "../../../components/AppShell";

export default function BooksPage() {
  const rows=[{id:"INV-2041",customer:"Green Villa",amount:"₹45,000",status:"Paid"},{id:"INV-2042",customer:"Sunrise Apartments",amount:"₹1,20,000",status:"Due"},{id:"PO-310",customer:"Module Supplier",amount:"₹6,80,000",status:"Sent"}];
  return (
    <AppShell title="Books">
      <div className="cards-grid">
        {[{t:"Receivables",v:"₹1,20,000"},{t:"Payables",v:"₹6,80,000"},{t:"Collected",v:"₹45,000"},{t:"Open Items",v:"2"}].map(c=><div key={c.t} className="card"><h3>{c.t}</h3><div style={{fontSize:24,fontWeight:700,marginTop:6}}>{c.v}</div></div>)}
      </div>
      <div className="table">
        <div className="table-header"><div>Document</div><div>Customer / Vendor</div><div>Amount</div><div>Status</div></div>
        {rows.map((r,i)=>(<div key={i} className="table-row"><div>{r.id}</div><div>{r.customer}</div><div>{r.amount}</div><div><span className="badge">{r.status}</span></div></div>))}
      </div>
    </AppShell>
  );
}
