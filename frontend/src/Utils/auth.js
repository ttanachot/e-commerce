export const setAccessToken = (token) => localStorage.setItem('bearerToken', token);

export const getAccessToken = () => localStorage.getItem('bearerToken');

export const removeAccessToken = () => localStorage.removeItem('bearerToken');