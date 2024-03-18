import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const initialItems = [
    { id: 1, name: 'Switzerland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', imageUrl: 'https://i.ibb.co/qCkd9jS/img1.jpg' },
    { id: 2, name: 'Finland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', imageUrl: 'https://i.ibb.co/jrRb11q/img2.jpg' },
    { id: 3, name: 'Iceland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', imageUrl: 'https://i.ibb.co/NSwVv8D/img3.jpg' },
    { id: 4, name: 'Australia', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', imageUrl: 'https://i.ibb.co/Bq4Q0M8/img4.jpg' },
    { id: 5, name: 'Netherland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', imageUrl: 'https://i.ibb.co/jTQfmTq/img5.jpg' },
    { id: 6, name: 'Ireland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', imageUrl: 'https://i.ibb.co/RNkk6L0/img6.jpg' }
  ];
  const [items, setItems] = useState(initialItems);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const previousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };


  const renderItems = () => {
    return items
      .slice(currentIndex, currentIndex + 5)
      .concat(items.slice(0, Math.max(0, 5 - (items.length - currentIndex))))
      .map((item, index) => (
        <div key={item.id} className={`item ${index === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${item.imageUrl})` }}>
          <div className="content">
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
            <button>See More</button>
          </div>
        </div>
      ));
  };

  return (
    <>
      <div className="container">
        <div className="slide">
        {renderItems()}
        </div>

        <div className="button">
          <button className="prev" onClick={previousSlide}><i className="fa-solid fa-arrow-left"></i></button>
          <button className="next" onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </>
  )
}

export default App

