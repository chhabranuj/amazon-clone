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
        if(count != details.totalStocks) {
            count++;
            setCount(count)
        }
    }

    return (
        <div className='shoeDetailsParent'>
            <div className='shoeImgParent'>
                <img className='shoeImg' src={details.image} />
            </div>
            <div className='shoeData'>
                <div className='shoeNameRaingParent'>
                    <div className='nameAndBrand'>
                        <p className='shoeName'>{details.productName}</p>
                        <p className='shoeBrandName'>Brand Name: {details.brandName}</p>
                    </div>
                    <div className='shoeRating'>
                        <img className='starRating' src={star} />
                        <p className='rating'>&nbsp;&nbsp;4.0</p>
                    </div>
                </div>
                <p className='shoeDetails'>{details.productDescription}</p>
                <p className='shoePrice'>Original Price: <span style={{textDecoration: 'line-through', fontSize: 'large', color: '#17353D'}}>₹{details.productPrice}</span>&nbsp;&nbsp;<span>₹{details.productPrice * (100 - details.productDiscount)/100}</span></p>
                <p className='discount'>Discount: {details.productDiscount}%</p>
                <p className='variation'>{details.variationTypeOne}: {details.typeOneDetail.join(', ')}</p>
                {details.typeTwoDetail.join(',') && <p className='variation'>{details.variationTypeTwo}: {details.typeTwoDetail.join(', ')}</p>}
                <p className='shoeQuantity'>Qty &nbsp;&nbsp;<span style={{color: 'red', fontSize: 'medium'}}>[{details.totalStocks} Left in Stock]</span></p>
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