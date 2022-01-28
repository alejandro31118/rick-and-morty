import React from 'react';
import { Modal, Button } from 'bootstrap';

const CharInfo = ({item}) => {
  return (
    <Modal.Dialog>
        <Modal.Header closeButton />
  
        <Modal.Body>
            <div className="c-modal__img text-center mb-3">
              <img className="rounded-pill" src={item.image} alt={item.name} />
            </div>
        </Modal.Body>
  
        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal.Dialog>)
};

export default CharInfo;