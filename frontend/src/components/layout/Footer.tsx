import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--secondary-bg)',
      padding: 'var(--spacing-xl) 0',
      marginTop: 'var(--spacing-2xl)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--accent-primary)',
              marginBottom: 'var(--spacing-md)'
            }}>
              CarMarket
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
              Find your perfect car with CarMarket, the leading online car marketplace in the Netherlands.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              {/* Social Media Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: 'var(--tertiary-bg)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>F</div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: 'var(--tertiary-bg)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>I</div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: 'var(--tertiary-bg)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>T</div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-md)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/cars" className="nav-link">Browse Cars</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/sell" className="nav-link">Sell Your Car</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/about" className="nav-link">About Us</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Car Categories */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-md)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Categories
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/cars?category=sedan" className="nav-link">Sedans</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/cars?category=suv" className="nav-link">SUVs</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/cars?category=hatchback" className="nav-link">Hatchbacks</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/cars?category=electric" className="nav-link">Electric Cars</Link>
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <Link href="/cars?category=hybrid" className="nav-link">Hybrid Cars</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-md)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Contact Us
            </h4>
            <address style={{
              fontStyle: 'normal',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--spacing-md)'
            }}>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>Autoweg 123</p>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>1234 AB Amsterdam</p>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>The Netherlands</p>
            </address>
            <p style={{ marginBottom: 'var(--spacing-xs)' }}>
              <a href="tel:+31201234567" className="nav-link">+31 20 123 4567</a>
            </p>
            <p>
              <a href="mailto:info@carmarket.nl" className="nav-link">info@carmarket.nl</a>
            </p>
          </div>
        </div>

        <hr style={{ 
          border: 'none', 
          height: '1px', 
          backgroundColor: 'var(--tertiary-bg)', 
          margin: 'var(--spacing-xl) 0' 
        }} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--spacing-md)'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
            &copy; {currentYear} CarMarket. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
            <Link href="/privacy" className="nav-link" style={{ fontSize: 'var(--font-size-sm)' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="nav-link" style={{ fontSize: 'var(--font-size-sm)' }}>
              Terms of Service
            </Link>
            <Link href="/cookies" className="nav-link" style={{ fontSize: 'var(--font-size-sm)' }}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 