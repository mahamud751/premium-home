import mobileMenuItems from "@/data/mobileMenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

const ProSidebarContent = () => {
  const path = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <Sidebar
      width="100%"
      backgroundColor="#fff"
      className="my-custom-class"
      collapsed={isCollapsed}
      onBackdropClick={() => setIsCollapsed(true)}
    >
      <Menu>
        {mobileMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            component={
              <Link
                href={item.link}
                className={item.link === path ? "active" : ""}
                onClick={handleLinkClick}
              />
            }
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebarContent;
