const tokenName = "authToken";
const setToken = (token) => localStorage.setItem(tokenName, token);
const getToken = () => localStorage.getItem(tokenName);
const clearToken = () => localStorage.removeItem(tokenName);
const setRole = (role) => localStorage.setItem("role", role);
const clearRole = () => localStorage.removeItem("role");

export default {
  setToken,
  getToken,
  clearToken,
  setRole,
  clearRole,
};
