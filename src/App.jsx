import React, { useState } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([  ]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const handleAdd = () => {
    const title = input.trim();
    if (!title) return;
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos(prev => [newTodo, ...prev]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filtered = todos.filter(t =>
    t.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div style={{ maxWidth: 720, margin: "32px auto", padding: 20 }}>
      <h1 style={{ marginBottom: 16 }}> To do List</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          aria-label="todo-input"
          placeholder="할 일을 입력하세요."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <button onClick={handleAdd} style={{ padding: "8px 12px", fontSize: 16 }}>
          추가
        </button>
      </div>

      <div style={{ marginBottom: 18 }}>
        <input
          aria-label="search-input"
          placeholder="검색 (키워드 입력)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "100%", padding: 8, fontSize: 14 }}
        />
      </div>

      <TodoList todos={filtered} onToggleComplete={toggleComplete} />
    </div>
  );
}
