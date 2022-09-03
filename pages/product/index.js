import Link from 'next/link';
import React from 'react';

const productList = ({productId = 100}) => {
    return (
        <>
        <Link href='/'>Home</Link>
            <h1>This is product page</h1>
            <h2>
                <Link href='product/1'>
                    <a>product1</a>
                </Link>
            </h2>
            <h2>
                <Link href='product/2'>
                    <a>product2</a>
                </Link>
            </h2>
            <h2>
                <Link href='product/3' replace>
                    <a>product3</a>
                </Link>
            </h2>
            <h2>
                <Link href={`product/${productId}`}>
                    <a>product {productId}</a>
                </Link>
            </h2>
            {/* <p>This is Product 1</p>
            <p>This is Product 2</p>
            <p>This is Product 3</p> */}
        </>
    );
};

export default productList;