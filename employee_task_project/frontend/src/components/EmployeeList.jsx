import React, { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name:'', email:'', position:'' });

  useEffect(()=> fetchEmployees(), []);

  function fetchEmployees(){
    fetch(`${API}/employees`)
      .then(r=>r.json()).then(setEmployees).catch(console.error);
  }

  function submit(e){
    e.preventDefault();
    fetch(`${API}/employees`, {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
    }).then(()=>{ setForm({name:'',email:'',position:''}); fetchEmployees(); });
  }

  return (
    <div className="card">
      <h2>Employees</h2>
      <form onSubmit={submit} className="small-form">
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <input placeholder="Position" value={form.position} onChange={e=>setForm({...form,position:e.target.value})} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            <strong>{emp.name}</strong> ({emp.email}) — {emp.position}
            <div className="task-count">Tasks: {emp.tasks ? emp.tasks.length : 0}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
