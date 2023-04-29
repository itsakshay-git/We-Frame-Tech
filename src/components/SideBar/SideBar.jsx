import React from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import styles from './SideBar.module.css'

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <img src={require("../../assets/Home-Icons.png")} alt="Home" />,
  }, 
  {
    path: "/Invoices",
    name: "Invoices",
    icon: <img src={require("../../assets/Vector.png")} alt="Invoices" />,
  },
  {
    path: "/Customers",
    name: "Customers",
    icon: <img src={require("../../assets/Vector (1).png")} alt="Customers" />,
  },
  {
    path: "/Products",
    name: "Products",
    icon: <img src={require("../../assets/Vector (2).png")} alt="Products" />,
  },
  {
    path: "/Recurring",
    name: "Recurring",
    icon: <img src={require("../../assets/Vector (3).png")} alt="Recurring" />,
  },
  {
    path: "/Discount",
    name: "Discount",
    icon: <img src={require("../../assets/Vector (4).png")} alt="Discount" />,
  },
];


const SideBar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.maincontainer}>
      <motion.div
        animate={{
          width: isOpen ? "220px" : "45px",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar `}
      >
        <div className={styles.top_section}>
          <div className={styles.bars}>
            <FaBars onClick={toggle} />
          </div>
          <div className={styles.title}>
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={styles.logo}
              >
                <img src={require("../../assets/Logo.png")} alt="logo" />
              </motion.h1>
            )}
          </AnimatePresence>
          </div>

        </div>
        <section className={styles.routes}>
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={setIsOpen}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                />
              );
            }

            return (
              <NavLink
                to={route.path}
                key={index}
                className={styles.link}
                // activeClassName="active"
              >
                <div className={styles.icon}>{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className={styles.link_text}
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>

      {/* <main>{children}</main> */}
    </div>
  )
}

export default SideBar