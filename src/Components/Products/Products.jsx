import './Products.css';
import { useLocation } from 'react-router-dom';
import Shoe1 from '../../assets/images/shoe_1.png';
import Shoe2 from '../../assets/images/shoe_2.png';
import Shoe3 from '../../assets/images/shoe_3.png';
import Shoe4 from '../../assets/images/shoe_4.png';
import Shoe5 from '../../assets/images/shoe_5.png';
import ProductsChild from '../ProductsChild/ProductsChild';
import { useEffect, useState } from 'react';

const Products = (props) => {

    const products = [];

    const [count, setCount] = useState(products.length);
    const [visibleProducts, setVisibleProducts] = useState(products);
    const images = [Shoe1, Shoe2, Shoe3, Shoe4, Shoe5];

    useEffect(() => {
        fetch('https://project-amazon.herokuapp.com/getData', {
            method: 'GET'
        }).then(response => {
            response.json().then(data => {
                const productData = data.data;
                productData.map(item => {
                    item.image = images[Math.floor((Math.random()*images.length))];
                    products.push(item);
                })
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
            })
        })      
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