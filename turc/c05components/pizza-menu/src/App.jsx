import './App.css';
import PropTypes from 'prop-types';
import pizzaData from './data';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // Inline style:
  // const headerStyle = {
  //   color: 'red',
  //   fontSize: '48px',
  //   textTransform: 'uppercase',
  // };
  // return <h1 style={headerStyle}>Fast React Pizza Co.</h1>;
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* Using && operator */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((el) => (
            <Pizza key={el.name} pizza={el} />
          ))}
        </ul>
      )} */}

      {/* Using ternary operator */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((el) => (
              <Pizza key={el.name} pizza={el} />
            ))}
          </ul>
        </>
      ) : (
        <p>We&apos;re still working on our menu. Please come later.</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  // if (pizza.soldOut) return null;
  // const classes = pizza.soldOut ? 'pizza sold-out' : 'pizza';

  return (
    <li className={`pizza${pizza.soldOut ? ' sold-out' : ''}`}>
      <img src={pizza.photoName} alt={`Photo of ${pizza.name}`} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
      </div>
    </li>
  );
}

Pizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};

function Footer() {
  const current = new Date();
  const hour = current.getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour < hour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We&apos;re happy to welcome you between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        We&apos;re open untill {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

Order.propTypes = {
  closeHour: PropTypes.number.isRequired,
};

export default App;
