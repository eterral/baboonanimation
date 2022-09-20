import "../WorkCard/WorkCard.css";
import LazyLoad from "react-lazyload";

import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function WorkCard(props) {
  return (
    <TransitionGroup className="work-container">
      <LazyLoad>
        <CSSTransition timeout={500} classNames="work-box" key={props.id}>
          <div className="work-box">
            <img className="work-image" src={props.image} />
            <div className="work-overlay">
              <p className="overlay-text">{props.text}</p>
            </div>
          </div>
        </CSSTransition>
      </LazyLoad>
    </TransitionGroup>
  );
}
