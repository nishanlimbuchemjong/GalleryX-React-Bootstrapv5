import React from 'react';  

const ImageSearch = () => {
  return (
    <>
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">GalleryX</a>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav> 
    </div>
    </>
  )
}

export default ImageSearch
