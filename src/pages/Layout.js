import { Outlet, Link } from "react-router-dom";
import Media from "./Media"

function Layout() {
    return (
        <div className="space-y-10">
            <nav>
                <ul className="
                space-y-5
                ">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/archives">ARCHIVES</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>

            <Outlet></Outlet>
            <footer>
                This is the footer
            </footer>
            <Media></Media>
        </div>
    )
}

export default Layout