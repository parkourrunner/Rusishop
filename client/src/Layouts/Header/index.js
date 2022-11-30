import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
function Header() {
  return (
    <>
      <header className="top-header-bar-container w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="top-header-bar">
                <li className="top-email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  admin@rusishop.com
                </li>
                <li className="top-account">
                  <Link to="/">
                    <FontAwesomeIcon icon={faUser} />
                    حساب کاربری
                  </Link>
                </li>
                <li className="top-search">
                  <form
                    role="search"
                    method="get"
                    class="pull-right searchform-topbar"
                    action="https://www.rusishop.com/"
                  >
                    <label>
                      <input
                        class="search-field-top-bar"
                        placeholder="جستجو کنید..."
                        value=""
                        name="s"
                        type="search"
                      />
                    </label>
                    <button
                      id="search-top-bar-submit"
                      type="submit"
                      class="search-top-bar-submit"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <header className="site-header">
        <div className="site-branding container">
          <div className="row">
            <div className="col-sm-4 header-logo">
              <div className="site-title-description">
                <Link className="site-title" to="/">
                  روسی شاپ
                </Link>
                <p className="site-description">
                  نخستین فروشگاه محصولات آموزشی زبان روسی
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="sf-menu">
                  <li className="dropdown">
                    <Link
                      to="/"
                      title="کتاب"
                      class="dropdown-toggle"
                      aria-haspopup="true"
                    >
                      کتاب
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to="/"
                          title="کتاب های فارسی"
                          aria-haspopup="true"
                        >
                          کتاب های فارسی
                        </Link>
                      </li>
                      <li>
                        <Link to="/" title="کتاب های روسی" aria-haspopup="true">
                          کتاب های روسی
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          title="کتاب های روسی-فارسی"
                          aria-haspopup="true"
                        >
                          کتاب های روسی-فارسی
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          title="کتاب های ترجمه شده"
                          aria-haspopup="true"
                        >
                          کتاب های ترجمه شده
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="/"
                      title="ابزار کمک آموزشی"
                      class="dropdown-toggle"
                      aria-haspopup="true"
                    >
                      ابزار کمک آموزشی
                    </Link>
                    <ul>
                      <li>
                        <Link to="/" title="فلش کارت" aria-haspopup="true">
                          فلش کارت
                        </Link>
                      </li>
                      <li>
                        <Link to="/" title="برچسب کیبورد" aria-haspopup="true">
                          برچسب کیبورد
                        </Link>
                      </li>
                      <li>
                        <Link to="/" title="پلاکارد" aria-haspopup="true">
                          پلاکارد
                        </Link>
                      </li>
                      <li>
                        <Link to="/" title="سی دی آموزشی" aria-haspopup="true">
                          سی دی آموزشی
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="/"
                      title="بسته های فرهنگی"
                      class="dropdown-toggle"
                      aria-haspopup="true"
                    >
                      بسته های فرهنگی
                    </Link>
                    <ul>
                      <li>
                        <Link to="/" title="پاکت پول" aria-haspopup="true">
                          پاکت پول
                        </Link>
                      </li>
                      <li>
                        <Link to="/" title="کارت پستال" aria-haspopup="true">
                          کارت پستال
                        </Link>
                      </li>
                      <li>
                        <Link to="/" title="مگنت" aria-haspopup="true">
                          مگنت
                        </Link>
                      </li>
                      <li>
                        <Link to="/" title="ساک دستی" aria-haspopup="true">
                          ساک دستی
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <Link to="/" title="فرهنگ ها" class="">
                      فرهنگ ها
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/" title="دوره های آموزش آنلاین" class="">
                      دوره های آموزش آنلاین
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/" title="سبد خرید" class="">
                      سبد خرید
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
