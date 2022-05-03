import './TitleBar.css';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const TitleBar = () => {
    const [menu, setMenu] = useState('quickLinksParent');

    const handleShowMenuMobile = () => {
        if(menu != "quickLinksParent") {
            setMenu('quickLinksParent')
        }
        else {
            setMenu('quickLinksParent quickLinksParentShow')
        }
    }

    return (
        <div className='titleBar'>
            <div className='menuLogo'>
                <MenuRoundedIcon className='menuIcon' onClick={handleShowMenuMobile}/>
                <img className='logo' src={logo}></img>
            </div>
            <div className={menu}>
                <p className='quickLink home'>Home</p>
                <p className='quickLink'>Featured</p>
                <p className='quickLink'>Products</p>
            </div>
        </div>
    )
}

export default TitleBar;