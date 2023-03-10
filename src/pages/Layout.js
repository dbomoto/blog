import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <ul className="
                flex flex-row space-x-5
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
        </>
    )
}

export default Layout