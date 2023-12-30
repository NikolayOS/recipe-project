import React,{useEffect,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import {getAllCategories} from '../../api'
import Preloader from '../preloader/Preloader'
import CategoryList from '../category-list/CategoryList';
import Search from '../search/Search';
import '../../../src/index.css';

const Home = () => {
  const [catalog,setCatalog] = useState([]);
  const [filteredCatalog,setFilteredCatalog] = useState([]);

  const {pathname, search} = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
    navigate({
      pathname,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(search ?
        data.categories.filter(item =>
        item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase())
        )
        : data.categories
        );
    })
  },[search])
  return (
    <>
    <Search cb={handleSearch}/>
      {!catalog.length ? <Preloader/> : <CategoryList catalog={filteredCatalog}/>}
    </>
  )
}

export default Home;