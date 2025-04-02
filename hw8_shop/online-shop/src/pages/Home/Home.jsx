import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import manImage from "../../assets/img/man_1blok_1.png";
import forWomen from "../../assets/img/for_women.png";
import forMen from "../../assets/img/for_men.png";
import forKids from "../../assets/img/for_kids.png";
import accessories from "../../assets/img/ACCESORIES.png";
import categoriesImage from "../../assets/img/Categories.svg";
import Subscribe from "../../components/Subscribe";
import Feature from "../../components/Feature";
import "./Home.css"

function Home() {
    const homePageProductIds = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <div className="container">
                <Header />
                <section className="top container">
                    <div className="top__block">
                        <div className="top__left_side">
                            <img className="top__img_bigMen" src={manImage} alt="big men" />
                        </div>
                        <div className="top__right_side">
                            <h1 className="top__heading">THE BRAND</h1>
                            <h2 className="top__subheading">OF LUXERIOUS <span className="top__subheading_fashion">FASHION</span></h2>
                        </div>
                    </div>
                </section>

                <section className="top__images center">
                    <a href="/catalog"><img className="top__img" src={forWomen} alt="for Women" /></a>
                    <a href="/catalog"><img className="top__img" src={forMen} alt="for Men" /></a>
                    <a href="/catalog"><img className="top__img" src={forKids} alt="for Kids" /></a>
                    <a href="/catalog"><img className="top__img_acces desktop-img-acess" src={accessories} alt="Accesories" /></a>
                    <a href="/catalog"><img className="mobile-img-acess" src={categoriesImage} alt="Mobile Image" /></a>
                </section>

                <section className="content container">
                    <div className="content__description">
                        <h3 className="content__description_heading">Featured Items</h3>
                        <p className="content__description_text">Shop for items based on what we featured this week</p>
                    </div>
                    <ProductList productIds={homePageProductIds}/>
                </section>

                <div class="btn__items">
                    <a href="/catalog"><button class="btn__item">Browse All Product</button></a>
                </div>


                <Feature />
                <Subscribe />
                <Footer />
            </div>
        </>
    );
}

export default Home;