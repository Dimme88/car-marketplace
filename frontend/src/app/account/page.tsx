'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // In a real app, this would authenticate with the backend
    console.log('Form submitted:', isLogin ? 'Login' : 'Signup', formData);
    
    // Here you would handle authentication logic
    alert(isLogin ? 'Login successful!' : 'Signup successful!');
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
            {isLogin ? 'Log In' : 'Sign Up'} to CarMarket
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            {isLogin 
              ? 'Access your account to manage your listings and saved cars.' 
              : 'Create an account to buy, sell, and save your favorite cars.'}
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-xl) var(--container-padding)' }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 'var(--spacing-2xl)'
        }}>
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-xl)',
            width: '100%',
            maxWidth: '500px'
          }}>
            {/* Toggle between Login and Signup */}
            <div style={{ 
              display: 'flex',
              marginBottom: 'var(--spacing-lg)',
              borderBottom: `1px solid var(--tertiary-bg)`
            }}>
              <button 
                onClick={() => setIsLogin(true)}
                style={{
                  flex: 1,
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: isLogin ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  borderBottom: isLogin ? `2px solid var(--accent-primary)` : 'none',
                  fontWeight: isLogin ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)'
                }}
              >
                Log In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                style={{
                  flex: 1,
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: !isLogin ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  borderBottom: !isLogin ? `2px solid var(--accent-primary)` : 'none',
                  fontWeight: !isLogin ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)'
                }}
              >
                Sign Up
              </button>
            </div>
            
            {/* Social Login Buttons */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <button 
                className="button button-secondary"
                style={{ 
                  width: '100%',
                  marginBottom: 'var(--spacing-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-md)'
                }}
              >
                <span>G</span> {/* This would be a Google icon in a real app */}
                <span>Continue with Google</span>
              </button>
              <button 
                className="button button-secondary"
                style={{ 
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-md)'
                }}
              >
                <span>f</span> {/* This would be a Facebook icon in a real app */}
                <span>Continue with Facebook</span>
              </button>
            </div>
            
            {/* Or Divider */}
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <div style={{ 
                flex: 1,
                height: '1px',
                backgroundColor: 'var(--tertiary-bg)'
              }}></div>
              <span style={{ 
                padding: '0 var(--spacing-md)',
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-sm)'
              }}>OR</span>
              <div style={{ 
                flex: 1,
                height: '1px',
                backgroundColor: 'var(--tertiary-bg)'
              }}></div>
            </div>
            
            {/* Login/Signup Form */}
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <label 
                    htmlFor="name" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-xs)',
                      fontSize: 'var(--font-size-sm)'
                    }}
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin}
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
              )}
              
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
              
              <div style={{ marginBottom: isLogin ? 'var(--spacing-sm)' : 'var(--spacing-md)' }}>
                <label 
                  htmlFor="password" 
                  style={{ 
                    display: 'block', 
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: 'var(--font-size-sm)'
                  }}
                >
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
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
              
              {isLogin && (
                <div style={{ 
                  textAlign: 'right',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  <a 
                    href="#" 
                    style={{ 
                      color: 'var(--accent-primary)',
                      fontSize: 'var(--font-size-sm)'
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
              )}
              
              {!isLogin && (
                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                  <label 
                    htmlFor="confirmPassword" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-xs)',
                      fontSize: 'var(--font-size-sm)'
                    }}
                  >
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
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
              )}
              
              <button 
                type="submit" 
                className="button button-primary"
                style={{ 
                  width: '100%',
                  marginBottom: 'var(--spacing-lg)'
                }}
              >
                {isLogin ? 'Log In' : 'Create Account'}
              </button>
              
              <p style={{ 
                textAlign: 'center',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <button 
                      type="button"
                      onClick={() => setIsLogin(false)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent-primary)',
                        cursor: 'pointer',
                        padding: 0,
                        fontWeight: 'var(--font-weight-medium)'
                      }}
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button 
                      type="button"
                      onClick={() => setIsLogin(true)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent-primary)',
                        cursor: 'pointer',
                        padding: 0,
                        fontWeight: 'var(--font-weight-medium)'
                      }}
                    >
                      Log in
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>

        {/* Information Boxes */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-2xl)'
        }}>
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--tertiary-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--spacing-md)',
              fontSize: '1.5rem'
            }}>
              🏎️
            </div>
            <h3 style={{ 
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Buy & Sell Cars
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              List your car for sale or browse thousands of listings to find your perfect vehicle.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--tertiary-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--spacing-md)',
              fontSize: '1.5rem'
            }}>
              🔍
            </div>
            <h3 style={{ 
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Save Searches
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Create and save custom searches to get notified when new listings match your criteria.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--tertiary-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--spacing-md)',
              fontSize: '1.5rem'
            }}>
              ❤️
            </div>
            <h3 style={{ 
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Save Favorites
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Bookmark cars you're interested in and keep track of them in your account dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 