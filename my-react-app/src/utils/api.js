const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.com/api'  // Replace with your actual backend URL
  : 'http://localhost:5173/api';

export const fetchApi = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
}; 