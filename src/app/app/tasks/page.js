"use client";
import { useState } from "react";
import AppShell from "../../../components/AppShell";

export default function TasksPage() {
  const [tasks,setTasks]=useState([
    {t:"Call Green Villa for survey slot", due:"Today", status:"Open"},
    {t:"Send revised proposal to Sunrise", due:"Tomorrow", status:"Open"},
    {t:"Upload design drawings for Apex", due:"This week", status:"Done"},
  ]);
  const [v,setV]=useState("");
  return (
    <AppShell title="Tasks">
      <div className="card">
        <h3 style={{marginTop:0}}>Add Task</h3>
        <form onSubmit={(e)=>{e.preventDefault(); if(!v) return; setTasks([{t:v,due:"Upcoming",status:"Open"},...tasks]); setV("");}} style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <input className="input" style={{flex:'1 1 260px'}} placeholder="Task description" value={v} onChange={e=>setV(e.target.value)} />
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
      <div className="table">
        <div className="table-header"><div>Task</div><div>Due</div><div>Status</div><div>Action</div></div>
        {tasks.map((r,i)=>(<div key={i} className="table-row"><div>{r.t}</div><div>{r.due}</div><div><span className="badge">{r.status}</span></div><div><button className="btn btn-outline" type="button" onClick={()=>setTasks(tasks.map((x,j)=>j===i?{...x,status:x.status==="Done"?"Open":"Done"}:x))}>Toggle</button></div></div>))}
      </div>
    </AppShell>
  );
}
