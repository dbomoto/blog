import { Outlet, Link } from "react-router-dom";
import Media from "./Media"

function Layout() {
    return (
        <div className="space-y-10">
            <nav className="bg-red-200 z-10">
                <input type="checkbox" id="menu" className="hidden peer"/>
                <label for="menu" className="">DBO WEBDEVe</label>
                <ul className="
                absolute bg-red-300 h-[120px] -translate-y-[120px] peer-checked:translate-y-0 transition all
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