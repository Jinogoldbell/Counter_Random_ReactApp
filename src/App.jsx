import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));
  const reset = () => setCount(0);

  return (
    <section style={styles.card}>
      <h2 style={styles.heading}>Counter</h2>

      <div style={styles.counterDisplay}>{count}</div>

      <div style={styles.buttonRow}>
        <button
          style={{ ...styles.button, ...styles.decrementButton }}
          onClick={decrement}
          disabled={count === 0}
        >
          − Decrement
        </button>
        <button
          style={{ ...styles.button, ...styles.incrementButton }}
          onClick={increment}
        >
          + Increment
        </button>
      </div>

      <button style={styles.resetButton} onClick={reset}>
        Reset
      </button>

      <p style={styles.statusText}>
        {count === 0 ? "Minimum limit reached" : "\u00A0"}
      </p>
    </section>
  );
}

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const generate = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  return (
    <section style={styles.card}>
      <h2 style={styles.heading}>Random Number Generator</h2>

      <div style={styles.counterDisplay}>
        {number === null ? (
          <span style={styles.placeholderText}>No number generated yet</span>
        ) : (
          number
        )}
      </div>

      <button
        style={{ ...styles.button, ...styles.generateButton }}
        onClick={generate}
      >
        Generate Random Number
      </button>

      <p style={styles.helperText}>Range: 1–100</p>
    </section>
  );
}

export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>React State Practice</h1>
      <div style={styles.container}>
        <Counter />
        <RandomNumberGenerator />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#EEF1F5",
    fontFamily:
      "'Segoe UI', system-ui, -apple-system, sans-serif",
    padding: "40px 20px",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    color: "#22314A",
    marginBottom: "32px",
    fontSize: "28px",
    fontWeight: 700,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
    maxWidth: "760px",
    margin: "0 auto",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: "12px",
    padding: "28px 32px",
    boxShadow: "0 4px 16px rgba(34, 49, 74, 0.08)",
    width: "300px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    margin: "0 0 20px 0",
    color: "#22314A",
    fontSize: "19px",
    fontWeight: 600,
  },
  counterDisplay: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#2D6A4F",
    minHeight: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    width: "100%",
  },
  placeholderText: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#8A94A6",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "12px",
    width: "100%",
  },
  button: {
    flex: 1,
    padding: "10px 14px",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    color: "#FFFFFF",
    transition: "opacity 0.15s ease",
  },
  incrementButton: {
    background: "#2D6A4F",
  },
  decrementButton: {
    background: "#B23A48",
  },
  resetButton: {
    width: "100%",
    padding: "10px 14px",
    border: "1px solid #C6CCD8",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    background: "#FFFFFF",
    color: "#22314A",
    marginBottom: "12px",
  },
  generateButton: {
    width: "100%",
    background: "#3B5BDB",
    marginBottom: "12px",
  },
  statusText: {
    color: "#B23A48",
    fontSize: "13px",
    fontWeight: 600,
    minHeight: "18px",
    margin: 0,
  },
  helperText: {
    color: "#8A94A6",
    fontSize: "13px",
    margin: 0,
  },
};
