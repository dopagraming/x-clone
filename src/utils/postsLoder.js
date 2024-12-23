import { instance } from "../services/axiosInstance";
export const PostsLoder = async () => {
    var res = await instance.get(`posts`);
    return res.data;
}