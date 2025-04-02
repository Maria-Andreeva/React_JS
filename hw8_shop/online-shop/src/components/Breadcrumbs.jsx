import './Breadcrumbs.css'

const Breadcrumbs = () => {
    return (
        <div className="top-head center container">
          <h2 className="top-head__heading">NEW ARRIVALS</h2>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__ul">
              <li className="breadcrumbs__li">
                <a href="/" className="breadcrumbs__link">HOME</a>
              </li>
              <li className="breadcrumbs__li">
                <a href="/catalog" className="breadcrumbs__link">MEN</a>
              </li>
              <li className="breadcrumbs__li">
                <a href="/catalog" className="breadcrumbs__link">NEW ARRIVALS</a>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Breadcrumbs;