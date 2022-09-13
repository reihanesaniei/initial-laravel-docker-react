const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                     aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Admin Dashboard</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home"><i className="fa-solid fa-home font-padding" style={{
                                    display : "inline-block",
                                    padding : "0 7px"
                                }}></i>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-user font-padding"  style={{
                                    display : "inline-block",
                                    padding : "0 7px"
                                }}></i>Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-archive font-padding"  style={{
                                    display : "inline-block",
                                    padding : "0 7px"
                                }}></i>Article</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-comment font-padding"  style={{
                                    display : "inline-block",
                                    padding : "0 7px"
                                }}></i>Comments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-question font-padding"></i>Channels</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                   Dropdown
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success" type="submit" >Search </button>
                        </form>
                    </div>
                </div>
                <a className="navbar-brand" href="#">Admin Dashboard</a>
            </div>
        </nav>

    );
}
export default Navbar;
