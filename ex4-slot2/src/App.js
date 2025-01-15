import logo from './logo.svg';
import './App.css';

function App() {

  // eslint-disable-next-line no-unused-vars
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// eslint-disable-next-line no-unused-vars

 companies.forEach(company => { console.log(company.name);  });

  const companiesAfter1987 = companies.filter(company => company.start > 1987);


  const retailCompanies = companies
  .filter(company => company.category === "Retail")
  .map(company => ({
    ...company,
    start: company.start + 1
  }));

  const sortedCompanies = companies.sort((a, b) => a.end - b.end);


return (
  <div className="App">
      <div id= "ex1" >
        <h1 id="h1" style={{}}>Hello </h1>
        <h1 id="h2" >  React</h1>
      </div>

      <div class="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 id="l1">
          This is the react logo!
        </h2>
        <h3 id="l2">(I don't know why it is here either)</h3>
        <h3 id="l3">The library for web and native user interfaces</h3>
      </div>


      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="#home" style={{}}>Home</a></li>
          <li><a href="#about">Search</a></li>
          <li><a href="#services">Contact</a></li>
          <li id="n1"><a href="#contact">Login</a></li>
        </ul>
      </nav>


      <div id="ex4">
        <h1>This is JSX</h1>
      </div>

      <div id="ex5">
       <h2>Course names </h2>
       <ul>
        <li>React</li>
        <li>ReactNative</li>
        <li>NodeJs</li>
       </ul>  
      </div>

      <div>
        <h2>1. danh sách tên công ty</h2>
        {/* Hiển thị tên công ty ở đây */}
        {companies.map((company, index) => (
          <div key={index}>
            <p>{company.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>1. danh sách công ty bất đầu sau 1897</h2>
        {/* Tên các công ty bắt đầu sau 1987 */}
        <div>
          {companiesAfter1987.map((company, index) => (
            <div key={index}>
              <p>{company.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>3. danh sách tên công ty</h2>
        
        <div>
          {retailCompanies.map((company, index) => (
            <div key={index}>
              <p>{company.name},{company.start},{company.end}</p>
            </div>
          ))}
        </div>
      </div>
      <div> 

      </div>
      <div>
        
      </div>
  </div>
);
}

export default App;
