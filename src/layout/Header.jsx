function Header() {
    return <nav className="teal accent-3">
        <div className="nav-wrapper">
        <a href="https://github.com/username/react-movies" className="brand-logo">React Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/username/react-movies">Repo</a></li>
        </ul>
        </div>
    </nav>
}

export { Header };