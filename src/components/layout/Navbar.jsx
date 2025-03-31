import React from "react";
import { NavItems } from "../../data/Constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const extendedLetterLenghts = [0, 7, 6, 6, 4];
  return (
    <ul className="flex items-center gap-x-5 max-lg:hidden">
      {NavItems.map((item, index) => {
        const dashes = "ـ".repeat(extendedLetterLenghts[index]);
        return (
          <li key={index}>
            <Link
              to={item.href}
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
