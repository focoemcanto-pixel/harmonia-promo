export const metadata = {
  title: 'Redirecionando...',
}

export default function ObrigadoRedirectPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#070707', color: '#fff', fontFamily: 'Arial, sans-serif', padding: 24, textAlign: 'center' }}>
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/obrigado-vip')" }} />
      <div>
        <h1>Redirecionando...</h1>
        <p>Estamos abrindo sua oferta exclusiva.</p>
        <a href="/obrigado-vip" style={{ color: '#23D9B5', fontWeight: 800 }}>Clique aqui se não abrir automaticamente</a>
      </div>
    </main>
  )
}
