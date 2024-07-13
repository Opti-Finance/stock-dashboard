import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Carousel from './components/Carousel';
import bot1 from './assets/bot1.png';
import bot2 from './assets/bot2.png';
import bot3 from './assets/bot3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const botData = [
    {
      image: bot1,
      title: 'Slide 1',
      description: 'Cillum nulla occaecat enim velit aliquip excepteur tempor ex id reprehenderit nisi ex ea. Nulla laborum voluptate consectetur aliquip consectetur incididunt enim excepteur. Ea elit aliqua sunt tempor magna mollit labore labore dolor eu aliqua sit duis. Eiusmod duis incididunt incididunt id. Cillum sit commodo in non tempor enim minim. Dolore in veniam aute ad nostrud eiusmod. Enim enim minim ad consectetur nostrud mollit eiusmod pariatur fugiat magna incididunt sit.',
      url: 'https://example.com/1',
    },
    {
      image: bot2,
      title: 'Slide 2',
      description: 'Officia ut ullamco exercitation occaecat ex non cupidatat aute cillum pariatur ad. Quis esse sunt minim veniam adipisicing Lorem laboris velit esse. Exercitation voluptate do ut voluptate irure irure labore minim dolor incididunt aliqua consectetur Lorem. Fugiat laborum officia est esse aute laborum qui adipisicing officia reprehenderit incididunt pariatur id.',
      url: 'https://example.com/2',
    },
    {
      image: bot3,
      title: 'Slide 3',
      description: 'In amet ea aute sit consectetur nisi et adipisicing ullamco occaecat nostrud voluptate consectetur dolore. Ipsum aliqua duis aliqua incididunt ea ea aliquip dolor excepteur proident quis. Lorem labore laborum aute consequat quis Lorem esse nostrud nisi aliquip irure officia. Esse nulla labore eu aliquip excepteur nulla dolor. Aliquip eu anim consequat in do. Non ea veniam laboris sunt in eu ut aliquip laboris irure laborum et ut dolore.',
      url: 'https://example.com/3',
    },
  ];

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Main />
        <div id="models" className="flex-grow">
          <Carousel data={botData} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
