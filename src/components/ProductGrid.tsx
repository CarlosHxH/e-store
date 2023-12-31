import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BiSolidHeart, BiHeart } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { Badge } from "react-bootstrap";
import Link from 'next/link';

const ProductGrid = ({ data }: any) => {
  const { addItem, emptyCart, getItem } = useCart()
  return (
    <Row className="p-0 m-0">
      {data.map((product: any) => (
        <Col key={product.id} xs={6} sm={6} md={4} lg={2} className="my-1 mx-0">
          <Card>
            <Card.Link className={'text-end inline border-none'} onClick={()=> emptyCart()}>
              {false?<BiSolidHeart color={'red'}/>:<BiHeart color={'red'}/>}
            </Card.Link>
            <div className="p-0 pb-1 mx-auto">
              <Link href={`/product/${product.id}`}>
                <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: "100px" }}/>
              </Link>
            </div>
            <Card.Body className="relative p-0">
              <Card.Title className="multine-ellipsis text-sm m-1" style={{fontSize:12, height:'1.8rem'}} >
                {product.title}
              </Card.Title>
              <div className="d-flex justify-content-between align-items-center p-1">
                <Card.Text className="text-muted text-sm" as={"b"} style={{fontSize:11}}>
                  {product.price.toLocaleString('pt-BR',{ style: 'currency',currency:'BRL'})}
                </Card.Text>
                <Button style={{fontSize:10}} size={'sm'} onClick={()=>addItem(product)} className="position-relative">
                  Adicionar
                  {getItem(product.id)&&
                  (<Badge pill bg={'danger'} className="position-absolute top-0 start-100 translate-middle">
                    {getItem(product.id)?.quantity||''}
                  </Badge>)}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;
