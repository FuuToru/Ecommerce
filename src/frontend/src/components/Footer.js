function Footer(){
    return (
        <footer className="py-5">
        <div className="container">    
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
    
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
    
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="fa-brands fa-facebook fa-2x"></i>
                </a></li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="fa-brands fa-instagram fa-2x"></i>
                </a></li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="fa-brands fa-twitter fa-2x"></i>
                </a></li>
          </ul>
        </div>
        </div>
      </footer>
    );
}
export default Footer;