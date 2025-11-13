import { headers } from 'next/headers';

export default async function TestPage() {
  const headersList = await headers();
  const xUrl = headersList.get('x-url');

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Test Page</h1>
      <p><strong>x-url header:</strong> {xUrl || 'Not found'}</p>
      <p><a href="/" style={{ color: '#0070f3' }}>← Back to home</a></p>
    </div>
  );
}