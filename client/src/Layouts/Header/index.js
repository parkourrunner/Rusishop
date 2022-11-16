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
                  class="pull-right"
                  id="searchform_topbar"
                  action="https://www.rusishop.com/"
                >
                  <label>
                    <span class="screen-reader-text"></span>
                    <input
                      class="search-field-top-bar"
                      id="search-field-top-bar"
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
  );
}

export default Header;
