import "../Work/Work.css";
import data from "../Work/data.js";

import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import WorkCard from "../../components/WorkCard/WorkCard";

export default function Work() {
  const allWorks = data;
  const [style, setStyle] = useState({ display: "none" });
  const [displayWork, setDisplayWork] = useState(
    allWorks.filter((work) => work.features === "true")
  );
  const [features, setFeatures] = useState(true);
  const [series, setSeries] = useState(false);
  const [originals, setOriginals] = useState(false);
  const [voice, setVoice] = useState(false);
  const [branded, setBranded] = useState(false);

  const handleFeatures = (e) => {
    setFeatures(true);
    setSeries(false);
    setOriginals(false);
    setVoice(false);
    setBranded(false);
    setDisplayWork(allWorks.filter((work) => work.features === "true"));
  };
  const handleSeries = (e) => {
    setFeatures(false);
    setSeries(true);
    setOriginals(false);
    setVoice(false);
    setBranded(false);
    setDisplayWork(allWorks.filter((work) => work.series === "true"));
  };
  const handleOriginals = (e) => {
    setFeatures(false);
    setSeries(false);
    setOriginals(true);
    setVoice(false);
    setBranded(false);
    setDisplayWork(allWorks.filter((work) => work.originals === "true"));
  };
  const handleVoice = (e) => {
    setFeatures(false);
    setSeries(false);
    setOriginals(false);
    setVoice(true);
    setBranded(false);
    setDisplayWork(allWorks.filter((work) => work.voice === "true"));
  };
  const handleBranded = (e) => {
    setFeatures(false);
    setSeries(false);
    setOriginals(false);
    setVoice(false);
    setBranded(true);
    setDisplayWork(allWorks.filter((work) => work.branded === "true"));
  };
  return (
    <Layout>
      <div>
        <h2>Our Work</h2>
        <p className="work-desc">
          We have done a variey of work on a wide range of titles. We primarly
          provide directing, writing and voice services. three lines of text
          here.. writing full sentences. three lines populated here
        </p>
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
          {displayWork.map((work) => {
            if (features) {
              return (
                <WorkCard
                  image={work.image}
                  text={work.featuresDesc}
                  id={work.id}
                />
              );
            } else if (series) {
              return (
                <WorkCard
                  image={work.image}
                  text={work.seriesDesc}
                  id={work.id}
                />
              );
            } else if (originals) {
              return <WorkCard image={work.image} text={work.originalsDesc} />;
            } else if (voice) {
              return <WorkCard image={work.image} text={work.voiceDesc} />;
            } else if (branded) {
              return <WorkCard image={work.image} text={work.brandedDesc} />;
            }
          })}
        </div>
      </div>
    </Layout>
  );
}
