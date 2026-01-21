import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Articles.css";

const dummyArticles = [
  { id: 1, title: "Laptop Review", views: 250, category: "electronics" },
  { id: 2, title: "Smartphone Tips", views: 300, category: "electronics" },
  { id: 3, title: "Running Shoes", views: 100, category: "fashion" },
  {
    id: 4,
    title: "Washing Machine Guide",
    views: 150,
    category: "electronics",
  },
];

function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");
  const sortByViews = searchParams.get("sortByViews");
  const category = searchParams.get("category");
  let filterArticle = dummyArticles;

  // gender and computer example frm url
  const handleSearch = () => {
    setSearchParams({
      sortByViews: "true",
      category: "electronics",
    });
  };

  if (category) {
    filterArticle = filterArticle.filter((item) => item.category === category);
  }

  if (sortByViews === "true") {
    filterArticle = filterArticle.sort((a, b) => a.views - b.views);
  }

  return (
    <div>
      <h1>Articles</h1>
      <h3>
        SortBy : {sortBy ?? (sortByViews === "true" ? "viwes" : "none")} Category :
        {category ?? "All"}
      </h3>
      {filterArticle.map((artical) => (
        <ul className="articles_list" key={artical.key}>
          <li>Title : {artical.title}</li>
          <li>Viewes :{artical.views}</li>
          <li>Category :{artical.category}</li>
        </ul>
      ))}

      <button onClick={handleSearch}> set views </button>
    </div>
  );
}

export default Articles;
