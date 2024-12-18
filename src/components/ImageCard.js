import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={image.webformatURL} className="card-img-top" alt="image" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Photo by: {image.user}</p>
          <p className="card-text">Views: {image.views}</p>
          <p className="card-text">Downloads: {image.downloads}</p>
          <p className="card-text">Likes: {image.likes}</p>
          <p className="card-text">Comments: {image.comments}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
