import React from "react";
import { DahaPlus, Feed, Star } from "../Icons";
import "./footer.style.scss";

export default function Footer() {
  return (
    <section className="footer">
      <div className="contentWrapper">
        <div className="menuItem">
          <Feed />
          <div>Keşfet</div>
        </div>

        <div className="dahaPlusWrapper">
          <div className="">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <DahaPlus className="plusButton" />
              </div>
            </div>
          </div>
        </div>
        <div className="menuItem">
          <Star />
          <div>Daha Cüzdan</div>
        </div>
      </div>
    </section>
  );
}
