import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Comments from './pages/Comments'


const comments = () => {
    
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/> 
            <Route exact path='/comments/:user_name' element={<Comments/>} />
        </Routes>)
    
}


export default comments