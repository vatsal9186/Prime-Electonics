/* eslint-disable no-unused-vars */
import p1 from './logo.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

const productList = [
  { id: 1, name: "TV", category: "Electronics" },
  { id: 2, name: "Refrigerator", category: "Appliances" },
  { id: 3, name: "Laptop", category: "Electronics" },
  { id: 4, name: "Mobile", category: "Electronics" },
  { id: 5, name: "AC", category: "Appliances" },
  { id: 6, name: "Washing Machine", category: "Appliances" },
];

function Header() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [menu , setMenu] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const results = productList.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  }, [query]);

  return (
    <>
      <header>
        <div className="header">
        <img src={p1} alt="header" className="Main_img" />
          {/* <div className="image-container">
            
          </div> */}

          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-btn">🔍</button>

            {query && (
              <div className="search-results">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="result-item"
                    >
                      {product.name}
                    </Link>
                  ))
                ) : (
                  <p className="no-results">No products found</p>
                )}
              </div>
            )}
          </div>

          <nav className="links">
            <ul className="UL">
              <li>
                <Link to="/" className="Header_links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="Header_links">
                  About
                </Link>
              </li>
              <li className="dropdown">
                <Link to="#" className="Header_links">Products</Link>
                <div className="dropdown-content">
                  <li onClick={() => {setMenu("Tv")}}><Link to="/TV">TV</Link></li>
                  <li onClick={() => {setMenu("Refrigerator")}}><Link to="/Refrigerator">Refrigerator</Link></li>
                  <li onClick={() => {setMenu("Laptops")}}><Link to="/Laptops">Laptops</Link></li>
                  <li onClick={() => {setMenu("Mobile")}}><Link to="/Mobile">Mobile</Link></li>
                  <li onClick={() => {setMenu("Ac")}}><Link to="/AC">AC</Link></li>
                  <li onClick={() => {setMenu("Washing Machine")}}><Link to="/Wash">Washing Machine</Link></li>
                </div>
              </li>
              <li>
                <Link to="/contact" className="Header_links">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="Header_links">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </header>
    </>
  );
}

export default Header;





















// import { photos } from "../../../assets/product";
// import {Link} from "react-router-dom";
// import "./Header.css";

// function Header() {
//   return (
//     <>
//       <header>
//         <div className="header">
//           <div className="image-container">
//             <img src={photos.p1} alt="header image" className="Main_img" />
            
//           </div>

//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search for products..."
//             />
//             <button className="search-btn">🔍</button>
//           </div>

//           <nav className="links">
//             <ul className="UL">
//               <li>
//                   <Link to= {'/'} className="Header_links">Home</Link>
//               </li>
//               <li>
//                 <Link to= {'/About'} className="Header_links">About</Link>
//               </li>
//               <li className="dropdown">
//                 <a href="#" className="Header_links">
//                   Products
//                 </a>
//                 <div className="dropdown-content">
//                   <a href="#">TV</a>
//                   <a href="#">Refrigerator</a>
//                   <a href="#">Laptop</a>
//                   <a href="#">Mobile</a>
//                   <a href="#">AC</a>
//                   <a href="#">Washing Machine</a>
//                 </div>
//               </li>
//               <li>
//                 <a href="#" className="Header_links">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="Header_links">
//                   Login
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;


// import { photos } from "../../../assets/product";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import "./Header.css";

// function Header() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector(".header");
//       if (window.scrollY > 50) {
//         header.classList.add("scrolled");
//       } else {
//         header.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <header>
//         <div className="header">
//           <div className="image-container">
//             <img src={photos.p1} alt="header image" className="Main_img" />
//           </div>

//           <div className="search-container">
//             <input
//               type="text"
//               className="search-bar"
//               placeholder="Search for products..."
//             />
//             <button className="search-btn">🔍</button>
//           </div>

//           <nav className="links">
//             <ul className="UL">
//               <li>
//                 <Link to="/" className="Header_links">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/About" className="Header_links">
//                   About
//                 </Link>
//               </li>
//               <li className="dropdown">
//                 <a href="#" className="Header_links">
//                   Products
//                 </a>
//                 <div className="dropdown-content">
//                   <a href="#">TV</a>
//                   <a href="#">Refrigerator</a>
//                   <a href="#">Laptop</a>
//                   <a href="#">Mobile</a>
//                   <a href="#">AC</a>
//                   <a href="#">Washing Machine</a>
//                 </div>
//               </li>
//               <li>
//                 <a href="#" className="Header_links">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="Header_links">
//                   Login
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
//       </header>
//     </>
//   );
// }

// export default Header;
