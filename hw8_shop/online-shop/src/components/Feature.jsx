import delivery from "../assets/img/delivery.svg";
import sales from "../assets/img/sales_discounts.svg";
import quality from "../assets/img/quality_assurance.svg";
import './Feature.css'

const Feature = () => {
    
    return (
        <section className="feature center">
            <article className="feature__block">
                <a href="#"><img src={delivery} alt="Delivery" /></a>
                <h3 className="feature__heading">Free Delivery</h3>
                <p className="feature__text">Worldwide delivery on all orders.</p>
            </article>
            <article className="feature__block">
                <a href="#"><img src={sales} alt="Sales & Discounts" /></a>
                <h3 className="feature__heading">Sales & Discounts</h3>
                <p className="feature__text">Exclusive deals and seasonal promotions.</p>
            </article>
            <article className="feature__block">
                <a href="#"><img src={quality} alt="Quality Assurance" /></a>
                <h3 className="feature__heading">Quality Assurance</h3>
                <p className="feature__text">Only the best quality for our customers.</p>
            </article>
        </section>
    )
}

export default Feature;