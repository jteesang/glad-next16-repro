import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const xUrl = headersList.get('x-url');

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Next.js 16.0.0 Middleware Test</h1>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Custom Header Test</h2>
        <p><strong>x-url header:</strong> {xUrl || 'Not found'}</p>
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
        <p>If the middleware is working correctly, you should see the current URL above.</p>
      </div>
    </div>
  );
}