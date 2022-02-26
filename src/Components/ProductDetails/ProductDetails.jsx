import './ProductDetails.css';
import Button from '@mui/material/Button';
import star from '../../assets/images/star.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductsDetails = (props) => {

    const location = useLocation();
    let details = location.state.product;
    let [count, setCount] = useState(0);

    const handleSubQuantity = () => {
        if(count != 0) {
            count--;
            setCount(count)
        }
    }

    const handleAddQuantity = () => {
        count++;
        setCount(count)
    }

    return (
        <div className='shoeDetailsParent'>
            <div className='shoeImgParent'>
                <img className='shoeImg' src={details.url} />
            </div>
            <div className='shoeData'>
                <div className='shoeNameRaingParent'>
                    <p className='shoeName'>{details.name}</p>
                    <div className='shoeRating'>
                        <img className='starRating' src={star} />
                        <p className='rating'>&nbsp;&nbsp;{details.rating}</p>
                    </div>
                </div>
                <p className='shoeDetails'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus corporis quaerat, maiores reprehenderit aut ut fuga ipsum earum exercitationem dolorem nobis ullam nemo, porro tempore, vero deleniti? Praesentium id ut repellendus quam sunt quis atque expedita quo sed eaque eum, autem laboriosam soluta at deserunt incidunt nobis. Possimus, commodi velit!</p>
                <p className='shoePrice'>{details.price}</p>
                <p className='shoeDelivery'>Delivery By:- {details.deliveryBy}</p>
                <p className='shoeQuantity'>Qty</p>
                <div className='noOfquantity'>
                    <RemoveIcon className='quantity'  onClick={handleSubQuantity}/>
                    <p className='countQuantity'>{count}</p>
                    <AddIcon className='quantity'  onClick={handleAddQuantity}/>
                </div>
                <Button className='addBtn' variant="contained">Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductsDetails;