const Header = () => {
    return (
        <header>
            <nav className="flex flex-row bg-black px-32">
                <div className="flex-1 flex flex-row justify-between items-center h-56">
                    <a href="#" className="text-white text-2xl font-bold p-4">Library</a>
                    <a href="/books" className="text-white text-xl font-bold p-4">Books</a>
                </div>
            </nav>
        </header>
    );
}
export default Header;