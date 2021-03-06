const tokenName = "authToken";
const setToken = (token) => localStorage.setItem(tokenName, token);
const getToken = () => localStorage.getItem(tokenName);
const clearToken = () => localStorage.removeItem(tokenName);
const setRole = (role) => localStorage.setItem("role", role);
const clearRole = () => localStorage.removeItem("role");
const setMenu = (menu) => localStorage.setItem("menu", menu);
const getMenu = () => localStorage.getItem("menu");

export default {
  setToken,
  getToken,
  clearToken,
  setRole,
  clearRole,
  getMenu,
  setMenu,
};
