import { Link, useParams } from "react-router-dom";
import { blog_content as articles } from "./blog_content";
import { useNavigate } from "react-router-dom";
const Article = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = articles.find((art) => String(art.id) === String(id));

  if (!article)
    return (
      <div className="error-404">
        <span>Page Not Found</span>
        <h1>Page Isn't Available This Time</h1>
        <p>
          This page seems to be missing! Let’s get you back on track. Head back
          home.
        </p>
        <Link to="/">Go Back Home</Link>
      </div>
    );

  return (
    <div className="article-page">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <div className="info">
        <span>{article.type}</span>
        <span>March 11, 2025</span>
      </div>
      {(article.block ?? []).map((block, idx) => {
        switch (block.type) {
          case "h1":
            return <h1 key={idx}>{block.text}</h1>;
          case "h2":
            return <h2 key={idx}>{block.text}</h2>;
          case "p":
          case "p(with extra margin)":
            return <p key={idx}>{block.text}</p>;
          case "img":
            return <img key={idx} src={block.src} alt="" />;
          default:
            return <p key={idx}>{block.text}</p>;
        }
      })}
    </div>
  );
};

export default Article;
