import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-light p-3">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              Pizza House
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="bg-light p-5 text-center">
        <div className="container">
          <h1>Neapolitan Pizza</h1>
          <p>
            If you are looking for traditional Italian pizza, the Neapolitan is
            the best option.
          </p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Our Menu</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card">
                <img
                  src="pizza1.jpg"
                  className="card-img-top"
                  alt="Margherita Pizza"
                />
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">
                    Classic Margherita with tomato sauce, mozzarella, and basil.
                  </p>
                  <button className="btn btn-primary">Buy</button>
                </div>
              </div>
            </div>
            {/* Add more pizza cards here */}
          </div>
        </div>
      </section>
      <section className="bg-dark text-light p-5">
        <div className="container">
          <h2>Book Your Table</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="service" className="form-label">
                Select a Service
              </label>
              <select className="form-select" id="service">
                <option value="dine-in">Dine-In</option>
                <option value="delivery">Delivery</option>
                <option value="takeout">Takeout</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 Pizza House</p>
      </footer>
    </div>
  );
}

export default App;
