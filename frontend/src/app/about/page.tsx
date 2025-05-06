import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div style={{
        backgroundColor: 'var(--secondary-bg)',
        padding: 'var(--spacing-xl) 0'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            About CarMarket
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px' }}>
            The premier destination for buying and selling cars in the Netherlands
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-xl) var(--container-padding)' }}>
        {/* Our Story */}
        <section style={{ 
          marginBottom: 'var(--spacing-2xl)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: 'var(--font-size-xl)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Our Story
            </h2>
            <p style={{ 
              marginBottom: 'var(--spacing-md)',
              lineHeight: 'var(--line-height-loose)',
              color: 'var(--text-secondary)'
            }}>
              Founded in 2020, CarMarket was created with a simple mission: to make buying and selling cars 
              easier, safer, and more transparent for everyone in the Netherlands.
            </p>
            <p style={{ 
              marginBottom: 'var(--spacing-md)',
              lineHeight: 'var(--line-height-loose)',
              color: 'var(--text-secondary)'
            }}>
              What started as a small startup has grown into the country's most trusted automotive marketplace, 
              connecting thousands of buyers and sellers every day.
            </p>
            <p style={{ 
              lineHeight: 'var(--line-height-loose)',
              color: 'var(--text-secondary)'
            }}>
              Our platform combines cutting-edge technology with exceptional customer service to provide 
              the best possible experience for our users.
            </p>
          </div>
          <div style={{
            backgroundColor: 'var(--tertiary-bg)',
            borderRadius: 'var(--radius-lg)',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p style={{ padding: 'var(--spacing-lg)' }}>Company Image</p>
            {/* In a real app, this would be an actual image */}
          </div>
        </section>

        {/* Our Mission */}
        <section style={{ 
          backgroundColor: 'var(--secondary-bg)',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: 'var(--spacing-2xl)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Our Mission
          </h2>
          <p style={{ 
            fontSize: 'var(--font-size-lg)',
            lineHeight: 'var(--line-height-loose)',
            maxWidth: '800px',
            margin: '0 auto',
            color: 'var(--text-secondary)'
          }}>
            "To revolutionize the automotive marketplace by providing a transparent, secure, and efficient platform 
            that empowers both buyers and sellers, while promoting sustainable transportation solutions for a greener future."
          </p>
        </section>

        {/* Our Values */}
        <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-lg)',
            textAlign: 'center'
          }}>
            Our Values
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--tertiary-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-md)',
                fontSize: '1.5rem'
              }}>
                🛡️
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Trust & Transparency
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We believe in complete transparency in all our operations and strive to build trust with every interaction.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--tertiary-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-md)',
                fontSize: '1.5rem'
              }}>
                💡
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Innovation
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We continuously innovate to provide the best technological solutions for our users' evolving needs.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--tertiary-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-md)',
                fontSize: '1.5rem'
              }}>
                🌱
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Sustainability
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We are committed to promoting eco-friendly transportation options and reducing our environmental impact.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--tertiary-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-md)',
                fontSize: '1.5rem'
              }}>
                👥
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Community
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We foster a strong community of car enthusiasts, buyers, and sellers who share knowledge and experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-lg)',
            textAlign: 'center'
          }}>
            Meet Our Team
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {[
              { name: 'Jan de Vries', role: 'CEO & Founder', avatar: '👨‍💼' },
              { name: 'Sophia Jansen', role: 'CTO', avatar: '👩‍💼' },
              { name: 'Lucas Bakker', role: 'Head of Marketing', avatar: '👨‍💼' },
              { name: 'Emma van den Berg', role: 'Customer Success', avatar: '👩‍💼' }
            ].map((member, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--secondary-bg)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-lg)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--tertiary-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--spacing-md)',
                  fontSize: '2rem'
                }}>
                  {member.avatar}
                </div>
                <h3 style={{ 
                  fontSize: 'var(--font-size-md)',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  {member.name}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-sm)'
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          backgroundColor: 'var(--secondary-bg)',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Join Our Community
          </h2>
          <p style={{ 
            marginBottom: 'var(--spacing-lg)',
            maxWidth: '700px',
            margin: '0 auto var(--spacing-lg)',
            color: 'var(--text-secondary)'
          }}>
            Whether you're looking to buy your dream car or sell your current vehicle, 
            CarMarket has everything you need to make the process smooth and enjoyable.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
            <Link href="/cars" className="button button-primary">
              Browse Cars
            </Link>
            <Link href="/sell" className="button button-secondary">
              Sell Your Car
            </Link>
          </div>
        </section>
      </div>
    </>
  );
} 