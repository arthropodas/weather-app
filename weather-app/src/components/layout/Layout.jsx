import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import AppBar from "../appBar/AppBar";

// import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
     <AppBar />

  
        <Outlet/>
        <div style={{ flex: 1 }}>{children}</div> {/* Content area */}
    
    </div>
  );
};



export default Layout;