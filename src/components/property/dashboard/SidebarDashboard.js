// @ts-nocheck
"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/auth";

const SidebarDashboard = () => {
  const pathname = usePathname();
  const { logoutUser } = useAuth();

  if (!logoutUser) {
    throw new Error(
      "AuthContext is undefined. Please ensure you are using UserProvider."
    );
  }

  const handleLogout = () => {
    logoutUser();
  };

  const sidebarItems = [
    {
      title: "Profile",
      items: [
        {
          href: "/dashboard-home",
          icon: "flaticon-discovery",
          text: "Dashboard",
        },
        {
          href: "/dashboard-my-properties",
          icon: "flaticon-home",
          text: "My Properties",
        },
        // {
        //   href: "/dashboard-my-package",
        //   icon: "flaticon-protection",
        //   text: "My Package",
        // },
        {
          href: "/dashboard-my-profile",
          icon: "flaticon-user",
          text: "My Profile",
        },
        {
          href: "#",
          icon: "flaticon-logout",
          text: "Logout",
          isLogout: true,
        },
      ],
    },
    {
      items: [],
    },
  ];

  return (
    <div className="dashboard__sidebar d-none d-lg-block">
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && (
              <p
                className={`fz15 fw400 ff-heading ${
                  sectionIndex === 0 ? "mt-0" : "mt30"
                }`}
              >
                {section.title}
              </p>
            )}
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                {item.isLogout ? (
                  <button
                    onClick={handleLogout}
                    className={`items-center ${
                      pathname === item.href ? "-is-active" : ""
                    }`}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      width: "100%",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <i className={`${item.icon} mr15`} />
                    {item.text}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`items-center ${
                      pathname === item.href ? "-is-active" : ""
                    }`}
                  >
                    <i className={`${item.icon} mr15`} />
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
