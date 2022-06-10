import "../Diversity/Diversity.css";
import data from "../Diversity/diversityData.js";
import Layout from "../../components/Layout/Layout";

import { Link } from "react-router-dom";

export default function Diversity() {
  return (
    <Layout>
      <div>
        <div className="diversity-banner">
          <div className="diversity-banner-left">
            <img className="diversity-talent" src="/diversity/Ellipse 7.png" />
            <h2>Top African Talent</h2>
          </div>
          <div className="diversity-headline-text">
            <p className="diversity-bold">Baboon Africa</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante
              praesent felis adipiscing nam mauris. Duis parturient vitae auctor
              elit. Faucibus malesuada risus pellentesque pulvinar. Sapien urna,
              sed in <b>More</b>
            </p>
          </div>
          <img
            className="diversity-character"
            src="/diversity/GB-ESPRESSIONS.png"
          />
        </div>
        <div className="diversity-info">
          <p className="diversity-bold">OTHER DIVERSE CONTENT</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus
            lacus viverra pharetra gravida eget faucibus turpis integer. Nulla
            at at arcu consequat gravida maecenas pellentesque. Lectus faucibus
            lorem at netus amet.
          </p>
        </div>
        <div className="diversity-images">
          {data.map((work) => {
            return (
              <Link to={`/diversity/detail/${work.id}`}>
                <img className="diversity-image" src={work.image} />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
