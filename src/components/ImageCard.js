import React from 'react'

const ImageCard = ({ image }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
        <img src={image.webformatURL} className="card-img-top" alt="image"/>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"> photo by: {image.user}</p>
        <p className="card-text"> Views: {image.views}</p>
        <p className="card-text"> Downloads: {image.downloads}</p>
        <p className="card-text"> Likes: {image.likes}</p>
        <p className="card-text"> Comments: {image.comments}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default ImageCard
