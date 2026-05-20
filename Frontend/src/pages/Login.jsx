import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      login(data.token, data.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f0e8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Logo */}
      <div style={{ marginBottom: "32px", textAlign: "center" }}>
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "32px",
          color: "#2d3a2e",
          letterSpacing: "-1px",
          margin: 0,
        }}>
          <span style={{ color: "#5a7a5c", fontStyle: "italic" }}>Lumen</span>
        </h1>
        <p style={{ fontSize: "13px", color: "#a09880", marginTop: "4px" }}>your calm AI companion 🍵</p>
      </div>

      {/* Card */}
      <div style={{
        background: "#fff8f0",
        border: "1px solid #ddd5c0",
        borderRadius: "20px",
        padding: "40px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "24px",
          color: "#2d3a2e",
          marginBottom: "6px",
          fontWeight: "400",
        }}>Welcome back</h2>
        <p style={{ fontSize: "13px", color: "#a09880", marginBottom: "28px" }}>Sign in to continue to Lumen</p>

        {error && (
          <div style={{
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "10px",
            padding: "10px 14px",
            marginBottom: "16px",
            fontSize: "12px",
            color: "#b91c1c",
          }}>{error}</div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "11px", color: "#8a8070", fontWeight: "600", letterSpacing: "0.05em" }}>EMAIL</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              style={{
                padding: "12px 16px",
                border: "1.5px solid #ddd5c0",
                borderRadius: "12px",
                background: "#f5f0e8",
                fontSize: "13px",
                color: "#2d3a2e",
                outline: "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: "border 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#5a7a5c"}
              onBlur={e => e.target.style.borderColor = "#ddd5c0"}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "11px", color: "#8a8070", fontWeight: "600", letterSpacing: "0.05em" }}>PASSWORD</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              style={{
                padding: "12px 16px",
                border: "1.5px solid #ddd5c0",
                borderRadius: "12px",
                background: "#f5f0e8",
                fontSize: "13px",
                color: "#2d3a2e",
                outline: "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: "border 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#5a7a5c"}
              onBlur={e => e.target.style.borderColor = "#ddd5c0"}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "13px",
              background: "#5a7a5c",
              color: "#f5f0e8",
              border: "none",
              borderRadius: "12px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              marginTop: "6px",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.target.style.background = "#4a6a4c"}
            onMouseLeave={e => e.target.style.background = "#5a7a5c"}
          >
            Sign in
          </button>
        </form>

        <p style={{ fontSize: "12px", color: "#a09880", textAlign: "center", marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#5a7a5c", fontWeight: "600", textDecoration: "none" }}>
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
