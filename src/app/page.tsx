import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 style={{ animationDelay: '0.1s' }}>Cultivating a Wealthier Planet</h1>
          <p style={{ animationDelay: '0.3s' }}>
            Explore high-authority insights, breaking innovations, and actionable intelligence on sustainable living, green technology, and the global shift towards an ecologically prosperous future.
          </p>
          <div style={{ animation: 'fadeIn 1.2s ease-out', animationFillMode: 'both' }}>
            <Link href="/about" className="btn">Explore Our Mission</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '20px', marginBottom: '40px' }}>
          <h2>Latest Editorials</h2>
          <Link href="/category/sustainable-living" style={{ color: 'var(--color-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>View All →</Link>
        </div>
        
        <div className="grid-articles">
          {articles.map((article, idx) => (
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
                {article.category} • {article.date}
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
      </section>
    </div>
  );
}
