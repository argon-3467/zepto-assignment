import ramanImgUrl from './assets/raman.jpeg';
import franklinImgUrl from './assets/franklin.jpeg';
import edisonImgUrl from './assets/edison.jpeg';
import albertImgUrl from './assets/albert.jpeg';
import galileoImgUrl from './assets/galileo.jpeg';
import newtonImgUrl from './assets/newton.jpeg';
import teslaImgUrl from './assets/tesla.jpeg';
import curieImgUrl from './assets/curie.jpeg';

import ChipInput from './ChipInput/ChipInput';

function App() {
  const items = [
    {
      id: 1,
      img: {
        imgUrl: ramanImgUrl,
        imgAlt: 'raman',
      },
      name: 'C V Raman',
      email: 'ramancv@scientists.com',
    },
    {
      id: 2,
      img: {
        imgUrl: franklinImgUrl,
        imgAlt: 'franklin',
      },
      name: 'Rosalind Franklin',
      email: 'rfranklin@scientists.com',
    },
    {
      id: 3,
      img: {
        imgUrl: edisonImgUrl,
        imgAlt: 'edison',
      },
      name: 'Thomas Edison',
      email: 'edison@bussinessman.com',
    },
    {
      id: 6,
      img: {
        imgUrl: albertImgUrl,
        imgAlt: 'albert',
      },
      name: 'Albert Einstein',
      email: 'einstein@scientists.com',
    },
    {
      id: 7,
      img: {
        imgUrl: curieImgUrl,
        imgAlt: 'curie',
      },
      name: 'Marie Curie',
      email: 'madaamcurie@scientists.com',
    },
    {
      id: 8,
      img: {
        imgUrl: newtonImgUrl,
        imgAlt: 'newton',
      },
      name: 'Isaac Newton',
      email: 'iamnewton@scientists.com',
    },
    {
      id: 9,
      img: {
        imgUrl: galileoImgUrl,
        imgAlt: 'galileo',
      },
      name: 'Galileo Galilei',
      email: 'leolei@scientists.com',
    },
    {
      id: 10,
      img: {
        imgUrl: teslaImgUrl,
        imgAlt: 'tesla',
      },
      name: 'Nikola Tesla',
      email: 'noteslaforu@scientists.com',
    },
  ];

  return (
    <>
      <ChipInput items={items} />
    </>
  );
}

export default App;
