'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    location: '',
    description: '',
    category: '',
    fuelType: '',
    transmission: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    images: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to the backend
    alert('Thank you for listing your car! It will be reviewed and published soon.');
    // Redirect to home or listings page
  };

  return (
    <>
      {/* Page Header */}
      <div style={{
        backgroundColor: 'var(--secondary-bg)',
        padding: 'var(--spacing-xl) 0'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: 'var(--font-size-2xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Sell Your Car
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            List your car for free and reach thousands of potential buyers
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-xl) var(--container-padding)' }}>
        {/* Progress Indicator */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: 'var(--spacing-xl)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '2px',
            backgroundColor: 'var(--tertiary-bg)',
            transform: 'translateY(-50%)',
            zIndex: 0
          }}></div>
          
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: step >= i ? 'var(--accent-primary)' : 'var(--tertiary-bg)',
                color: step >= i ? 'var(--text-dark)' : 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-xs)',
                fontWeight: 'var(--font-weight-bold)'
              }}>
                {i}
              </div>
              <span style={{ 
                color: step >= i ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: 'var(--font-size-sm)'
              }}>
                {i === 1 ? 'Car Details' : i === 2 ? 'Photos & Description' : 'Contact Info'}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: 'var(--secondary-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Car Details */}
            {step === 1 && (
              <div>
                <h2 style={{ 
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  Car Details
                </h2>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--spacing-lg)'
                }}>
                  <div>
                    <label 
                      htmlFor="make" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Make*
                    </label>
                    <select
                      id="make"
                      name="make"
                      value={formData.make}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="">Select Make</option>
                      <option value="Audi">Audi</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Volvo">Volvo</option>
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="model" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Model*
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. 3 Series, Corolla"
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="year" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Year*
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="">Select Year</option>
                      {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="mileage" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Mileage (km)*
                    </label>
                    <input
                      type="number"
                      id="mileage"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. 50000"
                      min="0"
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="price" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Price (€)*
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. 25000"
                      min="0"
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="location" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Location*
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Amsterdam"
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="category" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Category*
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="">Select Category</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Convertible">Convertible</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Wagon">Wagon</option>
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="fuelType" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Fuel Type*
                    </label>
                    <select
                      id="fuelType"
                      name="fuelType"
                      value={formData.fuelType}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="">Select Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Plug-in Hybrid">Plug-in Hybrid</option>
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="transmission" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Transmission*
                    </label>
                    <select
                      id="transmission"
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="">Select Transmission</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                      <option value="Semi-Automatic">Semi-Automatic</option>
                    </select>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: 'var(--spacing-xl)'
                }}>
                  <button 
                    type="button" 
                    className="button button-primary"
                    onClick={handleNextStep}
                  >
                    Next: Add Photos & Description
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Photos & Description */}
            {step === 2 && (
              <div>
                <h2 style={{ 
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  Photos & Description
                </h2>
                
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <label 
                    htmlFor="images" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-md)',
                      fontSize: 'var(--font-size-md)'
                    }}
                  >
                    Upload Photos*
                  </label>
                  
                  <div style={{
                    border: `2px dashed var(--tertiary-bg)`,
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-xl)',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}>
                    <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                      Drag & drop photos here, or click to browse
                    </p>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                      Add up to 10 photos. First photo will be used as the main image.
                    </p>
                    <input 
                      type="file" 
                      id="images"
                      multiple
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                    <button
                      type="button"
                      className="button button-secondary"
                      style={{ marginTop: 'var(--spacing-md)' }}
                      onClick={() => document.getElementById('images')?.click()}
                    >
                      Browse Files
                    </button>
                  </div>
                </div>
                
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <label 
                    htmlFor="description" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-xs)',
                      fontSize: 'var(--font-size-md)'
                    }}
                  >
                    Description*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your car in detail. Include features, condition, service history, and any other information that might be helpful for buyers."
                    style={{
                      width: '100%',
                      padding: 'var(--spacing-sm)',
                      backgroundColor: 'var(--tertiary-bg)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      height: '200px',
                      resize: 'vertical'
                    }}
                  ></textarea>
                  <p style={{ marginTop: 'var(--spacing-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    Minimum 100 characters
                  </p>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 'var(--spacing-xl)'
                }}>
                  <button 
                    type="button" 
                    className="button button-secondary"
                    onClick={handlePrevStep}
                  >
                    Back: Car Details
                  </button>
                  <button 
                    type="button" 
                    className="button button-primary"
                    onClick={handleNextStep}
                  >
                    Next: Contact Information
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div>
                <h2 style={{ 
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  Contact Information
                </h2>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--spacing-lg)',
                  marginBottom: 'var(--spacing-xl)'
                }}>
                  <div>
                    <label 
                      htmlFor="contactName" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="contactEmail" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="contactPhone" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>
                
                <div style={{ 
                  backgroundColor: 'var(--tertiary-bg)',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 'var(--spacing-xl)'
                }}>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-md)',
                    marginBottom: 'var(--spacing-md)'
                  }}>
                    Listing Summary
                  </h3>
                  
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-md)'
                  }}>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xs)' }}>Make & Model</p>
                      <p>{formData.make} {formData.model}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xs)' }}>Year</p>
                      <p>{formData.year}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xs)' }}>Price</p>
                      <p>€{formData.price}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xs)' }}>Location</p>
                      <p>{formData.location}</p>
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    By submitting this listing, you agree to our <Link href="/terms" style={{ color: 'var(--accent-primary)' }}>Terms of Service</Link> and <Link href="/privacy" style={{ color: 'var(--accent-primary)' }}>Privacy Policy</Link>.
                  </p>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 'var(--spacing-xl)'
                }}>
                  <button 
                    type="button" 
                    className="button button-secondary"
                    onClick={handlePrevStep}
                  >
                    Back: Photos & Description
                  </button>
                  <button 
                    type="submit" 
                    className="button button-primary"
                  >
                    Submit Listing
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-lg)',
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                How much does it cost to list a car?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                It's completely free to list your car on CarMarket. We only charge a small fee when your car is sold.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                How long will my listing be active?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Your listing will be active for 60 days. After that, you can easily renew it if your car hasn't sold yet.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                How do I manage my listing?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Once your listing is active, you can manage it from your account dashboard. There you can edit details, update photos, or mark it as sold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 