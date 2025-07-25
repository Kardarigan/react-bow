import { NavItems } from "../../data/Constants";
import { Link } from "react-router-dom";
import { Categories } from "../../data/Products";

const Navbar = () => {
  const extendedLetterLenghts = [0, 7, 6, 6, 4];
  return (
    <ul className="flex items-center gap-x-5 max-lg:hidden">
      {Categories.map((item, index) => {
        const href = '/products/' + item.label
        const dashes = "ـ".repeat(extendedLetterLenghts[index]);
        return (
          <li key={index}>
            <Link
              to={href}
              className="block border-b-4 hover:border-rose-500"
            >
              <div>
                <span>کت{dashes}اب های</span>
                <br />
                <span>{item.label}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
