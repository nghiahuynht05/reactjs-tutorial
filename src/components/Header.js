import Navigater from './Navigater';
import '../main.css';

function Header() {
    return (
        <div id="header">
            <div className="inner">
                <header>
                    <h1><a href="index.html" id="logo">Nghia Huynh</a></h1>
                    <hr />
                    <p>Wellcome to Blog</p>
                </header>
                <footer>
                    <a href="#banner" className="button circled scrolly">Start</a>
                </footer>
            </div>
            <Navigater />
        </div>
    )
}

export default Header;