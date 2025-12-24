import image from "../assets/image.png"

const Nav = () => {
    return (
         <nav className="w-full bg-[#1C6EA4]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        {/* Logo Image */}
        <img
          src={image}
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>
    </nav>
    );
};
export default Nav;