import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

function Footer() {
    return (
        <div>

            <Card className="text-center">
                <Card.Header>Some Social</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush" align='center'>
                        {/* <ListGroup.Item>
                            <Button variant="primary"><MDBIcon fab icon="facebook-f"  /></Button>

                        </ListGroup.Item> */}
                        <ListGroup.Item>
                            <Button variant="primary" href="https://github.com/bsairohit" target="_blank"><MDBIcon fab icon="github" /></Button></ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary"  href="https://www.linkedin.com/in/balivadasairohit/" target="_blank"><MDBIcon fab icon="linkedin" /></Button></ListGroup.Item>
                           <ListGroup.Item>
                            <Button variant="primary" href="https://www.facebook.com/profile.php?id=100002809959680" target="_blank"><MDBIcon fab icon="facebook-f"  /></Button>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary" href="https://www.instagram.com/bsairohit/" target="_blank"><MDBIcon fab icon="instagram"  /></Button>

                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Title>
                         
                    </Card.Title>
                    <Card.Text>
                        WANNA SEE SOMETHING
                    </Card.Text>
                    <Button variant="primary" href="https://bsairohit.netlify.app/" target="_blank">OLD PORTFOLIO</Button>
                </Card.Body>
                <Card.Footer className="text-muted">@CopyRights2022 BALIVADA SAI ROHIT</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer
