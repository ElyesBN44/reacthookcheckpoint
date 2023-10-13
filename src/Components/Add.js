import { Modal, Button, Form} from "react-bootstrap";
import {useState} from "react";
import Rate from "./Rate";

export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Title,setTitle]=useState("")
  const [description,setdescription]=useState("")
  const [imgUrl,setimgUrl]=useState("")
  const [rate, setrate]=useState("")
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie title</Form.Label>
        <Form.Control type="text" 
        placeholder="the movie title"
        onChange={(e)=>setTitle(e.target.value)}
        value={Title}
         />
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text"
         placeholder="the movie description" 
         onChange={(e)=>setdescription(e.target.value)}
         value={description}
         />
        <Form.Label>Poster Url</Form.Label>
        <Form.Control type="text"
         placeholder="the poster Url"
         onChange={(e)=>setimgUrl(e.target.value)}
         value={imgUrl}
         />
        <Form.Label>Movie rate</Form.Label>
        <Form.Control type="text"
         placeholder="the movie rating" 
         onChange={(e)=>setrate(e.target.value)}
         value={rate}
         />
      </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
