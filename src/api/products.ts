import instance from "./instance";

export const getAllPros = () => {
  return instance.get('/products');
}

export const getProduct = (id: any) => {
  return instance.get(`/products/${id}`);
}

export const createProduct = (data: any) => {
  const url = "/products"
    return instance.post(url, data)
}

export const updateProduct = (data : any) => {
  const url = `/products/${data.id}`
    return instance.put(url, data)
}