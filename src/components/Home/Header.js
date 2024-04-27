function Header() {
    return(
        <header>
            <i class="fa-solid fa-bars" id="nav-icon"></i>
            <h1 className="header-title">Zwierzomble Med</h1>
            <div className="login-account">
                <a className="login-btn">Zaloguj się</a>
                <a className="register-btn">Zarejestruj się</a>
            </div>
        </header>
    );
}

export default Header