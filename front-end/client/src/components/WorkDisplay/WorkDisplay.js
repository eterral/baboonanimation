import React from "react";

import WorkCard from "../WorkCard/WorkCard";

import { useTransition, animated } from "react-spring";

export default function WorkDisplay({ filteredItems, setSort }) {
  const transition = useTransition(filteredItems, {
    from: { opacity: 0, transform: "translate3d (0, 800px, 0)" },
    enter: { opacity: 1, transform: "translate3d (0, 0px, 0)" },
    leave: { opacity: 0, transform: "translate3d (0, 800px, 0)" },
    trail: 100,
    reset: true,
    order: ["leave", "enter", "update"],
  });

  const handleFeatures = (e) => {
    setSort("features");
  };
  const handleSeries = (e) => {
    setSort("series");
  };
  const handleOriginals = (e) => {
    setSort("originals");
  };
  const handleVoice = (e) => {
    setSort("voice");
  };
  const handleBranded = (e) => {
    setSort("branded");
  };

  return (
    <div>
      <div className="work-nav">
        <ul className="work-nav-links">
          <li className="work-nav-item" onClick={(e) => handleFeatures(e)}>
            Features
          </li>
          <li className="work-nav-item" onClick={(e) => handleSeries(e)}>
            Series
          </li>
          <li className="work-nav-item" onClick={(e) => handleOriginals(e)}>
            Originals
          </li>
          <li className="work-nav-item" onClick={(e) => handleVoice(e)}>
            Voice
          </li>
          <li className="work-nav-item" onClick={(e) => handleBranded(e)}>
            Branded
          </li>
        </ul>
      </div>
      <div className="work-display-container">
        {transition((props, item) => {
          return (
            <animated.div key={item.key} style={props}>
              <WorkCard
                image={item.image}
                text={item.featuresDesc}
                id={item.key}
              />
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}
