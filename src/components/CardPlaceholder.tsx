import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";

export default function CardPlaceholder({items=10}) {
  return (
    <Row className={'mt-5 pt-4'}>
      {Array.from(Array(items).keys()).map((e)=>(
        <Col xs={6} md={3} lg={2} key={e} className={'mb-1'}>
            <Card>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={12} style={{ height: "8rem", width: "100%" }} />
            </Placeholder>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} />
                  <Placeholder xs={4} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={6} />
                  <Placeholder.Button className={'ml-2 btn-sm p-0'} variant="primary" xs={6} />
                </Placeholder>
            </Card.Body>
            </Card>
        </Col>
        ))}
    </Row>
  );
}
