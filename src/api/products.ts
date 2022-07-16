import instance from "./instance";

export const getAllPros = () => {
  return instance.get('/products');
}

export const createProduct = (data: any) => {
  const url = "/products"
    return instance.post(url, data)
}