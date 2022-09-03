import React from 'react';
import {useRouter} from 'next/router'
const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h1>This is Product about detail: {productId}</h1>
        </div>
    );
};

export default ProductDetail;