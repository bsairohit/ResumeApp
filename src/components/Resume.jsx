import React from 'react'
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { saveAs } from "file-saver";

// import images from './main';

function Resume() {
    
    const saveFile = () => {
        saveAs(
          "./Rohit (1).pdf",
          "RohitResume.pdf"
        );
      };
    return (
        <div classname="row" align="center">
            
           
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src="./r1.png" className="d-block w-100 fluid" />
             
                
                
                <Card.Body>
                    
                    <Card.Title>Rohit</Card.Title>
                    <Card.Text>
                     Resume
                    </Card.Text>
                    
                    <Button variant="primary" onClick={saveFile}>Download PDF</Button>
                </Card.Body>
            </Card>
      
            
            
        </div>
    )
}

export default Resume
