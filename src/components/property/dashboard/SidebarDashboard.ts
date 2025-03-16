"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";

const SidebarDashboard = () => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      // title: "MAIN",
      items: [
        {
          href: "/dashboard-home",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Assets Overview",
        },
        {
          href: "/buy-properties",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Buy Properties",
        },
        {
          href: "/dashboard-referal",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Referrals",
        },
        {
          href: "/transactions",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Transactions",
        },
        {
          href: "/Pending-actions",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Pending Actions",
        },
        {
          href: "/rental-income-reports",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Rental Income Reports",
        },

        {
          href: "/report",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Report",
        },
        {
          href: "/dashboard-message",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Withdrawals",
        },
        {
          href: "/my-account",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "My Account",
        },
        {
          href: "/login",
          icon: (
            <MdOutlineDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          ),
          text: "Logout",
        },
      ],
    },
  ];

  return (
    <div
      className="dashboard__sidebar d-none d-lg-block"
      style={{
        backgroundColor: "#E7F6F6",
      }}
    >
      <div className="dashboard_sidebar_list">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p
              className={`fz15 fw400 ff-heading ${
                sectionIndex === 0 ? "mt-0" : "mt30"
              }`}
            >
              {section.title}
            </p>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="sidebar_list_item">
                <Link
                  href={item.href}
                  className={`items-center   ${
                    pathname == item.href ? "-is-active" : ""
                  } `}
                >
                  {/* <i className={`${item.icon} mr15`} /> */}
                  <span className="mr15">{item.icon}</span>
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
