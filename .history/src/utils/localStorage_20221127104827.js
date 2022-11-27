export function setToken(key,value){
  localStorage.setItem(key,value);
}
export function getToken(key){
  return localStorage.setItem(key);
}
export function removeToken(key){
  localStorage.removeItem(key);
}