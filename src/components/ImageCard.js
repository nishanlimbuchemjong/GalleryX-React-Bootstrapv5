import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        {/* Image Section */}
        <img src={image.webformatURL} className="card-img-top" alt="Gallery item" />
        
        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title text-black fw-bold">User: <small className="text-primary ">{image.user}</small></h5>
          <hr />
          <div className="mb-2">
            <strong>Views:</strong> {image.views.toLocaleString()}
          </div>
          <div className="mb-2">
            <strong>Downloads:</strong> {image.downloads.toLocaleString()}
          </div>
          <div className="mb-2">
            <strong>Likes:</strong> {image.likes.toLocaleString()}
          </div>
          <div className="mb-2">
            <strong>Comments:</strong> {image.comments.toLocaleString()}
          </div>
        </div>
        
        {/* Tags Section */}
        <div className="card-footer bg-light">
          <small className="text-muted">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2">
                #{tag.trim()}
              </span>
            ))}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
