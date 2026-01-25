import ArticleCard from "./components/ArticleCard";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CRAVUE Blog",
    description:
      "Stay informed with the latest trends, insights, and strategies to drive innovation and business growth.",
    url: "https://cravue.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Cravue",
      logo: {
        "@type": "ImageObject",
        url: "https://cravue.com/src/assets/logo.png",
      },
    },
  };

  return (
    <div className="blog">
      <Helmet>
        <title>Blog | CRAVUE - Creative Insights & Marketing Strategies</title>
        <meta
          name="description"
          content="Discover latest trends, insights, and strategies for creative brand development, content marketing, and business growth."
        />
        <meta
          name="keywords"
          content="blog, marketing insights, brand strategy, content marketing, creative insights"
        />
        <meta
          property="og:title"
          content="CRAVUE Blog - Creative Insights & Strategies"
        />
        <meta
          property="og:description"
          content="Stay informed with the latest trends, insights, and strategies to drive innovation and business growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cravue.com/blog" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CRAVUE Blog" />
        <meta
          name="twitter:description"
          content="Discover latest trends and insights for brand strategy and marketing."
        />
        <link rel="canonical" href="https://cravue.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <p className="title">Blog</p>
      <h1>Unlock Insights with Us</h1>
      <p>
        Stay informed with the latest trends, insights, and strategies to drive
        innovation and business growth.
      </p>
      <ArticleCard />
    </div>
  );
};

export default Blog;
