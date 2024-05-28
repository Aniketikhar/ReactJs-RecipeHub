import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useTheme } from "../../contexts/Theme";

const Copyright = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode? "bg-dark text-light":""} >
      <Navbar />
      <div className="container p-5">
        <h3>Copyright Notice</h3>

        <p>
          All content included on RecipeHub, such as text, graphics, logos,
          button icons, images, audio clips, digital downloads, data
          compilations, and software, is the property of RecipeHub or its
          content suppliers and is protected by international copyright laws.
          The compilation of all content on RecipeHub is the exclusive property
          of RecipeHub and is protected by international copyright laws.
        </p>

        <p>
          You may not reproduce, distribute, modify, display, perform, prepare
          derivative works based on, repost, transmit, or otherwise use any
          content on RecipeHub without the prior express written consent of
          RecipeHub.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Copyright;
