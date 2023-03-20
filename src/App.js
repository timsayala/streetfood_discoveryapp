import './App.css';
import Navbar from './Components/Navbar';

import Banner from './Components/Banner';
import Search from './Components/Search';
import Card from './Components/Card';
import cardData from './Components/cardData.json';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div>
   <Navbar />

   <Banner />
   
< Search/>
<div className="card-container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          description={card.description}
        />
      ))}
    </div>
    <Footer />
   </div>
  );
}

export default App;
