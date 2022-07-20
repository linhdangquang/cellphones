import axios from "axios";

const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/linh-asm/image/upload';

export const uploadImage = async (base64Image: string) => {
  try {
  const formData = new FormData();
  formData.append("file", base64Image);
  formData.append("upload_preset", "cellphones");
  const {data} = await axios.post(CLOUDINARY_API_URL, formData, {
    headers: {
      "Content-Type": "application/form-data",
    }
  })
  console.log(data);
    return data.url;
  } catch (err: any) {
    console.log(err);
    return err;
  }
};