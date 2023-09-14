import { useState } from "react";
import { Badge, ButtonGroup, Col, Image, ListGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCart } from "react-use-cart";
import { BiCart } from "react-icons/bi";

function CartComponent({ children }: any) {
  const [show, setShow] = useState(false);
  const handle = () => setShow(!show);
  const { items, isEmpty, cartTotal, totalItems, emptyCart, removeItem, updateItemQuantity } = useCart();

  return (
    <>
      <Button variant="primary" onClick={handle} style={{ width: '2.5rem', height: '4.5rem', position: 'fixed', top: '4.5rem', right: '0', zIndex: 999}}>
        {children}
        <BiCart/>
        {totalItems&&<Badge className={"position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger"} pill bg="danger">{totalItems}</Badge>}
      </Button>

      <Offcanvas show={show} onHide={handle} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isEmpty && <>Vazio</>}
          {!isEmpty &&
            items.map((item: any) => (
              <ListGroup key={item.id} horizontal={'xs'} className={'d-grid mb-3'}>
                <ListGroup.Item>
                    <Image className={'p-1 mr-1'} alt={item.title} src={item.image} width={36} height={36} />
                    {item.title}
                </ListGroup.Item>
                <ListGroup.Item className={'d-flex justify-content-between'}>
                    <ButtonGroup size={'sm'} aria-label="quantity" >
                        <Button variant="outline-primary" onClick={()=>updateItemQuantity(item.id,--item.quantity)}>-</Button>
                        <Button variant="primary">{item.quantity}*{item.price.toLocaleString('pt-BR',{ style: 'currency',currency:'BRL'})}</Button>
                        <Button variant="outline-primary" onClick={()=>updateItemQuantity(item.id,++item.quantity)}>+</Button>
                    </ButtonGroup>
                    <Button variant="outline">{item.itemTotal.toLocaleString('pt-BR',{ style: 'currency',currency:'BRL'})}</Button>
                    <Button variant="danger" onClick={()=>removeItem(item.id)}>&times;</Button>

                </ListGroup.Item>
              </ListGroup>
            ))}
            {!isEmpty && <ListGroup className={'mb-3'}>
                <ListGroup.Item>SubTotal: {cartTotal.toLocaleString('pt-BR',{ style: 'currency',currency:'BRL'})}</ListGroup.Item>
                <ListGroup.Item className={'d-grid gap-4'}>
                    <Button variant={"success"}>
                        Finalizar Compra
                    </Button>
                    <Button variant={"danger"} onClick={()=> emptyCart()}>
                        Esvaziar carrinho
                    </Button>
                </ListGroup.Item>
            </ListGroup>}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartComponent;
