import './Products.css';
import { useLocation } from 'react-router-dom';
import Shoe1 from '../../assets/images/shoe1.png';
import Shoe2 from '../../assets/images/shoe2.png';
import Shoe3 from '../../assets/images/shoe3.png';
import ProductsChild from '../ProductsChild/ProductsChild';
import { useEffect, useState } from 'react';

const Products = (props) => {

    const products = [
        {
            url: Shoe1,
            name: 'Reebok',
            rating: '4.0',
            price: '₹ 12,000',
            deliveryBy: 'Mon, 28/02/2022'
        },
        {
            url: Shoe2,
            name: 'Nike',
            rating: '3.0',
            price: '₹ 11,500',
            deliveryBy: 'Tue, 01/02/2022'
        },
        {
            url: Shoe3,
            name: 'Woodland',
            rating: '5.0',
            price: '₹ 16,800',
            deliveryBy: 'Thus, 03/02/2022'
        },
        {
            url: Shoe1,
            name: 'Nike',
            rating: '2.0',
            price: '₹ 8,000',
            deliveryBy: 'Tus, 01/02/2022'
        },
        {
            url: Shoe2,
            name: 'Sparx',
            rating: '4.0',
            price: '₹ 10,000',
            deliveryBy: 'Mon, 28/02/2022'
        },
        {
            url: Shoe3,
            name: 'Liberty',
            rating: '5.0',
            price: '₹ 10,050',
            deliveryBy: 'Wed, 02/02/2022'
        },
        {
            url: Shoe1,
            name: 'Nike',
            rating: '1.0',
            price: '₹ 5,000',
            deliveryBy: 'Sat, 05/02/2022'
        },
        {
            url: Shoe2,
            name: 'Bootworld',
            rating: '3.0',
            price: '₹ 9,000',
            deliveryBy: 'Sun, 06/02/2022'
        },
        {
            url: Shoe3,
            name: 'Sparx',
            rating: '4.0',
            price: '₹ 15,650',
            deliveryBy: 'Thu, 03/02/2022'
        },
        {
            url: Shoe1,
            name: 'Liberty',
            rating: '5.0',
            price: '₹ 13,999',
            deliveryBy: 'Mon, 07/02/2022'
        },
        {
            url: Shoe2,
            name: 'Reebok',
            rating: '3.0',
            price: '₹ 11,090',
            deliveryBy: 'Tus, 01/02/2022'
        },
        {
            url: Shoe3,
            name: 'Woodland',
            rating: '2.0',
            price: '₹ 11,050',
            deliveryBy: 'Mon, 28/02/2022'
        },
    ];

    const [count, setCount] = useState(products.length);
    const [visibleProducts, setVisibleProducts] = useState(products);

    useEffect(() => {
        let tempProducts = []
        if(props.searchText) {
            products.map(item => {
                if(item.name.toLowerCase().includes(props.searchText.toLowerCase())) {
                    tempProducts.push(item)
                }
            })
        }
        else {
            tempProducts = products;
        }
        setCount(tempProducts.length);
        setVisibleProducts(tempProducts);
    }, [props]);

    return (
        <div className='productsCountAndParent'>
            <div className='productsCount'>
                <p className='noOfProducts'>{count}</p>
                <p className='productsTitle'>&nbsp;Products</p>
            </div>
            <div className='productsParent'>
                {
                    visibleProducts.map((item, index) => {
                        return (
                            <ProductsChild key={index} products={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;