const API_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';

export async function fetchPatients() {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error('Error fetching patients');
  }
  return response.json();
}
