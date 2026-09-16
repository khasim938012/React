import Price from "./Price.jsx";
import "./product.css";


function Product({tittle, idx}){
    let oldPrice = ["12,000","11,111","10,000","9,999"];
    let newPrice = ["11,000","8,500","7,777","5,555"];
    let Description=[
        "8000 dpi",
        "intuitive surface",
        "Designed fo ipad",
        "wireless",
    ];

    return (
        <div className="Product">
            <p>Tittle</p>
            <p>{Description[idx]}</p>
            <price oldPrice{oldPrice[idx]} newPrice{newPrice[idx]} />
        </div>

    );
}
export default Product;