import "../Voices/Voices.css";
import Layout from "../../components/Layout/Layout";
export default function Voices() {
  return (
    <Layout>
      <div>
        <video className="video" loop autoPlay muted controls>
          <source src="/voice/VOICE PAGE VIDEO EW 051722.mp4"></source>
        </video>
      </div>
    </Layout>
  );
}
