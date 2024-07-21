import axios from "axios"
import fileDownload from 'js-file-download';
export const axiosJWT = axios.create()
export const downFile = async (data) =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/testDown/down`,{
        params:{data},
        responseType: 'blob',
    }
    );
    fileDownload(res.data, data);
    return res.data
}

