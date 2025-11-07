import React from "react";

export default function TodoItem({ todo, onToggle }) {
  const { title, completed } = todo;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            background: completed ? "#10b981" : "#ef4444",
          }}
          aria-hidden
        />
        <div>
          <div style={{ fontSize: 16, marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>
            상태: <strong>{completed ? "완료" : "미완료"}</strong>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={onToggle}
          style={{
            padding: "6px 10px",
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
          aria-label={`toggle-${todo.id}`}
        >
          완료
        </button>
      </div>
    </div>
  );
}
