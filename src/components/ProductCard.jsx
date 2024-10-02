import { Link } from "react-router-dom";
import Button from "../design/Button";

function ProductCard({
    id,
    productImg,
    productName,
    productPrice,
    beforeDiscount,
    isDisabled,
    className
}) {
    const truncate =productName.length > 34 ? productName.slice(5, 34) + "..." : productName;
    const discount = beforeDiscount? Math.floor((1 - productPrice / beforeDiscount) * 100): 0;
    return (
        <Link to={`/product/details/${id}`} className={`border border-gray-300 p-2 ${className}`} >
            <img src={productImg} alt="product" className="w-full h-1/2 object-contain"/>
            <p className="font-semibold text-sm text-gray-800 ">{truncate}</p>
            <p className="font-semibold text-3xl text-blue-700">EGP {productPrice}</p>
            {beforeDiscount && (
                <p>
                    <span className="line-through text-gray-500"> EGP {beforeDiscount}</span>
                    <span className="text-red-500">-{discount}%</span>
                </p>
            )}
            <Button text="Add to bag" className="w-full bg-blue-500 text-white disabled:text-gray-500 disabled:bg-gray-200 disabled:cursor-not-allowed" disabled={isDisabled} />
        </Link>
    );
}

export default ProductCard;
