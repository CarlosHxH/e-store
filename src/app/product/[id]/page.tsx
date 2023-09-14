"use client"
import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  ButtonGroup
} from "react-bootstrap";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useCart } from "react-use-cart";

const queryClient = new QueryClient();

const CardDetails = ({ id }: any) => {

  const { isLoading, error, data }: any = useQuery("repoData", () =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((res: any) =>
      res.json()
    )
  );
  const { addItem, getItem, updateItemQuantity, removeItem, totalUniqueItems } = useCart();

  if (isLoading) return <Container>Loading...</Container>;
  if (error) return <Container>Ocorreu um erro: {error.message}</Container>;

  return (
    <Container className={'mb-4'}>
      <Row>
        <Col md={6} className={"text-center"} style={{ height: "18rem" }}>
          <Image src={data.image} alt={data.title} width={"auto"} height={"100%"}/>
        </Col>
        <Col md={6}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>
            Preço:{' '}
            {data.price.toLocaleString("pt-BR", {style: "currency",currency: "BRL"})}
          </p>

          {getItem(data.id) ? (
            <ListGroup.Item className={"d-flex justify-content-between"}>
							<ButtonGroup size={"sm"} aria-label="quantity">
                <Button variant="outline-primary px-3" onClick={() => updateItemQuantity(data.id, getItem(data.id).quantity-1)}>-</Button>
                <Button variant="primary px-3">{getItem(data.id).quantity}</Button>
                <Button variant="outline-primary px-3" onClick={() => updateItemQuantity(data.id, getItem(data.id).quantity+1)}>+</Button>
              </ButtonGroup>
              <Button variant="outline-light">{getItem(data.id).itemTotal.toLocaleString('pt-BR',{ style: 'currency',currency:'BRL'})}</Button>
              <Button variant="danger" onClick={() => removeItem(data.id)}>&times;</Button>
            </ListGroup.Item>
          ) : (
            <Button variant="primary" onClick={() => addItem(data)}>Adicionar ao Carrinho</Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default function ProductDetails(res: any) {
  const { id }: any = res?.params;
  return (
    <QueryClientProvider client={queryClient}>
      <CardDetails id={id} />
    </QueryClientProvider>
  );
}
