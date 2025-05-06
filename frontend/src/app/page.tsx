import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Sample featured cars data
  const featuredCars = [
    {
      id: 1,
      title: 'BMW 3 Series 2021',
      price: '€42,999',
      location: 'Amsterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=BMW+3+Series',
      category: 'Sedan',
      fuelType: 'Hybrid',
      year: 2021,
    },
    {
      id: 2,
      title: 'Volkswagen ID.4',
      price: '€38,500',
      location: 'Rotterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=VW+ID.4',
      category: 'SUV',
      fuelType: 'Electric',
      year: 2022,
    },
    {
      id: 3,
      title: 'Toyota Corolla Hybrid',
      price: '€29,999',
      location: 'Utrecht',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Toyota+Corolla',
      category: 'Hatchback',
      fuelType: 'Hybrid',
      year: 2020,
    },
    {
      id: 4,
      title: 'Audi e-tron GT',
      price: '€89,750',
      location: 'Den Haag',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Audi+e-tron',
      category: 'Sedan',
      fuelType: 'Electric',
      year: 2022,
    },
  ];

  // Sample car categories
  const categories = [
    { name: 'Sedans', icon: '🚗', link: '/cars?category=sedan' },
    { name: 'SUVs', icon: '🚙', link: '/cars?category=suv' },
    { name: 'Hatchbacks', icon: '🚕', link: '/cars?category=hatchback' },
    { name: 'Electric', icon: '⚡', link: '/cars?category=electric' },
    { name: 'Hybrid', icon: '♻️', link: '/cars?category=hybrid' },
    { name: 'Luxury', icon: '✨', link: '/cars?category=luxury' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(10, 16, 24, 0.7), rgba(10, 16, 24, 0.7)), url(https://placehold.co/1920x1080/1a2c4d/FFFFFF/png?text=Car+Marketplace)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'var(--text-primary)',
        padding: 'var(--spacing-3xl) 0',
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Find Your Perfect Car
          </h1>
          <p style={{ 
            fontSize: 'var(--font-size-lg)',
            maxWidth: '800px',
            marginBottom: 'var(--spacing-xl)'
          }}>
            Discover the largest selection of new and used cars in the Netherlands.
            With CarMarket, your dream car is just a few clicks away.
          </p>
          
          {/* Search Bar */}
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '800px',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--spacing-md)'
            }}>
              <div style={{ flex: '1 1 200px' }}>
                <label htmlFor="make" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>
                  Make
                </label>
                <select id="make" name="make" style={{
                  width: '100%',
                  padding: 'var(--spacing-sm)',
                  backgroundColor: 'var(--tertiary-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}>
                  <option value="">Any Make</option>
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="toyota">Toyota</option>
                  <option value="volkswagen">Volkswagen</option>
                </select>
              </div>
              
              <div style={{ flex: '1 1 200px' }}>
                <label htmlFor="model" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>
                  Model
                </label>
                <select id="model" name="model" style={{
                  width: '100%',
                  padding: 'var(--spacing-sm)',
                  backgroundColor: 'var(--tertiary-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}>
                  <option value="">Any Model</option>
                </select>
              </div>
              
              <div style={{ flex: '1 1 200px' }}>
                <label htmlFor="price" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', color: 'var(--text-secondary)' }}>
                  Max Price
                </label>
                <select id="price" name="price" style={{
                  width: '100%',
                  padding: 'var(--spacing-sm)',
                  backgroundColor: 'var(--tertiary-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}>
                  <option value="">Any Price</option>
                  <option value="10000">€10,000</option>
                  <option value="20000">€20,000</option>
                  <option value="30000">€30,000</option>
                  <option value="50000">€50,000</option>
                  <option value="100000">€100,000</option>
                </select>
              </div>
              
              <button type="submit" className="button button-primary" style={{
                flex: '1 1 100px',
                alignSelf: 'flex-end',
                marginBottom: '1px'
              }}>
                Search
              </button>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
            <Link href="/cars" className="button button-primary">
              Browse All Cars
            </Link>
            <Link href="/sell" className="button button-secondary">
              Sell Your Car
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ padding: 'var(--spacing-2xl) 0' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-xl)',
            textAlign: 'center' 
          }}>
            Browse by Category
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {categories.map((category) => (
              <Link href={category.link} key={category.name} style={{
                textDecoration: 'none',
                color: 'var(--text-primary)'
              }}>
                <div style={{
                  backgroundColor: 'var(--secondary-bg)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-lg)',
                  textAlign: 'center',
                  transition: 'transform var(--transition-normal)',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="card">
                  <span style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>{category.icon}</span>
                  <h3 style={{ fontSize: 'var(--font-size-md)' }}>{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section style={{ 
        padding: 'var(--spacing-2xl) 0',
        backgroundColor: 'var(--secondary-bg)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <h2 style={{ fontSize: 'var(--font-size-2xl)' }}>
              Featured Cars
            </h2>
            <Link href="/cars" className="button button-secondary">
              View All
            </Link>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {featuredCars.map((car) => (
              <Link href={`/cars/${car.id}`} key={car.id} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                    <img 
                      src={car.image} 
                      alt={car.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        borderTopLeftRadius: 'var(--radius-lg)',
                        borderTopRightRadius: 'var(--radius-lg)'
                      }} 
                    />
                  </div>
                  
                  <div style={{ padding: 'var(--spacing-md)' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: 'var(--spacing-xs)'
                    }}>
                      <span className="tag">{car.year}</span>
                      <span className="tag tag-highlight">{car.fuelType}</span>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: 'var(--font-size-lg)',
                      marginBottom: 'var(--spacing-xs)'
                    }}>
                      {car.title}
                    </h3>
                    
                    <p style={{ 
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--accent-primary)',
                      marginBottom: 'var(--spacing-xs)'
                    }}>
                      {car.price}
                    </p>
                    
                    <p style={{ 
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--text-secondary)'
                    }}>
                      {car.location} • {car.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: 'var(--spacing-2xl) 0' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-xl)',
            textAlign: 'center' 
          }}>
            How It Works
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-md)',
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--accent-primary)'
              }}>
                1
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Search
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Find your perfect car using our advanced search filters. 
                Browse by make, model, price, and more.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-md)',
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--accent-primary)'
              }}>
                2
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Contact
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Directly contact the seller to ask questions
                or schedule a test drive.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-md)',
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--accent-primary)'
              }}>
                3
              </div>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Purchase
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Complete the purchase with confidence using
                our secure transaction process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        padding: 'var(--spacing-2xl) 0',
        backgroundColor: 'var(--secondary-bg)'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-xl)',
            textAlign: 'center' 
          }}>
            What Our Customers Say
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            <div style={{
              backgroundColor: 'var(--tertiary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              position: 'relative'
            }}>
              <p style={{ 
                marginBottom: 'var(--spacing-md)',
                fontSize: 'var(--font-size-md)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)'
              }}>
                "CarMarket made finding my new car so easy. The interface is intuitive,
                and I found exactly what I was looking for within a day. Highly recommend!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  marginRight: 'var(--spacing-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-dark)'
                }}>
                  JV
                </div>
                <div>
                  <p style={{ 
                    fontWeight: 'var(--font-weight-medium)',
                  }}>
                    Jan Visser
                  </p>
                  <p style={{ 
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-secondary)'
                  }}>
                    Amsterdam
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--tertiary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              position: 'relative'
            }}>
              <p style={{ 
                marginBottom: 'var(--spacing-md)',
                fontSize: 'var(--font-size-md)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)'
              }}>
                "I sold my car within a week of listing it on CarMarket. The process was 
                streamlined and the customer support was excellent!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  marginRight: 'var(--spacing-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-dark)'
                }}>
                  MJ
                </div>
                <div>
                  <p style={{ 
                    fontWeight: 'var(--font-weight-medium)',
                  }}>
                    Maria Jansen
                  </p>
                  <p style={{ 
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-secondary)'
                  }}>
                    Rotterdam
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--tertiary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              position: 'relative'
            }}>
              <p style={{ 
                marginBottom: 'var(--spacing-md)',
                fontSize: 'var(--font-size-md)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)'
              }}>
                "The AI features helped me narrow down my choices based on my preferences.
                I found my dream car faster than I expected. Great service!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  marginRight: 'var(--spacing-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-dark)'
                }}>
                  PD
                </div>
                <div>
                  <p style={{ 
                    fontWeight: 'var(--font-weight-medium)',
                  }}>
                    Peter de Vries
                  </p>
                  <p style={{ 
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-secondary)'
                  }}>
                    Utrecht
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: 'var(--spacing-2xl) 0',
        backgroundImage: 'linear-gradient(rgba(10, 16, 24, 0.8), rgba(10, 16, 24, 0.8)), url(https://placehold.co/1920x600/1a2c4d/FFFFFF/png?text=Sell+Your+Car)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'var(--text-primary)',
      }}>
        <div className="container" style={{ 
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Ready to Sell Your Car?
          </h2>
          <p style={{ 
            fontSize: 'var(--font-size-lg)',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-secondary)'
          }}>
            List your car on CarMarket and reach thousands of potential buyers today.
            It's quick, easy, and free to get started!
          </p>
          <Link href="/sell" className="button button-primary" style={{
            padding: 'var(--spacing-md) var(--spacing-xl)'
          }}>
            Sell Your Car Now
          </Link>
        </div>
      </section>
    </>
  );
}
