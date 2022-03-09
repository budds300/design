import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
function Cards (props){

    // return (
    //     <Card className='rounded-3' >
    //     <Row>
    //     <Col md={7}>
    //     <Card.Img className='img-fluid ' variant="" src= {props.image} />
    //     </Col>
    //     <Col md={5}>
    //     <Card.Body className='text-center d-inline'>
    //       <Card.Title> {props.title} </Card.Title>
    //       <Card.Text> {props.content}
            
    //       </Card.Text>
    //     </Card.Body>
    //     </Col>
    //     </Row>
          
    //   </Card>);
    return(
        <div className="border border-1 rounded-3" >
            <Row>
                <Col md={12} lg={6} >
                <img alt='' src={props.image} className="" height={200} width={200}  />
                </Col>
                <Col md={12} lg={6} className="pt-2">
                <h5> {props.title} </h5>
                <p style={{fontSize:"small"}} >{props.content} </p>
                </Col>
            </Row>
        </div>
    )
}

export default Cards;