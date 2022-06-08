import "../About/About.css";

import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Mike from "../../Assets/about/WEBSITE_WRITER_PHOTO_MIKE_DE_SEVE_EW_051722.png";
import Joe from "../../Assets/about/WEBSITE_HEADSHOT_Joe_Vitale.png";

export default function About() {
  const mike = [
    {
      image: Mike,
      name: "Mike de Serve",
      title: "title,title",
      bio: `Mike de Seve is an Emmy
      -
      nominated animation writer and director, working in both feature films and television. As a
      director
      -
      writer at DREAMWORKS, he served as a sequence director and story consultant on MADAGASCAR, and as
      a story consultant on several fi
      lms including SHREK 2, SHREK THE THIRD and MONSTERS VS. ALIENS. \n
      In the world of international kids' TV, Mike has served as Head Writer/Story Editor on several series, including the
      NICK/TELETOON hit ROCKET MONKEYS, FOX Kids' VIVA PINATA and the forthcoming
      season of YFE's HEROES
      OF THE CITY. He's a contributor to many international hits including the current season of ARTHUR and the
      BOOMERANG series JELLY JAMM; and written and directed animated shows for DREAMWORKS, CARTOON
      NETWORK, NBC, NICK and DISNEY, TH
      E CW, WB. and FOX TV. \n
      Mike's other work includes directing the full 7 seasons of the original BEAVIS AND BUTT
      -
      HEAD series, for which he
      earned that show its Emmy nomination; sequence writing/directing on the Beavis and Butt
      -
      Head feature film; and
      writing
      and/or directing multiple animated SESAME STREET and SATURDAY NIGHT LIVE segments.`,
    },
    {
      image: Joe,
      name: "Joe Vitale",
      title: "Head of Series",
      bio: "Baboon’s Project Director Joe Vitale has written for such iconic properties as ANGRY BIRDS TOONS and SYLVESTER AND TWEETY and the global preschool mega-hit POCOYO.  His recent TV credits also include DISNEY JR.’s P. KING DUCKLING and SPROUT’s award-winning SUPER WINGS. Internationally, his More",
    },
  ];
  return (
    <Layout>
      <div className="about-headline">
        <h2>About Us</h2>
        <div>
          For more than two decades, Baboon Animation's team members have
          provided Emmy-winning and Oscar-nominated writing, directing, and
          voice to the most successful animation studios and networks in the
          world. Founded by DREAMWORKS alumnus Mike de Seve, Baboon has grown to
          become one of the most accomplished animation writing and voicing
          teams worldwide, with 31 EMMYS collectively, and credits on dozens of
          the most popular animated films and series for families and teens
        </div>
      </div>
      <h2>Our Team</h2>
      <div className="about-container">
        {mike.map((employee) => {
          return <Card employee={employee} />;
        })}
      </div>
    </Layout>
  );
}
