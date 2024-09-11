import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return (
      <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">Laravel</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">ExpressJS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <HiCheckBadge />
              <div>
                <h3 className="skills__name">MongoDB</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Backend;
