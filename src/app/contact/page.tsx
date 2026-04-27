export default function Contact() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>
      
      <div className="content-block glass-panel" style={{ marginBottom: '100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h2>Get in Touch</h2>
          <p>
            Have a question, suggestion, or partnership inquiry? We would love to hear from you. Fill out the form, and our team will get back to you as soon as possible.
          </p>
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Email</h3>
            <p>contact@therichearth.com</p>
            
            <h3 style={{ fontSize: '1.2rem', margin: '20px 0 10px', color: 'var(--color-primary)' }}>Business Hours</h3>
            <p>Monday - Friday: 9AM - 5PM (EST)</p>
          </div>
        </div>

        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)' }}>Name</label>
              <input 
                type="text" 
                style={{ 
                  width: '100%', 
                  padding: '12px 15px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)'
                }} 
                placeholder="Your Name"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)' }}>Email</label>
              <input 
                type="email" 
                style={{ 
                  width: '100%', 
                  padding: '12px 15px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)'
                }} 
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)' }}>Message</label>
              <textarea 
                rows={5}
                style={{ 
                  width: '100%', 
                  padding: '12px 15px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  resize: 'vertical'
                }} 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="button" className="btn" style={{ alignSelf: 'flex-start' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
