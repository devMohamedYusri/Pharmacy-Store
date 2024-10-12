function Details({ imageUrl, name, desc, price }) {
    return (
        <>
            <div className="flex flex-col md:flex-row pt-10">
                <img src={imageUrl} alt={name} className="w-full md:w-1/2 md:h-[20%] rounded-lg shadow-lg" />
                <div className="md:ml-5 mt-10 ">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="text-lg text-gray-700 mt-2">{desc}</p>
                    <p className="text-xl font-semibold mt-4">${price}</p>
                    <h2 className="mt-4 text-lg font-semibold">Shipping Information</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-600">
                        <li className="flex items-start space-x-2 mt-2">
                            <span className="text-2xl">🚚</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Standard Shipping</h4>
                                <p className="text-gray-600">Free shipping on orders over $50. Delivery within 5-7 business days.</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-2 mt-2">
                            <span className="text-2xl">⚡</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Express Shipping</h4>
                                <p className="text-gray-600">Get your items faster! Available for an additional fee, with delivery in 2-3 business days.</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-2 mt-2">
                            <span className="text-2xl">📦</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">Order Tracking</h4>
                                <p className="text-gray-600">Receive a tracking number once your order has shipped, so you can follow your package every step of the way.</p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-2 mt-2">
                            <span className="text-2xl">🌍</span>
                            <div>
                                <h4 className="font-semibold text-gray-800">International Shipping</h4>
                                <p className="text-gray-600">We ship worldwide! Additional fees and customs duties may apply, depending on your location.</p>
                            </div>
                        </li>    </ul>
                </div>
            </div>
        </>
    )
}

export default Details
