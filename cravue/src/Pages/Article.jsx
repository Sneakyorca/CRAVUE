import { Link, useParams } from "react-router-dom";
import { blog_content as articles } from "./components/blog_content";
import { useNavigate } from "react-router-dom";
import arrowback from "./../assets/material-symbols_arrow-back-rounded.svg";
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
    <div className={"article-page " + `number${id}`}>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={arrowback} alt="Arrow Back" />
        Go Back
      </button>
      <div className="info">
        <span className="title sm">{article.type}</span>
        <span className="title sm">March 11, 2025</span>
      </div>
      {(article.block ?? []).map((block, idx) => {
        switch (block.type) {
          case "h1":
            return <h1 key={idx}>{block.text}</h1>;
          case "h2":
            return <h2 key={idx}>{block.text}</h2>;
          case "h2(left)":
            return (
              <h2 key={idx} className="left">
                {block.text}
              </h2>
            );
          case "h2(left,top)":
            return (
              <h2 key={idx} className="left top">
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={idx}>{block.text}</h3>;
          case "p":
            return <p key={idx}>{block.text}</p>;
          case "p(with extra margin)":
            return (
              <p key={idx} className="extra">
                {block.text}
              </p>
            );
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
