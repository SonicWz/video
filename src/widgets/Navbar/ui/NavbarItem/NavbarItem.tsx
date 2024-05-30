import { memo } from "react";
import { NavbarItemType } from "../../model/types/Navbar";
import cls from "./NavbarItem.module.scss";
import { AppLink, AppLinkTheme } from "src/shared/ui/AppLink/AppLink";
import { classNames } from "src/shared/lib/classNames/classNames";

interface NavbarItemProps {
  item: NavbarItemType;
  collapsed: boolean;
}

export const NavbarItem = memo(({ item, collapsed }: NavbarItemProps) => {
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <img src={item.Icon} className={cls.icon} />
      <span className={cls.link}>{item.text}</span>
    </AppLink>
  );
});
