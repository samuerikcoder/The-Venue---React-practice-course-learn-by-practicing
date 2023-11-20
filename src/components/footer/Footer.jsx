import { Fade } from "react-awesome-reveal";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce delay={500}>
        <div className='font_righteous footer_logo_venue'>The Venue</div>
        <div className='footer_copyright'>
          The venue 2021 all rights reserver
        </div>
      </Fade>
    </footer>
  );
};