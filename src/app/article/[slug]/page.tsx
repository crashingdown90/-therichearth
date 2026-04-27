import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return { title: 'Not Found' };
  return {
    title: `${article.title} | The Rich Earth`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Find related articles
  const relatedArticles = articles.filter(a => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    image: article.image ? [article.image] : [],
    datePublished: new Date(article.date).toISOString(),
    author: [{
        '@type': 'Person',
        name: article.author,
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <header style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 15px', background: 'var(--color-surface)', borderRadius: '20px', color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            {article.category}
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: 1.1 }}>{article.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', color: 'var(--color-text-muted)', marginBottom: '50px' }}>
            <span>By <strong>{article.author}</strong></span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </header>

        {article.image ? (
          <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', marginBottom: '60px', boxShadow: 'var(--shadow-soft)' }}>
            <Image 
              src={article.image} 
              alt={article.title}
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
          </div>
        ) : (
          <div style={{ position: 'relative', width: '100%', height: '100px' }}></div>
        )}

        <div className="content-block" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
          <p style={{ fontSize: '1.3rem', color: '#fff', fontStyle: 'italic', marginBottom: '40px', borderLeft: '4px solid var(--color-primary)', paddingLeft: '20px' }}>
            {article.excerpt}
          </p>
          
          <div dangerouslySetInnerHTML={{ __html: `<p>${article.content?.replace(/\n/g, '</p><p>')}</p>` }} />

          {/* AdSense In-Article Placeholder */}
          <div style={{ margin: '50px 0', padding: '30px', background: 'var(--color-surface)', border: '1px dashed var(--color-border)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
            [Advertisement Placeholder]
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Related Articles</h2>
            <div className="grid-articles">
              {relatedArticles.map((relArticle, idx) => (
                <div key={idx} className="glass-panel article-card">
                  {relArticle.image ? (
                    <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '20px', borderRadius: '12px', overflow: 'hidden' }}>
                      <Image 
                        src={relArticle.image} 
                        alt={relArticle.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        unoptimized 
                      />
                    </div>
                  ) : (
                    <div style={{ width: '100%', height: '220px', marginBottom: '20px', borderRadius: '12px', background: 'var(--color-surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Image Coming Soon</span>
                    </div>
                  )}
                  <h3 className="article-title" style={{ fontSize: '1.2rem' }}>
                    <Link href={`/article/${relArticle.slug}`}>{relArticle.title}</Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
