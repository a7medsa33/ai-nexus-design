// =============================================================
// Axios Instance — Configure when backend is ready
// =============================================================
// import axios from 'axios';
//
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
//   headers: { 'Content-Type': 'application/json' },
// });
//
// // Request interceptor — attach auth token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('auth_token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
//
// // Response interceptor — handle errors globally
// api.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem('auth_token');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );
//
// export default api;

// Placeholder delay for mock services
export const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));
