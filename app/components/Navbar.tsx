import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-[#1f1f2e] shadow-md fixed top-0 z-50">
            <Link to="/" className="text-2xl font-extrabold text-indigo-600">
                 AIResuma
            </Link>

            <div className="flex items-center gap-4">
                <Link
                    to="/upload"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg shadow transition duration-200"
                >
                    Upload Resume
                </Link>
                <a
                    href="https://portfolioweb-peach.vercel.app/#about"
                    className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-4 py-2 rounded-lg transition duration-200"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
