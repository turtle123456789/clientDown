import { useState } from 'react'


import { downFile} from '../service/DownLoad'
import { Button, Modal } from 'react-bootstrap';
const HomPage = () =>{
    const [show] = useState(true);
    const handDown = async() =>{
        await downFile('1720681440161.png')
    }
    return(
        <>
        <Modal show={show} >
        <Modal.Body>Bạn có muốn tải file xuống không!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handDown}>
            Đồng ý
          </Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}
export default HomPage