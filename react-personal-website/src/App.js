import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" style={{display: 'inline-block'}}>
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
      <div className="carousel-item active">
        <img style={{height:'25rem'}} src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
      </a>
    </div>
    <div className="container" id="aboutContainer">
      <div>
        <h1>About</h1>  
        <p>This is the section where I describe about the projects and apps that I worked on in the past</p>
      </div>
  
      <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="card-title">Projects</h5>              
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span>See more</span></button>
            </div>        
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                  <div className="row">
                      <div className="card" style={ { width : '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                          <img src="..." className="card-img-top" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                          <img src="..." className="card-img-top" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="card-title">Apps alive</h5>            
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><span>See more</span> 
              </button>
            </div>        
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                  <div className="row">
                      <div className="card" style={ { width : '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                          <img src="..." className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                          <img src="..." className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                      <div className="card" style={ { width : '18rem' }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
            </div>
      </div>
        
    </div>
    <div className="container">
        <h3>Experience working in ...</h3>
        <div className="row text-center">
            <div className="col">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/220px-Deloitte.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/220px-Deloitte.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/220px-Deloitte.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/220px-Deloitte.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/220px-Deloitte.svg.png" alt="" />
            </div>
        </div>
        <h3>Technologies known</h3>
        <div className="row  text-center">
            <div className="col">
                <i className="fa fa-empire" aria-hidden="true"></i>
                <i className="fa fa-empire" aria-hidden="true"></i>
                <i className="fa fa-empire" aria-hidden="true"></i>
                <i className="fa fa-empire" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div>
      
      <footer className="page-footer font-small blue pt-4">
      
          <div className="container-fluid text-center text-md-left">
        
      
          <div className="row">
        
      
            <div className="col-md-6 mt-md-0 mt-3">
        
      
            <h5 className="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
        
            </div>
      
        
            <hr className="clearfix w-100 d-md-none pb-3" />
        
      
            <div className="col-md-3 mb-md-0 mb-3">
        
      
            <h5 className="text-uppercase">Links</h5>
        
            <ul className="list-unstyled">
              <li>
              <a href="#!">Link 1</a>
              </li>
              <li>
              <a href="#!">Link 2</a>
              </li>
              <li>
              <a href="#!">Link 3</a>
              </li>
              <li>
              <a href="#!">Link 4</a>
              </li>
            </ul>
        
            </div>
      
        
      
            <div className="col-md-3 mb-md-0 mb-3">
        
      
            <h5 className="text-uppercase">Links</h5>
        
            <ul className="list-unstyled">
              <li>
              <a href="#!">Link 1</a>
              </li>
              <li>
              <a href="#!">Link 2</a>
              </li>
              <li>
              <a href="#!">Link 3</a>
              </li>
              <li>
              <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
      
        </div>
      
      </div>
      
        
      
      <div className="footer-copyright text-center py-3">Â© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
      </div>
      
      </footer>
      
    </div>

    </div>
  );
}

export default App;
