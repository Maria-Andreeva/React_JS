function Product({ name, description, price, image }) {
    return (
        <div className="content__item">
            <div className="content__item_full">
                <img className="content__img" src={image} alt={name} />
                <div className="content__item_fon">
                    <div className="button__fon">
                        <img src="../../img/basketCart.svg" alt="add to card" />Add to Cart
                    </div>
                </div>
            </div>
            <a href="./product"><h5 className="content__item_heading">{name}</h5></a>
            <a href="./product"><p className="content__item_text">{description}</p></a>
            <a href="./product"><p className="content__item_price">{price}</p></a>
        </div>
    );
}

export default Product;
