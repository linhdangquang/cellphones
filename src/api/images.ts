import axios from "axios";

const imageInstance = axios.create({
    baseURL: "https://image-uploader-anhhtus.herokuapp.com/api"
    // baseURL: 'https://api.cloudinary.com/v1_1/linh-asm/image',
})

export const upload = (base64Image: string) => {
    const url = "/upload"
    return imageInstance.post(url, {data: base64Image})
}
