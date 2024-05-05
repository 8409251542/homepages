import './Navbar.css'
function NavBar(){
    return(
        <>
            <header >
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li>Platform</li>
                        <li>Plans</li>
                        <li>Rntrises</li>
                        <li>Resourse</li>
                        <li>Eductaion</li>
                    </ul>
                </nav>
                <div className="btn">
                    <div className="login">
                    <p>Contact us</p>
                    <p>Login</p>
                    </div>
                    <button>SingUp</button>
                </div>
            </header>
        </>
    )
}
export default NavBar;