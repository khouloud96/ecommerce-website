import type { RootState } from "@/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useClickAway } from "react-use";

import Logo from "../../assets/icons/logo";

type HeaderType = {
  isErrorPage?: boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = useMemo(() => ["/"], []);

  const [onTop, setOnTop] = useState(
    !(!arrayPaths.includes(router.pathname) || isErrorPage)
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  // Ferme le menu lorsque l'utilisateur clique à l'extérieur
  useClickAway(menuRef, () => setProductsMenuOpen(false));

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, [arrayPaths, isErrorPage, router.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // on click outside
  useClickAway(navRef, closeMenu);
  useClickAway(searchRef, closeSearch);

  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <div className="container">
        <Link href="/">
          <h1 className="site-logo">
            <Logo />
            ChicCloset
          </h1>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          {/* Menu "Products" avec sous-menu */}
          <div className="link-with-chevron" ref={menuRef}>
            <a
              onClick={() => setProductsMenuOpen((prev) => !prev)}
              className="products-link"
            >
              Products
            </a>
            {productsMenuOpen && (
              <div className="products-menu">
                <ul>
                  <li>
                    <Link href="/products">All collection</Link>
                  </li>
                  <li>
                    <Link href="/products/dresses">Dresses</Link>
                  </li>
                  <li>
                    <Link href="/products/sets">Sets</Link>
                  </li>
                  <li>
                    <Link href="/products/shirts">shirts</Link>
                  </li>
                  <li>
                    <Link href="/products/pants">Pants</Link>
                  </li>
                  <li>
                    <Link href="/products/cardigans-coats">
                      Cardigans & Coats
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/skirts-shorts">Skirts & Shorts</Link>
                  </li>
                  <li>
                    <Link href="/products/sweater-sweatshirt">
                      sweater & Sweatshirt
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/inspiration">Inspiration</Link>
          <Link href="/contact">Contact</Link>
          <button className="site-nav__btn">
            <p>Account</p>
          </button>
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${searchOpen ? "search-form--active" : ""}`}
          >
            <form className="search-form">
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            />
          </button>
          <Link href="/cart" legacyBehavior>
            <button className="btn-cart">
              <i className="icon-cart" />
              {cartItems.length > 0 && (
                <span className="btn-cart__count">{cartItems.length}</span>
              )}
            </button>
          </Link>
          <Link href="/login" legacyBehavior>
            <button className="site-header__btn-avatar">
              <i className="icon-avatar" />
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span />
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
