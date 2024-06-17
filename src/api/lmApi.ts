import service from "../utils/http/request";
export const login = (data?: any) => {
  return service.post("/ucac/pcLogin ", data);
};
