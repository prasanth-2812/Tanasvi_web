import React from 'react';

const DatabaseSecurity = () => (
  <>
    {/* Hero Section with Background Image Overlay */}
    <section style={{
      background: `linear-gradient(rgba(35,41,70,0.85), rgba(35,41,70,0.85)), url('/img/breadcrumb.jpg') center/cover no-repeat`,
      color: '#fff',
      padding: '5rem 0 4rem 0',
      textAlign: 'center',
      position: 'relative',
      minHeight: 350
    }}>
      <h1 style={{ fontWeight: 800, fontSize: '3rem', marginBottom: '1.2rem', letterSpacing: '1px' }}>Database Security</h1>
      <p style={{ fontSize: '1.35rem', opacity: 0.92, maxWidth: 700, margin: '0 auto' }}>
        [Your subheading or tagline goes here.]
      </p>
    </section>

    {/* Features Section */}
    <section style={{ background: '#f4f6fb', padding: '3rem 0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', maxWidth: 1200, margin: '0 auto' }}>
        {[1,2,3].map((i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(44,62,80,0.08)', width: 320, minHeight: 220, padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Heading */}
            <h3 style={{ fontWeight: 600, fontSize: '1.2rem', color: '#232946', marginBottom: 10, textAlign: 'center' }}>[Feature Heading]</h3>
            <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center', opacity: 0.9 }}>[Short feature description goes here.]</p>
          </div>
        ))}
      </div>
    </section>

    {/* Wide Content Section: Image Left, Text Right */}
    <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: 1200, margin: '3rem auto', padding: '0 1rem' }}>
      <div style={{ flex: '1 1 400px', minWidth: 320, padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        {/* Image Placeholder */}
        <div style={{ width: 320, height: 240, background: '#e9eaf0', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#aaa' }}>[Image here]</span>
        </div>
      </div>
      <div style={{ flex: '2 1 400px', minWidth: 320, padding: '2rem' }}>
        {/* Content Placeholder */}
        <h2 style={{ fontWeight: 700, fontSize: '2rem', color: '#232946', marginBottom: '1.2rem' }}>[Section Heading]</h2>
        <div style={{ fontSize: '1.13rem', color: '#555', lineHeight: 1.7 }}>
          [Your detailed content or description will go here.]
        </div>
      </div>
    </section>
  </>
);

export default DatabaseSecurity;