import { message } from "antd";
import { upload } from "../api/images";

export const uploadImage = async (base64Image: string) => {
  try {
  const {data} = await upload(base64Image);
    return data.url;
  } catch (err: any) {
    console.log(err);
    return err;
  }
};