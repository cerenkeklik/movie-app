import React, {useState} from 'react';
import user from '../../images/user.png'
import { useNavigate } from 'react-router-dom';
import './Header.scss'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [term, setTerm] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert('Please enter search term')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }

  return (
    <div className='header'>

      <div className='logo' onClick={() =>  navigate('/')}>
        Movie App
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  );
};

export default Header;