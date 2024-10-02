
function Details({imageUrl,name,desc,shippingInfo}) {
    const price=23.44;
    return (
        <div className="flex flex-col md:flex-row">
            <img src={imageUrl} alt={name} className="w-full md:w-1/2 md:h-[20%] rounded-lg shadow-lg " />
            <div className="md:ml-5">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-lg text-gray-700 mt-2">{desc}</p>
                <p className="text-xl font-semibold mt-4">${price.toFixed(2)}</p>
                <h2 className="mt-4 text-lg font-semibold">Shipping Information</h2>
                <p>{shippingInfo}</p>
            </div>
        </div>
    )
}

export default Details
