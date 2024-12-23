import { instance } from "../../services/axiosInstance";
export const PostsLoder = async (id) => {
    var res = await instance.get(`products/${id}`);
    return res.data;
}