import { Button } from "@/components/ui/button";
import HeaderNavLink from "./HeaderNavLink";
import { AlignRight, X } from "lucide-react";

function Header() {
  return (
    <header data-navbar="wrapper" className="group">
      <div className="container flex items-center justify-between px-6 py-8 mx-auto md:py-12 transition-all group-data-[overlay]:bg-secondary group-data-[overlay]:py-4">
        <div className="flex items-center justify-between flex-1 gap-8">
          <div>
            <img
              src="logo_large_white.png"
              alt="Carma"
              className="hidden w-full md:block max-w-48"
            />
            <img
              src="logo_square.png"
              alt="Carma"
              className="block md:hidden size-12 transition-all group-data-[overlay]:size-10"
            />
          </div>

          <Button
            data-navbar="toggle-button"
            className="flex xl:hidden"
            size="icon"
          >
            <AlignRight />
          </Button>
          <div
            data-navbar="expander"
            className="absolute inset-x-0 top-0 flex-1 bg-white md:bg-inherit md:static"
          >
            <div className="overflow-hidden">
              <div className="flex flex-col items-end flex-1 gap-8 shadow md:items-center md:flex-row rounded-b-2xl">
                <div className="flex justify-between w-full px-6 py-8 border-b md:hidden">
                  <img
                    src="logo_square.png"
                    alt="Carma"
                    className="block md:hidden size-10"
                  />
                  <Button
                    data-navbar="toggle-button"
                    className="flex xl:hidden"
                    size="icon"
                  >
                    <X />
                  </Button>
                </div>
                <nav>
                  <li className="flex flex-col items-end w-full gap-4 px-6 md:gap-8 md:flex-row">
                    <ul>
                      <HeaderNavLink href="/">Home</HeaderNavLink>
                    </ul>
                    <ul>
                      <HeaderNavLink href="/services">Services</HeaderNavLink>
                    </ul>
                    <ul>
                      <HeaderNavLink href="/about">About</HeaderNavLink>
                    </ul>
                    <ul>
                      <HeaderNavLink href="/contact">Contact</HeaderNavLink>
                    </ul>
                  </li>
                </nav>

                <div className="flex justify-end w-full gap-2 px-6 py-5 bg-secondary md:bg-inherit">
                  <Button variant="ghost" className="text-secondary-foreground">
                    Sign up
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="text-secondary-foreground"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
