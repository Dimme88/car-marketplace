'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CarDetailPage() {
  const params = useParams();
  const carId = parseInt(params.id as string);

  // This would normally be fetched from an API
  const car = getCar(carId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [message, setMessage] = useState('');

  if (!car) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <div style={{
          backgroundColor: 'var(--secondary-bg)',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Car Not Found</h1>
          <p style={{ marginBottom: 'var(--spacing-lg)' }}>The car you are looking for doesn't exist or has been removed.</p>
          <Link href="/cars" className="button button-primary">
            Browse Other Cars
          </Link>
        </div>
      </div>
    );
  }

  // Create an array of images for the gallery (in a real app, these would come from the API)
  const images = [
    car.image,
    car.image.replace('text=', 'text=Interior+'),
    car.image.replace('text=', 'text=Side+View+'),
    car.image.replace('text=', 'text=Rear+View+'),
  ];

  // Format price with euro symbol
  const formatPrice = (price: number) => {
    return `€${price.toLocaleString()}`;
  };

  // Handle contact form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to the backend
    alert('Your message has been sent to the seller!');
    setMessage('');
    setShowContact(false);
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container" style={{ padding: 'var(--spacing-md) var(--container-padding)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <span style={{ color: 'var(--text-secondary)' }}>/</span>
            <Link href="/cars" style={{ color: 'var(--text-secondary)' }}>Cars</Link>
            <span style={{ color: 'var(--text-secondary)' }}>/</span>
            <span>{car.title}</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-xl) var(--container-padding)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-xl)' }}>
          {/* Left Column - Car Details */}
          <div>
            {/* Gallery */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <div style={{ 
                position: 'relative', 
                height: '400px', 
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: 'var(--spacing-md)'
              }}>
                <img 
                  src={images[activeImageIndex]} 
                  alt={`${car.title} - Image ${activeImageIndex + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center' }}>
                {images.map((image, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    style={{ 
                      width: '80px', 
                      height: '60px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: index === activeImageIndex ? `2px solid var(--accent-primary)` : `2px solid transparent`,
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`${car.title} - Thumbnail ${index + 1}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Car Title & Basic Info */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 'var(--spacing-sm)'
              }}>
                <h1 style={{ 
                  fontSize: 'var(--font-size-2xl)',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  {car.title}
                </h1>
                
                <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
                  <button 
                    aria-label="Share"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--tertiary-bg)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => alert('Share functionality would go here')}
                  >
                    📤
                  </button>
                  <button 
                    aria-label="Save to favorites"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--tertiary-bg)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => alert('Save functionality would go here')}
                  >
                    ❤️
                  </button>
                </div>
              </div>
              
              <p style={{ 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--spacing-md)'
              }}>
                {car.location}
              </p>
              
              <div style={{ 
                display: 'flex',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)',
                flexWrap: 'wrap'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)'
                }}>
                  <span style={{ color: 'var(--text-secondary)' }}>🗓️</span>
                  <span>{car.year}</span>
                </div>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)'
                }}>
                  <span style={{ color: 'var(--text-secondary)' }}>🛣️</span>
                  <span>{car.mileage.toLocaleString()} km</span>
                </div>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)'
                }}>
                  <span style={{ color: 'var(--text-secondary)' }}>⚙️</span>
                  <span>{car.transmission}</span>
                </div>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)'
                }}>
                  <span style={{ color: 'var(--text-secondary)' }}>🔋</span>
                  <span>{car.fuelType}</span>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex',
                gap: 'var(--spacing-xs)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <span className="tag">{car.category}</span>
                <span className="tag">{car.make}</span>
                <span className="tag">{car.model}</span>
              </div>
              
              <p style={{ 
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--accent-primary)'
              }}>
                {formatPrice(car.price)}
              </p>
            </div>
            
            {/* Tabs & Description */}
            <div>
              <div style={{
                borderBottom: `1px solid var(--tertiary-bg)`,
                display: 'flex',
                marginBottom: 'var(--spacing-md)'
              }}>
                <button 
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--accent-primary)',
                    borderBottom: `2px solid var(--accent-primary)`,
                    fontWeight: 'var(--font-weight-medium)'
                  }}
                >
                  Description
                </button>
                <button 
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Specifications
                </button>
                <button 
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Features
                </button>
              </div>
              
              <div>
                <h2 style={{ 
                  fontSize: 'var(--font-size-lg)',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  About this {car.make} {car.model}
                </h2>
                
                <p style={{ 
                  marginBottom: 'var(--spacing-md)',
                  lineHeight: 'var(--line-height-loose)',
                  color: 'var(--text-secondary)'
                }}>
                  This {car.year} {car.make} {car.model} is in excellent condition with only {car.mileage.toLocaleString()} km. 
                  It features a powerful and efficient {car.fuelType.toLowerCase()} engine paired with a smooth {car.transmission.toLowerCase()} transmission.
                </p>
                
                <p style={{ 
                  marginBottom: 'var(--spacing-md)',
                  lineHeight: 'var(--line-height-loose)',
                  color: 'var(--text-secondary)'
                }}>
                  The {car.category.toLowerCase()} offers exceptional comfort with premium leather seats, 
                  advanced climate control, and a state-of-the-art infotainment system with smartphone integration.
                </p>
                
                <p style={{ 
                  lineHeight: 'var(--line-height-loose)',
                  color: 'var(--text-secondary)'
                }}>
                  Safety features include adaptive cruise control, lane-keeping assist, automatic emergency braking, 
                  and a 360-degree camera system, ensuring peace of mind on every journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Similar Cars */}
          <div>
            {/* Seller Box */}
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-md)'
              }}>
                Contact Seller
              </h3>
              
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--tertiary-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-lg)'
                }}>
                  👤
                </div>
                <div>
                  <p style={{ fontWeight: 'var(--font-weight-medium)' }}>Auto Dealership BV</p>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>Member since 2020</p>
                </div>
              </div>
              
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <button 
                  className="button button-primary"
                  style={{ width: '100%', marginBottom: 'var(--spacing-sm)' }}
                  onClick={() => setShowContact(!showContact)}
                >
                  {showContact ? 'Hide Contact Form' : 'Send Message'}
                </button>
                
                <a 
                  href="tel:+31201234567" 
                  className="button button-secondary" 
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Call Seller
                </a>
              </div>
              
              {showContact && (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <label 
                      htmlFor="message" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder={`I'm interested in your ${car.year} ${car.make} ${car.model}. Is it still available?`}
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        height: '120px',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="button button-primary"
                    style={{ width: '100%' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            {/* Car Location */}
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-md)'
              }}>
                Car Location
              </h3>
              
              <div style={{ 
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: 'var(--radius-sm)',
                padding: 'var(--spacing-md)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)'
              }}>
                <p>Map View</p>
                {/* In a real app, this would be a map component */}
              </div>
              
              <p style={{ color: 'var(--text-secondary)' }}>
                {car.location}, The Netherlands
              </p>
            </div>
            
            {/* Similar Cars */}
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-md)'
              }}>
                Similar Cars
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                {getSimilarCars(car).map((similarCar) => (
                  <Link href={`/cars/${similarCar.id}`} key={similarCar.id} style={{ textDecoration: 'none' }}>
                    <div style={{ 
                      display: 'flex',
                      gap: 'var(--spacing-md)',
                      padding: 'var(--spacing-sm)',
                      borderRadius: 'var(--radius-md)',
                      transition: 'background-color var(--transition-fast)'
                    }}
                    className="similar-car-item">
                      <div style={{ 
                        width: '80px',
                        height: '60px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={similarCar.image} 
                          alt={similarCar.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                      
                      <div>
                        <h4 style={{ 
                          fontSize: 'var(--font-size-sm)',
                          marginBottom: 'var(--spacing-xs)'
                        }}>
                          {similarCar.title}
                        </h4>
                        
                        <p style={{ 
                          fontSize: 'var(--font-size-md)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--accent-primary)'
                        }}>
                          {formatPrice(similarCar.price)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <style jsx>{`
                .similar-car-item:hover {
                  background-color: var(--tertiary-bg);
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ---- Helper Functions ----

// Dummy function to get a car by ID
function getCar(id: number) {
  const cars = [
    {
      id: 1,
      title: 'BMW 3 Series 2021',
      price: 42999,
      location: 'Amsterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=BMW+3+Series',
      category: 'Sedan',
      fuelType: 'Hybrid',
      year: 2021,
      mileage: 25000,
      transmission: 'Automatic',
      make: 'BMW',
      model: '3 Series',
    },
    {
      id: 2,
      title: 'Volkswagen ID.4',
      price: 38500,
      location: 'Rotterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=VW+ID.4',
      category: 'SUV',
      fuelType: 'Electric',
      year: 2022,
      mileage: 15000,
      transmission: 'Automatic',
      make: 'Volkswagen',
      model: 'ID.4',
    },
    {
      id: 3,
      title: 'Toyota Corolla Hybrid',
      price: 29999,
      location: 'Utrecht',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Toyota+Corolla',
      category: 'Hatchback',
      fuelType: 'Hybrid',
      year: 2020,
      mileage: 35000,
      transmission: 'Automatic',
      make: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 4,
      title: 'Audi e-tron GT',
      price: 89750,
      location: 'Den Haag',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Audi+e-tron',
      category: 'Sedan',
      fuelType: 'Electric',
      year: 2022,
      mileage: 10000,
      transmission: 'Automatic',
      make: 'Audi',
      model: 'e-tron GT',
    },
  ];
  
  return cars.find(car => car.id === id);
}

// Dummy function to get similar cars
function getSimilarCars(car: any) {
  const cars = [
    {
      id: 1,
      title: 'BMW 3 Series 2021',
      price: 42999,
      location: 'Amsterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=BMW+3+Series',
      category: 'Sedan',
      fuelType: 'Hybrid',
      year: 2021,
      mileage: 25000,
      transmission: 'Automatic',
      make: 'BMW',
      model: '3 Series',
    },
    {
      id: 2,
      title: 'Volkswagen ID.4',
      price: 38500,
      location: 'Rotterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=VW+ID.4',
      category: 'SUV',
      fuelType: 'Electric',
      year: 2022,
      mileage: 15000,
      transmission: 'Automatic',
      make: 'Volkswagen',
      model: 'ID.4',
    },
    {
      id: 3,
      title: 'Toyota Corolla Hybrid',
      price: 29999,
      location: 'Utrecht',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Toyota+Corolla',
      category: 'Hatchback',
      fuelType: 'Hybrid',
      year: 2020,
      mileage: 35000,
      transmission: 'Automatic',
      make: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 4,
      title: 'Audi e-tron GT',
      price: 89750,
      location: 'Den Haag',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Audi+e-tron',
      category: 'Sedan',
      fuelType: 'Electric',
      year: 2022,
      mileage: 10000,
      transmission: 'Automatic',
      make: 'Audi',
      model: 'e-tron GT',
    },
  ];
  
  // Filter out the current car and return similar cars based on category, fuel type, or make
  return cars
    .filter(c => c.id !== car.id)
    .filter(c => c.category === car.category || c.fuelType === car.fuelType || c.make === car.make)
    .slice(0, 3);
} 