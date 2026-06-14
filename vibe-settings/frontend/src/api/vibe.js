export async function fetchVibe(message) {
  const response = await fetch('http://localhost:8080/api/vibe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch vibe config');
  }

  return response.json();
}
