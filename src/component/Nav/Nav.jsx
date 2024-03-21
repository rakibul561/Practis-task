import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
    const [open, setOpen] = useState([])
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/products/:id', name: 'ProductDetails' },
        { id: 5, path: '/contact', name: 'Contact' }
    ];





    return (
        <nav className="text-black p-6 bg-yellow-200 ">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose className="text-4xl"></IoMdClose>
                        : <HiMenuAlt1 className='text-4xl '></HiMenuAlt1>
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16': '-top-60'}
             bg-yellow-200 px-6 ` }>
                {
                    routes.map(route => <Link key={route.id} route={route} > </Link>)
                }

            </ul>
        </nav>
    );
};

export default Nav;