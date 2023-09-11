import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import Link from 'next/link';

const ProductCard = (props) => {
    let { image, price, title, id} = props.data;
    const { addItem } = useCart();
    const theme = false;
    const addToCart = () => addItem(props.data);
    
    return (
        <Card
            className={`
            w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto
            ${theme? 'bg-light-black text-light':'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <Link href={`/product/details/${id}`}>
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '8rem'}}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {title}
                </Card.Title>
                <Card.Title>
                    R$ <span className="h3">{price}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className={`${theme? 'bg-light-primary text-black':'bg-primary' } d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="1.8rem" />
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;