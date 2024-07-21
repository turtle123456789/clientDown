import axios from "axios"
import fileDownload from 'js-file-download';
export const axiosJWT = axios.create()
export const downFile = async (data) =>{
    const res = await axios.get(`http://localhost:3001/api/testDown/down`,{
        params:{data},
        responseType: 'blob',
    }
    );
    fileDownload(res.data, data);
    return res.data
}

