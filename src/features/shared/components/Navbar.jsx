import React, { useState } from 'react';

const Navbar = ({ searchQuery = "", setSearchQuery = () => {}, cartItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // carrito desplegable

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/products' },
    { name: 'Carrito', href: '/cart' },
  ];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">Tienda Virtual (Shop Gis)</div>
       
        <div
          className={`navbar-menu ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}

          {/* Búsqueda */}
          <li className="mobile-only">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </li>

          {/* Carrito */}
          <li className="mobile-only">
            <div className="cart-container">
              <button className="cart-button" onClick={toggleCart}>
                🛒
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </button>

              {/* Carrito desplegable */}
              {isCartOpen && (
                <div className="cart-dropdown">
                  <h3>Carrito</h3>
                  {cartItems.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                  ) : (
                    <ul>
                      {cartItems.map((item, index) => (
                        <li key={index}>
                          {item.title} - ${item.price}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Total */}
                  {cartItems.length > 0 && (
                    <p>
                      <strong>
                        Total: $
                        {cartItems.reduce((acc, item) => acc + item.price, 0)}
                      </strong>
                    </p>
                  )}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
