import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Predefined categories based on our mock data
const categories = [
  { slug: "green-tech", name: "Green Tech", description: "Discover the latest innovations and breakthroughs in environmental technology." },
  { slug: "sustainable-living", name: "Sustainable Living", description: "Practical guides and insights for reducing your footprint and living in harmony with the earth." },
  { slug: "eco-agriculture", name: "Eco-Agriculture", description: "Exploring regenerative farming, permaculture, and the future of sustainable food production." },
  { slug: "climate-action", name: "Climate Action", description: "Analysis and updates on global efforts to mitigate and adapt to climate change." }
];

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.slug);
  if (!category) return { title: 'Not Found' };
  return {
    title: `${category.name} | The Rich Earth`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  // Filter articles by category name
  const categoryArticles = articles.filter(a => a.category === category.name);

  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <header className="page-header" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{category.name}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          {category.description}
        </p>
      </header>

      <div style={{ margin: '40px 0', height: '1px', background: 'var(--color-border)' }} />

      {categoryArticles.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--color-text-muted)' }}>
          <p>No articles found in this category yet. Please check back later.</p>
        </div>
      ) : (
        <div className="grid-articles">
          {categoryArticles.map((article, idx) => (
            <div key={idx} className="glass-panel article-card">
              {article.image ? (
                <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '20px', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    style={{ objectFit: 'cover', transition: 'transform var(--transition-slow)' }} 
                    unoptimized 
                    className="article-img-hover"
                  />
                </div>
              ) : (
                <div style={{ width: '100%', height: '220px', marginBottom: '20px', borderRadius: '12px', background: 'var(--color-surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Image Coming Soon</span>
                </div>
              )}
              <div className="article-meta">
                {article.date}
              </div>
              <h3 className="article-title">
                <Link href={`/article/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--color-border)', paddingTop: '15px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>By {article.author}</span>
                <Link href={`/article/${article.slug}`} className="btn" style={{ padding: '6px 16px', fontSize: '0.75rem' }}>
                  Read
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
