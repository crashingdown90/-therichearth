import Image from "next/image";

export default function Authors() {
  const authors = [
    {
      name: "Dr. Elena Vance",
      role: "Lead Eco-Agriculture Researcher",
      bio: "Dr. Vance holds a Ph.D. in Environmental Science and has over 15 years of experience in regenerative farming and sustainable land management. Her work focuses on the intersection of ancient permaculture and modern agricultural technology.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "James Chen",
      role: "Green Tech Correspondent",
      bio: "James is a former renewable energy engineer who transitioned into journalism to make complex green technologies accessible to the public. He specializes in solar, wind, and battery storage innovations.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Sarah Jenkins",
      role: "Sustainable Lifestyle Editor",
      bio: "Sarah is an advocate for zero-waste living and sustainable consumerism. She writes practical guides designed to help individuals minimize their carbon footprint without sacrificing quality of life.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Marcus Rowe",
      role: "Climate Economics Analyst",
      bio: "Marcus analyzes the financial implications of climate change and the shift to a low-carbon economy. His insights are frequently cited by environmental policymakers and green investment funds.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container">
      <div className="page-header" style={{ textAlign: 'center' }}>
        <h1>Our Authors & Experts</h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '20px auto 0', fontSize: '1.1rem' }}>
          Meet the industry experts, researchers, and journalists dedicated to bringing you highly authoritative insights on sustainable living and green technology.
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px', marginBottom: '100px' }}>
        {authors.map((author, idx) => (
          <div key={idx} className="glass-panel" style={{ textAlign: 'center' }}>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px', border: '3px solid var(--color-primary)' }}>
              <Image src={author.image} alt={author.name} width={150} height={150} style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{author.name}</h3>
            <p style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase' }}>{author.role}</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{author.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
