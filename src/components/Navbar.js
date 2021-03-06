import React from 'react'

const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Expense Journal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">Accounts</a>
                        <a className="nav-item nav-link" href="#">Categories</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar