import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import { downFile, getAll, uploadFile } from '../service/DownLoad'
import { Button, Modal } from 'react-bootstrap';
const HomPage = () =>{
    const [listUrl, setListUrl]=useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [show, setShow] = useState(false);
    const [nameFile, setNameFile] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setNameFile(e.target.innerText)
    };
    const fetchAllList = async()=>{
        const data = await getAll()
        setListUrl(data?.data)
    }
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handDown = async(e)=>{
        await downFile(nameFile)
        toast.success("Tải xuống thành công")
        handleClose()
    }
    const handleUpload = async()=>{
        if (!selectedFile) {
            toast.error('Vui lòng chọn file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        const response = await uploadFile(formData);
        console.log('response', response)
        if(response){
            toast.success("Tải lên thành công")
            fetchAllList()
        }
    }
    
    useEffect(()=>{
        fetchAllList()
    },[])
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>Bạn có muốn tải file xuống không!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Không
          </Button>
          <Button variant="primary" onClick={handDown}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"

        />
         <input type="file" onChange={handleFileChange} />
         <button onClick={handleUpload}>Tải file lên</button>
        <h1 style={{textAlign:'center'}}>Danh sách link</h1>
        <div className="homePage"  style={{display:"flex"}}>

            {listUrl?.map((data,index)=>{
                return(
                    <li>
                        <span onClick={(e)=>handleShow(e)}>{data}</span>
                    </li>
                )
            })}
        </div>
        </>
    )
}
export default HomPage