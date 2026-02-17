import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  city?: string;
  canonical?: string;
  type?: "website" | "product" | "article";
  image?: string;
  product?: {
    name: string;
    price?: number;
    currency?: string;
    availability?: "InStock" | "OutOfStock";
    description?: string;
    sku?: string;
    brand?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  noindex?: boolean;
}

const CITIES = [
  "Минск", "Гомель", "Витебск", "Брест", "Гродно", "Могилёв",
  "Барановичи", "Бобруйск", "Борисов", "Пинск", "Орша", "Молодечно",
];

const BASE_URL = "https://electro-motors.by";
const PHONE = "+375291299245";
const PHONE_DISPLAY = "+375 (29) 129-92-45";

const SEO = ({
  title,
  description,
  keywords,
  city = "Беларусь",
  canonical,
  type = "website",
  image = "/favicon.svg",
  product,
  breadcrumbs,
  noindex = false,
}: SEOProps) => {
  const fullTitle = `${title} | Electro Motors`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  const cityKeywords = CITIES.map(c => `электровелосипед ${c}`).join(", ");

  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description || description,
        brand: { "@type": "Brand", name: product.brand || "Electro Motors" },
        sku: product.sku,
        offers: {
          "@type": "Offer",
          priceCurrency: product.currency || "BYN",
          price: product.price,
          availability: `https://schema.org/${product.availability || "InStock"}`,
          seller: {
            "@type": "Organization",
            name: "Electro Motors",
            telephone: PHONE,
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Республика Беларусь",
          },
        },
        image: fullImage,
      }
    : null;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Electro Motors",
    image: fullImage,
    telephone: PHONE,
    url: BASE_URL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BY",
      addressLocality: city !== "Беларусь" ? city : "Минск",
      addressRegion: city !== "Беларусь" ? city : "Минская область",
    },
    areaServed: CITIES.map(c => ({ "@type": "City", name: c })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    hasMap: `https://maps.google.com/?q=Electro+Motors+${city}`,
  };

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: BASE_URL },
          ...breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: b.name,
            item: `${BASE_URL}${b.url}`,
          })),
        ],
      }
    : null;

  return (
    <Helmet>
      <html lang="ru" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && (
        <meta name="keywords" content={`${keywords}, ${cityKeywords}`} />
      )}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      )}
      <link rel="canonical" href={canonicalUrl} />

      <meta name="geo.region" content="BY" />
      <meta name="geo.placename" content={city} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type === "product" ? "product" : "website"} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Electro Motors" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
export { CITIES, PHONE, PHONE_DISPLAY, BASE_URL };
