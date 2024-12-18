import './App.css';
import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state

  const IMAGES_PER_PAGE = 60; // Number of images per page

  useEffect(() => {
    setIsLoading(true); // Show loading before fetching
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&per_page=${IMAGES_PER_PAGE}&page=${currentPage}&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);

        // Calculate total pages based on the total number of images available
        setTotalPages(Math.ceil(data.totalHits / IMAGES_PER_PAGE));
      })
      .catch((err) => console.log(err));
  }, [term, currentPage]); // Re-fetch when term or page changes

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4">
      {/* Search Component */}
      <ImageSearch searchText={(text) => setTerm(text)} />
      <br />

      {/* Conditional Rendering for Loading or No Images */}
      {!isLoading && images.length === 0 && <h1>No Images Found</h1>}
      {isLoading ? (
        <h1>Loading ........</h1>
      ) : (
        <>
          <div className="row">
            {/* Render Image Cards */}
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                {/* Previous Button */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                  </button>
                </li>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                {/* Next Button */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
