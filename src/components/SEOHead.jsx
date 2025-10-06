import { Helmet } from 'react-helmet-async';

export default function SEOHead() {
  const siteData = {
    title: "Ankur Surothia - Senior QA Automation Engineer",
    description: "Senior QA Automation Engineer with 12+ years of experience in test automation, API testing, and CI/CD. Expert in Selenium, Playwright, Java, Python, and modern testing frameworks.",
    keywords: "QA Engineer, Test Automation, Selenium, Playwright, Java, Python, API Testing, CI/CD, London, ISTQB Certified",
    author: "Ankur Surothia",
    url: "https://qa-mechanic.github.io/ankursurothia.portfolio",
    image: "/assets/profile.jpg"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ankur Surothia",
    "jobTitle": "Senior QA Automation Engineer",
    "description": siteData.description,
    "url": siteData.url,
    "image": siteData.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "sameAs": [
      "https://github.com/QA-Mechanic",
      "https://www.linkedin.com/in/ankur-surothia/"
    ],
    "knowsAbout": [
      "Test Automation",
      "Selenium WebDriver",
      "Playwright",
      "API Testing",
      "Java",
      "Python",
      "CI/CD",
      "Quality Assurance"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteData.title}</title>
      <meta name="title" content={siteData.title} />
      <meta name="description" content={siteData.description} />
      <meta name="keywords" content={siteData.keywords} />
      <meta name="author" content={siteData.author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteData.url} />
      <meta property="og:title" content={siteData.title} />
      <meta property="og:description" content={siteData.description} />
      <meta property="og:image" content={siteData.image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteData.url} />
      <meta property="twitter:title" content={siteData.title} />
      <meta property="twitter:description" content={siteData.description} />
      <meta property="twitter:image" content={siteData.image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#ffd423" />
      <meta name="msapplication-TileColor" content="#ffd423" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}