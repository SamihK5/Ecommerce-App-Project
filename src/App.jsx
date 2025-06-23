import React from 'react';
import ProductList from './ProductList.jsx';

function App() {

  return (
    <div className='body'>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );

function Header() {
  return <header className='header'><div className='left-group'><img src="https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-majestic-beauty-of-greek-style-marble-statues-png-image_13038732.png" className='logo'/><h1 className="webname">HERCULEAN</h1></div><h3 className='theme'>GYM AND FITNESS EQUIPMENT</h3></header>;
}

function Footer() {
  return <footer><p>&copy; 2025 HERCULEAN GYM AND FITNESS EQUIPMENT WEBSITE</p></footer>;
}
}


export default App