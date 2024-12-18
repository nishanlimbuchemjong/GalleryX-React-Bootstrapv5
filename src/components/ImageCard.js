import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="col-md-4 col-sm-6 col-12 mb-4">
      <div className="card shadow-sm h-100">
        {/* Image Section */}
        <img
          src={image.webformatURL}
          className="card-img-top"
          alt="Gallery item"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        
        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title">User: <span className="text-primary">{image.user}</span></h5>
          <p className="card-text mb-2"><strong>Views:</strong> {image.views.toLocaleString()}</p>
          <p className="card-text mb-2"><strong>Downloads:</strong> {image.downloads.toLocaleString()}</p>
          <p className="card-text mb-2"><strong>Likes:</strong> {image.likes.toLocaleString()}</p>
          <p className="card-text mb-2"><strong>Comments:</strong> {image.comments.toLocaleString()}</p>
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
