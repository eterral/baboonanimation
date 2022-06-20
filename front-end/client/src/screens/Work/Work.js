import "../Work/Work.css";
import data from "../Work/data.js";

import { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";
import WorkDisplay from "../../components/WorkDisplay/WorkDisplay";
import WorkCard from "../../components/WorkCard/WorkCard";

export default function Work() {
  const allWorks = data;
  const [items, setItems] = useState(allWorks);
  const [sort, setSort] = useState("features");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems([]);
    setFilteredItems(
      items.filter((item) => item.category.toLowerCase().includes(sort))
    );
  }, [sort]);

  return (
    <Layout>
      <div>
        <h2>Our Work</h2>
        <p className="work-desc">
          We have done a variey of work on a wide range of titles. We primarly
          provide directing, writing and voice services. three lines of text
          here.. writing full sentences. three lines populated here
        </p>
        <WorkDisplay filteredItems={filteredItems} setSort={setSort} />
      </div>
    </Layout>
  );
}
