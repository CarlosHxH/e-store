import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BiSolidHeart, BiHeart } from "react-icons/bi";
import { useCart } from "react-use-cart";

const ProductGrid = ({ data }: any) => {
  const { addItem, items, emptyCart, getItem } = useCart()
  return (
    <Row className="p-0 m-0">
      {data.map((product: any) => (
        <Col key={product.id} xs={6} sm={6} md={3} lg={3} className="my-1 mx-0">
          <Card className="h-100">
            <Card.Link className={'text-end inline border-none'} onClick={()=> emptyCart()}>
              {false?<BiSolidHeart color={'red'}/>:<BiHeart color={'red'}/>}
            </Card.Link>
            <div className="p-1 mx-auto">
              <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: "150px" }}/>
            </div>
            <Card.Body className="relative">
              <Card.Title className="line-clamp-2 text-sm" style={{fontSize:14}}>
                {product.title}
              </Card.Title>
            </Card.Body>
            <Card.Footer className="text-center p-1">
              <div className="d-flex justify-content-between align-items-center">
                <Card.Text className="text-muted text-sm" as={"b"} style={{fontSize:12}}>
                  {product.price.toLocaleString('pt-BR',{ style: 'currency',currency:'BRL'})}
                </Card.Text>
                <Button style={{fontSize:11}} onClick={()=>addItem(product)} className="btn rounded-lg text-light bg-primary btn-sm btn-primary position-relative">
                  Adicionar
                  {getItem(product.id)&&
                  (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getItem(product.id)?.quantity||''}
                    <span className="visually-hidden">Qtd</span>
                  </span>)}
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
