import { memo, useMemo } from "react";
import cls from "./Navbar.module.scss";
import { navBarItemsList } from "../model/selectors/getNavbarItems";
import { NavbarItem } from "./NavbarItem/NavbarItem";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const itemsList = useMemo(
    () =>
      navBarItemsList.map((item) => (
        <NavbarItem item={item} collapsed={false} key={item.path} />
      )),
    [navBarItemsList]
  );

  return (
    <header className={cls.Navbar}>
      <div role="navigation" className="flex gap-5">
        {itemsList}
      </div>
    </header>
  );
});
