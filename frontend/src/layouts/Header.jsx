import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  // Menu data
  const menuItems = [
    {
      label: "Products",
      links: ["Analytics", "Engagement", "Security"]
    },
    {
      label: "Solutions",
      links: ["Enterprise", "Small Business", "Startups"]
    },
    {
      label: "Resources",
      links: ["Documentation", "API Reference", "Support"]
    }
  ];

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown) {
        const activeRef = dropdownRefs.current[activeDropdown];
        if (activeRef && !activeRef.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null);
  };

  // Toggle dropdown menu
  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-7 left-3 right-4 z-50 bg-white border-b border-gray-200 font-sans shadow-sm ">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 left-11">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center left-24 ">
            <a href="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-between flex-1  ">
            <div className="flex-1 flex justify-center space-x-8 gap-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                Home
              </Link>
              {menuItems.map((menu) => (
                <div
                  className="relative"
                  key={menu.label}
                  ref={(el) => (dropdownRefs.current[menu.label] = el)}
                >
                  <button
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 gap-2"
                    onClick={() => toggleDropdown(menu.label)}
                    aria-expanded={activeDropdown === menu.label}
                    aria-haspopup="true"
                  >
                    {menu.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === menu.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown */}
                  {activeDropdown === menu.label && (
                    <div className="absolute z-10 left-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg origin-top-left transition-all">
                      <div className="py-1">
                        {menu.links.map((link) => (
                          <a
                            href="#"
                            key={link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Login and Register Buttons */}
            <div className="ml-12 flex gap-4">
              <Link to="/login">
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  li
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <UserPlus className="h-4 w-7 mr-6" />
                  Register
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
