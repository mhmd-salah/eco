import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-teal-500  text-lg">
      <div className="container flex justify-between items-center">
        <h2 className="font-bold text-xl text-white">ozzx</h2>
        <ul className="flex items-center space-x-3 text-white *:py-3">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"products"}>Products</NavLink>
          <NavLink to={"posts"}>Posts</NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header