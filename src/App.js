
import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  })
  return (
    <>
      <div className="App">
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://source.unsplash.com/girl" className="card-img-top" alt="image"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
