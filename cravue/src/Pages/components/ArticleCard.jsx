import { Link } from "react-router-dom";
import { blog_content as articles } from "./blog_content";

const ArticleCard = () => {
  return (
    <div className="article-card">
      {articles.map((article) => (
        <Link
          key={article.id}
          className="article"
          to={`/article/${article.id}`}
        >
          <img src={article.image} alt="" />
          <span className="title">{article.type}</span>
          <p>{article.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ArticleCard;
