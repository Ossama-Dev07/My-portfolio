import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Tools = () => {
    return (
      <div className="skills__content">
        <h3 className="skills__title">Tools Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">GitHub</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">Postman</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">Figma</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">Docker</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">WordPress</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Tools;