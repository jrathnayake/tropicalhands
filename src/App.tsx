function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'sans-serif', background: '#f5f5f4', color: '#111827' }}>
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem', margin: 0, color: '#6b7280' }}>
          Fresh start
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0' }}>
          Your new website starts here
        </h1>
      </section>
    </main>
  )
}

export default App
