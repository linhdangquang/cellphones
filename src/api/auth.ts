import { toast } from "react-toastify";
import instance from "./instance";

export const signIn = (data: any) => {
  const url = '/login';
  return instance.post(url, data);
}

export const signUp = (data: any) => {
  const url = '/signup';
  return instance.post(url, {...data, admin: false});
}

export const logOut = () => {
  localStorage.removeItem('user');
  toast.info('Đăng xuất thành công');
}