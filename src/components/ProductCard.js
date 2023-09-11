import React from 'react';
import { Image} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Link from 'next/link';

const ProductCard = (props) => {
    let { image, price, title, id} = props.data;
    const { addItem } = useCart();
    const addToCart = () => addItem(props.data);

    return (
        <div className="w-1/2 md:w-1/5 lg:w-1/6 my-2 mx-auto bg-light border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/product/details/${id}`}>
                <div style={{ background: 'white', height: '14rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <Image className="p-[4rem] rounded-t-lg" src={image} alt={title} />
                </div>
            </Link>
            <div className="p-3 ">
                <a href={"#"+id}>
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-light line-clamp-2">{title}</h5>
                </a>
                <div className="text-sm font-bold text-gray-900 dark:text-light"></div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-light">R${price}</span>
                    <button onClick={()=> addToCart()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;