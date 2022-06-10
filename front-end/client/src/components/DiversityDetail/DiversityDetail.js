import "../DiversityDetail/DiversityDetail.css";
import diversityData from "../../screens/Diversity/diversityData.js";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";

export default function DiversityDetail() {
  const params = useParams();
  let details = diversityData.filter((diversity) => diversity.id === params.id);
  return (
    <Layout>
      <div className="detail-container">
        <div className="detail-container-left">
          <img className="detail-image" src={details[0].image} />
          <p>{details[0].title}</p>
          <p>{details[0].createdBy}</p>
          <p>{details[0].shortText}</p>
          <p>{details[0].studio}</p>
        </div>
        <div className="detail-container-right">
          <p>{details[0].title}</p>
          <p>{details[0].description}</p>
        </div>
      </div>
    </Layout>
  );
}
