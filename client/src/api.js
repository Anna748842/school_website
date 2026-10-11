const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '');

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
