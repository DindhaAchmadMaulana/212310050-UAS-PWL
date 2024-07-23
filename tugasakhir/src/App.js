import React from 'react';
import './App.css';

const hampers = [
  { id: 1, title: 'Thank You', size: '21x14x5', image: '/images/image1.jpg', price: 4700 },
  { id: 2, title: 'Doddle', size: '21x14x5', image: '/images/image2.jpg', price: 4700 },
  { id: 3, title: 'Hello', size: '21x14x5', image: '/images/image3.jpg', price: 4700 },
  { id: 4, title: 'Stella Floral', size: '21x14x5', image: '/images/image4.jpg', price: 5000 },
  { id: 5, title: 'Thank You', size: '12x12x5', image: '/images/image5.jpg', price: 2700 },
  { id: 6, title: 'Doddle', size: '21x14x5', image: '/images/image6.jpg', price: 2700 },
];

const App = () => {
  const handleOrderClick = (title) => {
    const message = `Halo, saya ingin memesan Box Hampers ${title}.`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=62895411586933&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>KATANNISA</h1>
      </header>
      <div className="hampers-grid">
        {hampers.map((hamper) => (
          <div key={hamper.id} className="hamper-card">
            <img src={hamper.image} alt={hamper.title} />
            <p>Rp {hamper.price}</p>
            <p>Box Hampers {hamper.title}</p>
            <p>{hamper.size}</p>
            <button onClick={() => handleOrderClick(hamper.title)}>Pesan</button>
          </div>
        ))}
      </div>
      <footer className="App-footer">
        <p>&copy; 2024 Katannisa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;




// import React from 'react';
// import './App.css';

// const hampers = [
//   { id: 1, title: 'Thank You', size: '21x14x5', image: '/images/image1.jpg' },
//   { id: 2, title: 'Doddle', size: '21x14x5', image: '/images/image2.jpg' },
//   { id: 3, title: 'Hello', size: '21x14x5', image: '/images/image3.jpg' },
//   { id: 4, title: 'Stella Floral', size: '21x14x5', image: '/images/image4.jpg' },
//   { id: 5, title: 'Thank You', size: '12x12x5', image: '/images/image5.jpg' },
//   { id: 6, title: 'Doddle', size: '21x14x5', image: '/images/image6.jpg' },
// ];

// const App = () => {
//   const handleOrderClick = (title) => {
//     const message = `Halo, saya ingin memesan Box Hampers ${title}.`;
//     const whatsappUrl = `https://wa.me/081314131521?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>KATANNISA</h1>
//       </header>
//       <div className="hampers-grid">
//         {hampers.map((hamper) => (
//           <div key={hamper.id} className="hamper-card">
//             <img src={hamper.image} alt={hamper.title} />
//             <p>Rp 5.000</p>
//             <p>Box Hampers {hamper.title}</p>
//             <p>{hamper.size}</p>
//             <button onClick={() => handleOrderClick(hamper.title)}>Pesan</button>
//           </div>
//         ))}
//       </div>
//       <footer className="App-footer">
//         <p>&copy; 2024 Katannisa. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
