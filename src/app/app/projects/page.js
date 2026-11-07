"use client";
import { useState } from "react";
import AppShell from "../../../components/AppShell";

export default function Projects() {
  const [items, setItems] = useState([
    {name:"Green Villa - 5kW", location:"Mumbai", stage:"Survey", owner:"Rensun"},
    {name:"Sunrise Apartments - 20kW", location:"Pune", stage:"Proposal", owner:"Sales Team"},
    {name:"Apex Warehouse - 75kW", location:"Nashik", stage:"Execution", owner:"Ops"},
  ]);
  const [form, setForm] = useState({name:"", location:"", stage:"New", owner:""});
  return (
    <AppShell title="Projects / CRM">
      <div className="card">
        <h3 style={{marginTop:0}}>Add Project / Customer</h3>
        <form className="form-grid" onSubmit={(e)=>{e.preventDefault(); if(!form.name) return; setItems([{...form},...items]); setForm({name:"",location:"",stage:"New",owner:""});}}>
          <input className="input" placeholder="Project or customer name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="input" placeholder="Location" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} />
          <select className="select" value={form.stage} onChange={e=>setForm({...form,stage:e.target.value})}><option>New</option><option>Survey</option><option>Proposal</option><option>Execution</option><option>Completed</option></select>
          <input className="input" placeholder="Owner" value={form.owner} onChange={e=>setForm({...form,owner:e.target.value})} />
          <div className="full"><button className="btn btn-primary" type="submit">Save</button></div>
        </form>
      </div>
      <div className="table">
        <div className="table-header"><div>Project</div><div>Location</div><div>Stage</div><div>Owner</div></div>
        {items.map((r,i)=>(<div key={i} className="table-row"><div>{r.name}</div><div>{r.location}</div><div><span className="badge">{r.stage}</span></div><div>{r.owner}</div></div>))}
      </div>
    </AppShell>
  );
}
