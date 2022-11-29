export default defineNuxtRouteMiddleware((to, _from) => {
  const navigationHistory = useLocalStorage("history", []);
  navigationHistory.value.push(to.path);
});
