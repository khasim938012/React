import Price from "./Price.jsx";
import "./product.css";


function Product({tittle, price, featuers}){
    return (
        <div>
            <p>Tittle</p>
            <p>Discreption</p>
            <price/>
        </div>

    );
}
export default Product;