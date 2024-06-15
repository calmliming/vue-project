import service from "../utils/http/request";
export const login = (data?: any) => {
  return service.get("addbook", data);
};
