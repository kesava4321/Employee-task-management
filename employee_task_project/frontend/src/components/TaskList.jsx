import React, { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ title:'', description:'', employeeId: '' });

  useEffect(()=> { fetchTasks(); fetchEmployees(); }, []);

  function fetchTasks(){
    fetch(`${API}/tasks`).then(r=>r.json()).then(setTasks).catch(console.error);
  }
  function fetchEmployees(){
    fetch(`${API}/employees`).then(r=>r.json()).then(setEmployees).catch(console.error);
  }

  function submit(e){
    e.preventDefault();
    const payload = {...form, employeeId: form.employeeId || null};
    fetch(`${API}/tasks`, {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
    }).then(()=>{ setForm({title:'',description:'',employeeId:''}); fetchTasks(); });
  }

  return (
    <div className="card">
      <h2>Tasks</h2>
      <form onSubmit={submit} className="small-form">
        <input placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required />
        <input placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
        <select value={form.employeeId} onChange={e=>setForm({...form,employeeId:e.target.value})}>
          <option value="">Unassigned</option>
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>{emp.name}</option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <strong>{t.title}</strong> — {t.status} {t.employee ? ` (Assigned to ${t.employee.name})` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}
