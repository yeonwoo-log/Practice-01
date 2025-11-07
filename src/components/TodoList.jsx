import React from "react";
import TodoItem from "./Todoitem";

export default function TodoList({ todos, onToggleComplete }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p style={{ color: "#666" }}>해야 할 일이 없습니다.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
          {todos.map((t) => (
            <li key={t.id}>
              <TodoItem todo={t} onToggle={() => onToggleComplete(t.id)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
