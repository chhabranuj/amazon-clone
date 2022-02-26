import './ProductsChild.css';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/images/star.png';

const ProductsChild = (props) => {

    const navigate = useNavigate();

    const handleProductDetails = () => {
        navigate('/productsDetails', {
            state: {
                product: props.products
            }
        })
    }

    return (
            <div key={props.products.price} className='products' onClick={handleProductDetails}>
                <img className='productImg' src={props.products.url} />
                <hr className='divider'></hr>
                <div className='productNameRaingParent'>
                    <p className='productName'>{props.products.name}</p>
                    <div className='productRating'>
                        <img className='star' src={star} />
                        <p className='rating'>&nbsp;&nbsp;{props.products.rating}</p>
                    </div>
                </div>
                <p className='productPrice'>{props.products.price}</p>
                <p className='deliveryBy'>Delivery By:- {props.products.deliveryBy}</p>
            </div>
    )
}

export default ProductsChild;