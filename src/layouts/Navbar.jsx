import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!searchValue.trim()) return;

        navigate(`/search?query=${encodeURIComponent(searchValue.trim())}`);
        setSearchValue('');
    };

    return (
        <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">          
                {/* LOGO */}
                <Link to="/" className="text-2xl font-bold !text-indigo-400 tracking-tighter hover:scale-105 transition-transform">
                    YourMovie<span className="text-white">PAL</span>
                </Link>

                {/* BARRA DE BÚSQUEDA */}
                <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
                    {/* Input */}
                    <input 
                        type="text" 
                        placeholder="Search Movie..." 
                        className="w-full bg-gray-800 text-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-gray-700 transition-all placeholder-gray-500"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    
                    {/* Botón de lupa (Icono SVG) */}
                    <button 
                    type="submit" 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors"
                    >
                        <BsSearch className="w-4 h-4" />
                    </button>
                </form>

                {/* MENÚ */}
                <div className="hidden md:flex gap-4 text-sm font-medium text-gray-300">
                    <Link to="/" className="!text-indigo-400">Home</Link>
                    <Link to="/categories" className="!text-indigo-400">Categories</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;