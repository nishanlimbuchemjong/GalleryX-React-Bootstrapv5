import React, { useState } from 'react';  

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
  return (
    <>
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand"><h4>GalleryX</h4></a>
                <form onSubmit={onSubmit} className="d-flex">
                <input onChange={e=> setText(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </nav> 
    </div>
    </>
  )
}

export default ImageSearch
