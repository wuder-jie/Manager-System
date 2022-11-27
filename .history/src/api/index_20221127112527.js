import service from "./service";
const login=function(data){
  return service(data.username,data.password);
}