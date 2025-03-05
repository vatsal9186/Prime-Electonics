/* eslint-disable react/prop-types */
// import { all_prod } from "../../../assets/product";

// const ProductCard = ({ product }) => {
//     return (
//       <div className="product-card">
//         <img src={product.image} alt={product.name} className="product-image" />
//         <h3 className="product-name">{product.name}</h3>
//         <p className="product-category">{product.category}</p>
//         <p className="product-specs">{product.specs}</p>
//         <p className="product-price">{product.price}</p>
//         <button className="add-to-cart">ADD TO CART</button>
//       </div>
//     );
//   };

// function Laptop(){
//     return(
//         <>
//             <div>
//                 <div className="product-grid">
//                     {all_prod.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                     ))}
//                 </div>
//                 <div className="pagination">
//                     <button className="prev-button disabled" disabled>1</button>
//                     <button className="next-button">2</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Laptop;  


import { all_prod } from "../../../assets/product";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img 
                src={product.image || "fallback-image.png"} 
                alt={product.name || "No Name"} 
                className="product-image" 
            />
            <h3 className="product-name">{product.name || "Unknown Product"}</h3>
            <p className="product-category">{product.category || "N/A"}</p>
            <p className="product-specs">{product.specs || "No specifications available"}</p>
            <p className="product-price">{product.price || "Price not available"}</p>
            <button className="add-to-cart">ADD TO CART</button>
        </div>
    );
};

function Laptop() {
    return (
        <div>
            <div className="product-grid">
                {all_prod
                    .filter(product => product.category)  // Filter out non-laptop products
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="pagination">
                <button className="prev-button disabled" disabled>1</button>
                <button className="next-button">2</button>
            </div>
        </div>
    );
}

export default Laptop;
