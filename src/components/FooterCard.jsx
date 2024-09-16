
function FooterCard({ title, description }) {
    return (
        <div className="flex flex-col h-full text-white">
            <h1 className="text-md font-normal capitalize pb-4">{title}</h1>
            <p className="text-sm text-white w-5/6 leading-6 ">
                {description}
            </p>
        </div>
    );
}

export default FooterCard;
