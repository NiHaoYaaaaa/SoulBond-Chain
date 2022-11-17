/****************************************************************************
  FileName      [ SoulBond.js ]
  PackageName   [ src/Container ]
  Author        [ Cheng-Te Liu]
  Synopsis      [ The control and main page of SoulBond frontend. ]
  Copyright     [ 2022 11 ]
****************************************************************************/

import React, { useState } from "react";
import './SoulBond.css';
import Button from '@mui/material/Button';


const SoulBond = () => {
    
    return (
      <div className="soulBond" id="soulBond">
        <div className="Title">
          <div className="title_left">
            <div>Logo</div>
            <Button href="#text-buttons" id="button_soulbond">SoublBond Chain</Button>
          </div>
          <div className="title_right">
            <Button href="#text-buttons" id="About Us">About Us</Button>
            <Button href="#text-buttons" id="News">News</Button>
            <Button href="#text-buttons" id="Sign Up">Sign Up</Button>
          </div>
        </div>
        <div className="Container">
            <div className="one_left">
              <div>photo</div>
            </div>
            <div className="one_right">
              <div className="one_r_slogon">Slogan</div>
              <div className="one_r_login">
                <Button id="button_login">login</Button>
              </div>
            </div>
        </div>
        <div className="Container">
            
        </div>
        <div className="Container">
            
        </div>
        <div className="Container">
            
        </div>
        <div className="Container">
            
        </div>
        <div className="Container">
            
        </div>
      </div>
    );
};
export default SoulBond;