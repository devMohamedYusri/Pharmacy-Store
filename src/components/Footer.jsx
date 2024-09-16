import FooterCard from "./FooterCard"

function Footer() {
    return (
        <footer className="bg-blue-700 text-white px-[4%] py-[2%]">
            <div className="flex items-center justify-center">
                <FooterCard title="FAST & FREE SHIPPING" description="Get your order delivered same day or next day according to your location in Cairo & Giza. We also offer Bloom super saver delivery within 2-3 business days in Cairo & Giza. In other locations you will receive your order within 2-7 business days." />
                <FooterCard title="DISCOUNTS & OFFERS" description="Bloom keeps running different promotions on its website and stores where you can benefit from discounts being offered on a wide variety of items. On the basis of the relevant promotion, the discount may be applied automatically or a coupon code may have to be used to avail of the discount." />
                <FooterCard title="SECURE SHOPPING" description="We use industry-standard encryption systems for potentially sensitive information, such as your name, address and other critically sensitive information like your credit / debit card details. Information passed between your computer and our website cannot be read in the event of someone else intercepting it." />
                <FooterCard title="CUSTOMER SUPPORT" description="We're here to help, so please find the most relevant way to get in touch, please contact our Customer Service by email at customersupport@bloompharmacy.com or call us on 01026562982 (from 10am to 6pm)." />
            </div>
            
        </footer>
    )
}

export default Footer
