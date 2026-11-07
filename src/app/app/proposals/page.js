"use client";
import { useState } from "react";
import AppShell from "../../../components/AppShell";

export default function ProposalsPage() {
  const [list, setList] = useState([
    {customer:"Green Villa", system:"5 kW", value:"₹3,10,000", status:"Sent"},
    {customer:"Sunrise Apartments", system:"20 kW", value:"₹11,40,000", status:"Draft"},
  ]);
  const [f,setF]=useState({customer:"",system:"",value:""});
  return (
    <AppShell title="Proposals">
      <div className="card">
        <h3 style={{marginTop:0}}>Create Proposal</h3>
        <form className="form-grid" onSubmit={(e)=>{e.preventDefault(); if(!f.customer) return; setList([{...f,status:"Draft"},...list]); setF({customer:"",system:"",value:""});}}>
          <input className="input" placeholder="Customer" value={f.customer} onChange={e=>setF({...f,customer:e.target.value})} />
          <input className="input" placeholder="System size (e.g. 5 kW)" value={f.system} onChange={e=>setF({...f,system:e.target.value})} />
          <input className="input" placeholder="Value" value={f.value} onChange={e=>setF({...f,value:e.target.value})} />
          <div className="full"><button className="btn btn-primary" type="submit">Generate Proposal</button></div>
        </form>
      </div>
      <div className="table">
        <div className="table-header"><div>Customer</div><div>System</div><div>Value</div><div>Status</div></div>
        {list.map((r,i)=>(<div key={i} className="table-row"><div>{r.customer}</div><div>{r.system}</div><div>{r.value}</div><div><span className="badge">{r.status}</span></div></div>))}
      </div>
    </AppShell>
  );
}
