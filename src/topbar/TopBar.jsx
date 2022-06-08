import React from 'react'
import "./topbar.css"

import logo from "../assets/images/logo.png";
import signIn from "../assets/images/single-01.png";
import cart from "../assets/images/Path.png";
import love from "../assets/images/Vector.png";
import discount from "../assets/images/Group.png";

export default function TopBar() {
  return (
    // <div className="top">
    //   <div className="top_left">
    //     <i class="fa-brands fa-facebook-f"></i>
    //   </div>
    //   <div className="top_center">c</div>
    //   <div className="top_right">r</div>
    // </div>
    <div class="header_main">
      <div class="header_mid">
        <div class="header_top_menu">
          <div class="header_top_menu_left">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Featured Product</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="header_top_menu_right">
            <ul>
              <li>
                <a href="#">Order Tracking</a>
              </li>
              <li>
                <a href="#">
                  English <i class="fa-solid fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  USD <i class="fa-solid fa-angle-down"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="header_middle_main">
          <div class="header_middile_logo">
            <img src={logo} alt="" />
          </div>
          <div class="header_middile_search">
            <div class="header_middile_search_div">
              <input type="text" placeholder="What do you want to order?" />
              <i class="fa-solid fa-magnifying-glass search_icon"></i>
              <button>Search</button>
            </div>
          </div>

          <div className="header_middile_right">
            <div class="header_middile_signIn">
              <div class="header_middile_signIn_left">
                <img src={signIn} alt="" />
              </div>
              <div class="header_middile_signIn_right">
                <span>Sign In</span>
                <span>Account</span>
              </div>
            </div>
            <div class="header_middile_love">
              <img src={cart} alt="" />
              <div class="header_middile_love_dot">1</div>
            </div>
            <div class="header_middile_cart">
              <img src={love} alt="" />
              <div class="header_middile_cart_dot">1</div>
            </div>
          </div>
        </div>

        <div class="header_main_menu">
          <div class="header_main_menu_top_category">
            <button>
              <i class="fa-solid fa-bars"></i> Top Categories{" "}
              <i class="fa-solid fa-caret-down"></i>
            </button>
          </div>
          <div class="header_main_menu_other_menu">
            <ul>
              <li>
                <a href="#">
                  Exclusive Deals <i class="fa-solid fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Smart Watches <i class="fa-solid fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="#">Call Phone</a>
              </li>
              <li>
                <a href="#">Headphone</a>
              </li>
            </ul>
          </div>
          <div class="header_main_menu_super_discount">
            <div className="header_main_menu_super_discount_flex">
              <div class="header_main_menu_super_discount_icon_left">
                <img src={discount} alt="" />
              </div>
              <div class="header_main_menu_super_discount_text">
                <span>Only this Weekend</span>
                <span>Super Discount</span>
              </div>
              <div class="header_main_menu_super_discount_icon_right">
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
