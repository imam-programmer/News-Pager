import React, { useContext } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router";

const Footer = () => {
  const { category, setCategory, categories } = useContext(ThemeContext);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleCategory = (cat) => {
    setCategory(cat);
    scrollToTop();
  };

  return (
    <footer className="bg-white dark:bg-blue-900 border-t border-gray-200 dark:border-blue-800">
 

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
          <p>
  © {new Date().getFullYear()} NewsApp. Built by{" "}
  <Link
    href="https://github.com/imam-programmer"
    target="_blank"
    rel="noreferrer"
    className="font-medium underline hover:text-blue-600 dark:hover:text-white"
  >
    Md.Imam Hassan Chowdhury
  </Link>

  .
</p>

   
        </div>
      </div>
    </footer>
  );
};

export default Footer;