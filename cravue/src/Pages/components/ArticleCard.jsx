import { Link } from "react-router-dom";

const ArticleCard = () => {
  const articles = [
    {
      title: "The Future of CRAVUE: How It’s Changing Business Operations",
      image: 1,
      type: "Article",
    },
    {
      title: "Other Agencies vs. CRAVUE: Who Saves More Money & Time",
      image: 1,
      type: "Article",
    },
    {
      title: "How To Transform Workflow Automation For Business",
      image: 1,
      type: "Article",
    },
    {
      title: "5 Must - Have Tools To Streamline Your Business Tasks",
      image: 1,
      type: "Resources",
    },
  ];
  return (
    <div className="article">
      {articles.map((article, index) => (
        <Link key={index} to="">
          <img src={article.image} alt="" />
          <span>{article.type}</span>
          <p>{article.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ArticleCard;
