'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to the backend
    console.log('Form data:', formData);
    setSubmitted(true);
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
            Contact Us
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px' }}>
            Have questions or need assistance? We're here to help!
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-xl) var(--container-padding)' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-2xl)'
        }}>
          {/* Contact Form */}
          <div>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
            }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-xl)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                Send Us a Message
              </h2>
              
              {submitted ? (
                <div style={{
                  backgroundColor: 'var(--tertiary-bg)',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 'var(--spacing-lg)',
                  textAlign: 'center'
                }}>
                  <h3 style={{ 
                    fontSize: 'var(--font-size-lg)',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--accent-primary)'
                  }}>
                    Thank You!
                  </h3>
                  <p style={{ marginBottom: 'var(--spacing-md)' }}>
                    Your message has been received. We'll get back to you shortly.
                  </p>
                  <button 
                    className="button button-secondary"
                    onClick={() => {
                      setFormData({ name: '', email: '', subject: '', message: '' });
                      setSubmitted(false);
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <label 
                      htmlFor="name" 
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
                      id="name"
                      name="name"
                      value={formData.name}
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
                  
                  <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <label 
                      htmlFor="email" 
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
                      id="email"
                      name="email"
                      value={formData.email}
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
                  
                  <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <label 
                      htmlFor="subject" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
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
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Buying a Car">Buying a Car</option>
                      <option value="Selling a Car">Selling a Car</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <label 
                      htmlFor="message" 
                      style={{ 
                        display: 'block', 
                        marginBottom: 'var(--spacing-xs)',
                        fontSize: 'var(--font-size-sm)'
                      }}
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-sm)',
                        backgroundColor: 'var(--tertiary-bg)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
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
          </div>
          
          {/* Contact Information */}
          <div>
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <h2 style={{ 
                fontSize: 'var(--font-size-xl)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                Contact Information
              </h2>
              
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3 style={{ 
                  fontSize: 'var(--font-size-md)',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--accent-primary)'
                }}>
                  Address
                </h3>
                <address style={{ 
                  fontStyle: 'normal',
                  lineHeight: 'var(--line-height-loose)',
                  color: 'var(--text-secondary)'
                }}>
                  <p>Autoweg 123</p>
                  <p>1234 AB Amsterdam</p>
                  <p>The Netherlands</p>
                </address>
              </div>
              
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <h3 style={{ 
                  fontSize: 'var(--font-size-md)',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--accent-primary)'
                }}>
                  Phone & Email
                </h3>
                <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                  <a href="tel:+31201234567" className="nav-link">+31 20 123 4567</a>
                </p>
                <p>
                  <a href="mailto:info@carmarket.nl" className="nav-link">info@carmarket.nl</a>
                </p>
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: 'var(--font-size-md)',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--accent-primary)'
                }}>
                  Business Hours
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--line-height-loose)'
                }}>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-xl)',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p>Map View</p>
              {/* In a real app, this would be a map component */}
            </div>
          </div>
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
                fontSize: 'var(--font-size-md)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                How quickly will I get a response?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-md)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Do you offer customer support on weekends?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Yes, we have a limited customer support team available on Saturdays from 10:00 AM to 4:00 PM.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)'
            }}>
              <h3 style={{ 
                fontSize: 'var(--font-size-md)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                Can I visit your office in person?
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Yes, you're welcome to visit our office during business hours. We recommend scheduling an appointment to ensure someone is available to assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div style={{ 
          backgroundColor: 'var(--secondary-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--spacing-xl)',
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Connect With Us
          </h2>
          <p style={{ 
            marginBottom: 'var(--spacing-lg)',
            color: 'var(--text-secondary)'
          }}>
            Follow us on social media for the latest updates, car tips, and exclusive offers.
          </p>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-md)'
          }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                F
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                I
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                T
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: 'var(--tertiary-bg)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                L
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 