import './Search.css';
import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Products from '../Products/Products';

const Search = () => {

    const [searchClicked, setSearchClicked] = useState(false);
    const [value, setValue] = useState('');

    const handleType = (e) => {
        setValue(e.target.value);
        setSearchClicked(false);
    }

    const handleSearch = () => {
        setSearchClicked(true);
    }

    return (
        <div className='search'>
            <p className='searchTitle'>The Shoe Factory</p>
            <p className='searchDescription'>A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.</p>
            <div className='searchBar'>
                <SearchRoundedIcon className='searchIcon' />
                <input type="text" placeholder="Search here..." className='searchTextField' value={value} onChange={handleType} />
                <button type="submit" onClick={handleSearch} className='searchBtn'>Search</button>
            </div>
            <Products searchText={value} searchClicked={searchClicked} />
        </div>
    )
}

export default Search;