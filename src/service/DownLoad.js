import axios from "axios"
import fileDownload from 'js-file-download';
export const axiosJWT = axios.create()
export const getAll = async () =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/testDown/getAll`)
    return res.data
}
export const uploadFile = async (data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/testDown/update`,data)
    return res.data
}
export const downFile = async (data) =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/testDown/down`,{
        params:{data},
        responseType: 'blob',
    }
    );
    fileDownload(res.data, data);
    return res.data
}

