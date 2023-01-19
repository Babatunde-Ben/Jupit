import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assests/icons/hamburger.svg";
import { ScrollToSection } from "../utils/ScrollToSection";

const Navbar = ({ pricingSection, whySection, productSection }) => {
  let navigate = useNavigate();
  return (
    <header className="px-5 md:px-10 lg:px-20">
      <div className="flex py-6 items-center justify-between ">
        <div className="flex gap-2 items-center">
          <span className="text-light text-sm font-medium uppercase">
            underworld legion
          </span>
          <span className="bg-light text-eerie_black rounded-sm px-1 uppercase text-xs font-medium">
            open alpha
          </span>
        </div>

        <nav className="ml-auto mr-7 px-7 border-r-2 border-light text-light hidden lg:block ">
          <ul className="flex gap-x-7 flex-wrap items-center text-base justify-center ">
            <li
              onClick={() => ScrollToSection(productSection)}
              className="capitalize cursor-pointer"
            >
              product
            </li>
            <li
              onClick={() => ScrollToSection(whySection)}
              className="capitalize cursor-pointer"
            >
              why us
            </li>
            <li
              onClick={() => ScrollToSection(pricingSection)}
              className="capitalize cursor-pointer"
            >
              pricing
            </li>
            <li
              onClick={() => navigate("/timeline")}
              className="capitalize cursor-pointer"
            >
              timeline
            </li>
          </ul>
        </nav>

        <div className="items-center bg-light text-matt_black text-sm font-semibold uppercase py-1 px-2 rounded-sm hidden lg:inline-flex">
          <span className="">
            <svg
              width="28"
              height="12"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.34304 0.938001C5.43601 1.03087 5.50977 1.14116 5.56009 1.26256C5.61042 1.38396 5.63632 1.51409 5.63632 1.6455C5.63632 1.77692 5.61042 1.90704 5.56009 2.02844C5.50977 2.14984 5.43601 2.26013 5.34304 2.353C3.84247 3.85382 2.99949 5.88921 2.99949 8.0115C2.99949 10.1338 3.84247 12.1692 5.34304 13.67C5.43588 13.7629 5.50952 13.8732 5.55974 13.9946C5.60996 14.1159 5.63578 14.246 5.63574 14.3774C5.63569 14.5087 5.60977 14.6388 5.55947 14.7601C5.50916 14.8814 5.43545 14.9917 5.34254 15.0845C5.24963 15.1773 5.13934 15.251 5.01797 15.3012C4.8966 15.3514 4.76653 15.3773 4.63518 15.3772C4.50383 15.3772 4.37378 15.3512 4.25245 15.3009C4.13111 15.2506 4.02088 15.1769 3.92804 15.084C0.0220351 11.178 0.0220351 4.844 3.92804 0.938001C4.02091 0.845025 4.1312 0.771265 4.25259 0.720941C4.37399 0.670617 4.50412 0.644714 4.63554 0.644714C4.76695 0.644714 4.89708 0.670617 5.01848 0.720941C5.13987 0.771265 5.25016 0.845025 5.34304 0.938001ZM18.074 0.938001C21.98 4.845 21.98 11.178 18.074 15.084C17.8854 15.2662 17.6328 15.367 17.3706 15.3647C17.1084 15.3624 16.8576 15.2572 16.6722 15.0718C16.4868 14.8864 16.3816 14.6356 16.3794 14.3734C16.3771 14.1112 16.4779 13.8586 16.66 13.67C18.1606 12.1692 19.0036 10.1338 19.0036 8.0115C19.0036 5.88921 18.1606 3.85382 16.66 2.353C16.4724 2.16549 16.3669 1.91112 16.3668 1.64585C16.3667 1.38058 16.472 1.12614 16.6595 0.938501C16.847 0.75086 17.1014 0.645392 17.3667 0.645298C17.632 0.645205 17.8864 0.750493 18.074 0.938001ZM8.31004 3.812C8.49751 3.99953 8.60282 4.25384 8.60282 4.519C8.60282 4.78417 8.49751 5.03847 8.31004 5.226C7.94599 5.59001 7.65721 6.02217 7.46018 6.49779C7.26316 6.97341 7.16175 7.48319 7.16175 7.998C7.16175 8.51282 7.26316 9.02259 7.46018 9.49821C7.65721 9.97383 7.94599 10.406 8.31004 10.77C8.40555 10.8622 8.48173 10.9726 8.53414 11.0946C8.58655 11.2166 8.61413 11.3478 8.61529 11.4806C8.61644 11.6134 8.59114 11.7451 8.54086 11.868C8.49058 11.9909 8.41632 12.1025 8.32243 12.1964C8.22854 12.2903 8.11689 12.3645 7.99399 12.4148C7.87109 12.4651 7.73941 12.4904 7.60663 12.4893C7.47386 12.4881 7.34263 12.4605 7.22063 12.4081C7.09863 12.3557 6.98828 12.2795 6.89604 12.184C5.78586 11.0738 5.16218 9.56805 5.16218 7.998C5.16218 6.42795 5.78586 4.92221 6.89604 3.812C7.08356 3.62453 7.33787 3.51921 7.60303 3.51921C7.8682 3.51921 8.12251 3.62453 8.31004 3.812ZM15.269 3.812C16.3792 4.92221 17.0029 6.42795 17.0029 7.998C17.0029 9.56805 16.3792 11.0738 15.269 12.184C15.1762 12.2769 15.066 12.3506 14.9446 12.4009C14.8233 12.4512 14.6932 12.4772 14.5619 12.4772C14.4305 12.4773 14.3005 12.4514 14.1791 12.4012C14.0577 12.351 13.9474 12.2773 13.8545 12.1845C13.7616 12.0917 13.6879 11.9814 13.6376 11.8601C13.5873 11.7388 13.5614 11.6087 13.5613 11.4774C13.5613 11.346 13.5871 11.2159 13.6373 11.0946C13.6876 10.9732 13.7612 10.8629 13.854 10.77C14.2181 10.406 14.5069 9.97383 14.7039 9.49821C14.9009 9.02259 15.0023 8.51282 15.0023 7.998C15.0023 7.48319 14.9009 6.97341 14.7039 6.49779C14.5069 6.02217 14.2181 5.59001 13.854 5.226C13.6665 5.03836 13.5612 4.78392 13.5613 4.51865C13.5614 4.25338 13.6669 3.99901 13.8545 3.8115C14.0422 3.62399 14.2966 3.5187 14.5619 3.5188C14.8272 3.51889 15.0815 3.62436 15.269 3.812ZM11.082 6.582C11.279 6.582 11.4741 6.6208 11.6561 6.69618C11.838 6.77156 12.0034 6.88205 12.1427 7.02134C12.282 7.16063 12.3925 7.32599 12.4679 7.50798C12.5432 7.68996 12.582 7.88502 12.582 8.082C12.582 8.27898 12.5432 8.47404 12.4679 8.65603C12.3925 8.83801 12.282 9.00337 12.1427 9.14266C12.0034 9.28195 11.838 9.39244 11.6561 9.46782C11.4741 9.5432 11.279 9.582 11.082 9.582C10.6842 9.582 10.3027 9.42397 10.0214 9.14266C9.74007 8.86136 9.58204 8.47983 9.58204 8.082C9.58204 7.68418 9.74007 7.30264 10.0214 7.02134C10.3027 6.74004 10.6842 6.582 11.082 6.582Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="mr-5">on going raids</span>
          <span className="">234</span>
        </div>
        <Hamburger className="w-5 cursor-pointer lg:hidden" />
      </div>
    </header>
  );
};

export default Navbar;