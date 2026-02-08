import { Link, useParams } from "react-router-dom";
import { blog_content as articles } from "./components/blog_content";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import arrowback from "./../assets/material-symbols_arrow-back-rounded.svg";
import NotFound from "./components/NotFound";
import background from "./../assets/rectangle.svg";

const Article = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = articles.find((art) => String(art.id) === String(id));

  if (!article) return <NotFound />;

  const firstParagraph =
    article.block?.find((b) => b.type === "p")?.text ||
    "Read our latest article on brand strategy and marketing insights.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title || "Article",
    description: firstParagraph.substring(0, 160),
    author: {
      "@type": "Organization",
      name: "Cravue",
    },
    datePublished: "2025-03-11",
    image: article.image || "https://crauve.org/src/assets/logo.svg",
    publisher: {
      "@type": "Organization",
      name: "Cravue",
      logo: {
        "@type": "ImageObject",
        url: "https://crauve.org/src/assets/logo.svg",
      },
    },
  };

  return (
    <div className={"article-page " + `number${id}`}>
      <Helmet>
        <title>
          {article.title
            ? `${article.title} | CRAVUE Blog`
            : "Article | CRAVUE"}
        </title>
        <meta name="description" content={firstParagraph.substring(0, 160)} />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={firstParagraph.substring(0, 160)}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://crauve.org/blog/${id}`} />
        <meta property="article:published_time" content="2025-03-11" />
        <meta property="article:author" content="Cravue" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta
          name="twitter:description"
          content={firstParagraph.substring(0, 160)}
        />
        <link rel="canonical" href={`https://crauve.org/blog/${id}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <button
        onClick={() => {
          navigate("/blog");
        }}
      >
        <img src={arrowback} alt="Arrow Back" />
        Go Back
      </button>
      <div className="info">
        <span className="title sm">{article.type}</span>
        <span className="title sm">March 11, 2025</span>
      </div>
      <div className="bg">
        <img src={background} alt="" className="background" />{" "}
        <img src={background} alt="" className="background" />{" "}
        <img src={background} alt="" className="background" />{" "}
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
