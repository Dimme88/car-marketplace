'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CarsPage() {
  // Sample cars data
  const allCars = [
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
    {
      id: 5,
      title: 'Mercedes-Benz C-Class',
      price: 45500,
      location: 'Eindhoven',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Mercedes+C-Class',
      category: 'Sedan',
      fuelType: 'Petrol',
      year: 2021,
      mileage: 20000,
      transmission: 'Automatic',
      make: 'Mercedes-Benz',
      model: 'C-Class',
    },
    {
      id: 6,
      title: 'Kia EV6',
      price: 41999,
      location: 'Groningen',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Kia+EV6',
      category: 'SUV',
      fuelType: 'Electric',
      year: 2022,
      mileage: 8000,
      transmission: 'Automatic',
      make: 'Kia',
      model: 'EV6',
    },
    {
      id: 7,
      title: 'Volvo XC40 Recharge',
      price: 49500,
      location: 'Amsterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Volvo+XC40',
      category: 'SUV',
      fuelType: 'Electric',
      year: 2021,
      mileage: 18000,
      transmission: 'Automatic',
      make: 'Volvo',
      model: 'XC40',
    },
    {
      id: 8,
      title: 'Porsche Taycan',
      price: 105000,
      location: 'Rotterdam',
      image: 'https://placehold.co/400x300/121e33/FFFFFF/png?text=Porsche+Taycan',
      category: 'Sedan',
      fuelType: 'Electric',
      year: 2022,
      mileage: 5000,
      transmission: 'Automatic',
      make: 'Porsche',
      model: 'Taycan',
    },
  ];

  // Filter state
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    category: '',
    fuelType: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
  });

  // Sort state
  const [sortBy, setSortBy] = useState('relevance');

  // Filtered cars
  const [filteredCars, setFilteredCars] = useState(allCars);

  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Handle sort changes
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Apply filters and sorting
  useEffect(() => {
    let result = [...allCars];

    // Apply filters
    if (filters.make) {
      result = result.filter(car => car.make === filters.make);
    }
    
    if (filters.model) {
      result = result.filter(car => car.model === filters.model);
    }
    
    if (filters.category) {
      result = result.filter(car => car.category === filters.category);
    }
    
    if (filters.fuelType) {
      result = result.filter(car => car.fuelType === filters.fuelType);
    }
    
    if (filters.minPrice) {
      result = result.filter(car => car.price >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      result = result.filter(car => car.price <= parseInt(filters.maxPrice));
    }
    
    if (filters.minYear) {
      result = result.filter(car => car.year >= parseInt(filters.minYear));
    }
    
    if (filters.maxYear) {
      result = result.filter(car => car.year <= parseInt(filters.maxYear));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'oldest':
        result.sort((a, b) => a.year - b.year);
        break;
      default:
        // Default sorting (relevance) - no sorting needed
        break;
    }

    setFilteredCars(result);
  }, [filters, sortBy]);

  // Extract unique values for filter dropdowns
  const makes = [...new Set(allCars.map(car => car.make))];
  const models = [...new Set(allCars.map(car => car.model))];
  const categories = [...new Set(allCars.map(car => car.category))];
  const fuelTypes = [...new Set(allCars.map(car => car.fuelType))];
  const years = [...new Set(allCars.map(car => car.year))].sort((a, b) => b - a);

  // Format price with euro symbol
  const formatPrice = (price: number) => {
    return `€${price.toLocaleString()}`;
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
            Browse Cars
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Find your perfect car from our extensive collection
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-xl) var(--container-padding)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(250px, 1fr) 3fr',
          gap: 'var(--spacing-xl)'
        }}>
          {/* Filters Panel */}
          <div style={{
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            height: 'fit-content'
          }}>
            <h2 style={{ 
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              Filters
            </h2>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label 
                htmlFor="make" 
                style={{ 
                  display: 'block', 
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: 'var(--font-size-sm)'
                }}
              >
                Make
              </label>
              <select
                id="make"
                name="make"
                value={filters.make}
                onChange={handleFilterChange}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-sm)',
                  backgroundColor: 'var(--tertiary-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="">Any Make</option>
                {makes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label 
                htmlFor="model" 
                style={{ 
                  display: 'block', 
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: 'var(--font-size-sm)'
                }}
              >
                Model
              </label>
              <select
                id="model"
                name="model"
                value={filters.model}
                onChange={handleFilterChange}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-sm)',
                  backgroundColor: 'var(--tertiary-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="">Any Model</option>
                {models.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label 
                htmlFor="category" 
                style={{ 
                  display: 'block', 
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: 'var(--font-size-sm)'
                }}
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-sm)',
                  backgroundColor: 'var(--tertiary-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="">Any Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label 
                htmlFor="fuelType" 
                style={{ 
                  display: 'block', 
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: 'var(--font-size-sm)'
                }}
              >
                Fuel Type
              </label>
              <select
                id="fuelType"
                name="fuelType"
                value={filters.fuelType}
                onChange={handleFilterChange}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-sm)',
                  backgroundColor: 'var(--tertiary-bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="">Any Fuel Type</option>
                {fuelTypes.map(fuelType => (
                  <option key={fuelType} value={fuelType}>{fuelType}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <p style={{ 
                marginBottom: 'var(--spacing-xs)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Price Range
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <div style={{ flex: 1 }}>
                  <label 
                    htmlFor="minPrice" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-xs)',
                      fontSize: 'var(--font-size-xs)'
                    }}
                  >
                    Min
                  </label>
                  <select
                    id="minPrice"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    style={{
                      width: '100%',
                      padding: 'var(--spacing-sm)',
                      backgroundColor: 'var(--tertiary-bg)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option value="">Min</option>
                    <option value="10000">€10,000</option>
                    <option value="20000">€20,000</option>
                    <option value="30000">€30,000</option>
                    <option value="40000">€40,000</option>
                    <option value="50000">€50,000</option>
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label 
                    htmlFor="maxPrice" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-xs)',
                      fontSize: 'var(--font-size-xs)'
                    }}
                  >
                    Max
                  </label>
                  <select
                    id="maxPrice"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    style={{
                      width: '100%',
                      padding: 'var(--spacing-sm)',
                      backgroundColor: 'var(--tertiary-bg)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option value="">Max</option>
                    <option value="30000">€30,000</option>
                    <option value="50000">€50,000</option>
                    <option value="75000">€75,000</option>
                    <option value="100000">€100,000</option>
                    <option value="150000">€150,000</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <p style={{ 
                marginBottom: 'var(--spacing-xs)',
                fontSize: 'var(--font-size-sm)'
              }}>
                Year Range
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                <div style={{ flex: 1 }}>
                  <label 
                    htmlFor="minYear" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-xs)',
                      fontSize: 'var(--font-size-xs)'
                    }}
                  >
                    From
                  </label>
                  <select
                    id="minYear"
                    name="minYear"
                    value={filters.minYear}
                    onChange={handleFilterChange}
                    style={{
                      width: '100%',
                      padding: 'var(--spacing-sm)',
                      backgroundColor: 'var(--tertiary-bg)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option value="">From</option>
                    {years.map(year => (
                      <option key={`min-${year}`} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label 
                    htmlFor="maxYear" 
                    style={{ 
                      display: 'block', 
                      marginBottom: 'var(--spacing-xs)',
                      fontSize: 'var(--font-size-xs)'
                    }}
                  >
                    To
                  </label>
                  <select
                    id="maxYear"
                    name="maxYear"
                    value={filters.maxYear}
                    onChange={handleFilterChange}
                    style={{
                      width: '100%',
                      padding: 'var(--spacing-sm)',
                      backgroundColor: 'var(--tertiary-bg)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option value="">To</option>
                    {years.map(year => (
                      <option key={`max-${year}`} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setFilters({
                make: '',
                model: '',
                category: '',
                fuelType: '',
                minPrice: '',
                maxPrice: '',
                minYear: '',
                maxYear: '',
              })}
              style={{
                width: '100%',
                padding: 'var(--spacing-sm)',
                backgroundColor: 'var(--tertiary-bg)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                marginTop: 'var(--spacing-md)'
              }}
            >
              Reset Filters
            </button>
          </div>

          {/* Car Listings */}
          <div>
            {/* Results Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'var(--spacing-lg)'
            }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'} found
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <label htmlFor="sort" style={{ color: 'var(--text-secondary)' }}>Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={handleSortChange}
                  style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    backgroundColor: 'var(--tertiary-bg)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Year: Newest First</option>
                  <option value="oldest">Year: Oldest First</option>
                </select>
              </div>
            </div>

            {/* Car Grid */}
            {filteredCars.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 'var(--spacing-lg)'
              }}>
                {filteredCars.map((car) => (
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
                          {formatPrice(car.price)}
                        </p>
                        
                        <p style={{ 
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--text-secondary)'
                        }}>
                          {car.location} • {car.category}
                        </p>

                        <div style={{ 
                          display: 'flex',
                          marginTop: 'var(--spacing-sm)',
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--text-secondary)'
                        }}>
                          <span style={{ marginRight: 'var(--spacing-md)' }}>
                            {car.mileage.toLocaleString()} km
                          </span>
                          <span>
                            {car.transmission}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: 'var(--spacing-2xl)',
                backgroundColor: 'var(--secondary-bg)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>No cars match your filters.</p>
                <button 
                  onClick={() => setFilters({
                    make: '',
                    model: '',
                    category: '',
                    fuelType: '',
                    minPrice: '',
                    maxPrice: '',
                    minYear: '',
                    maxYear: '',
                  })}
                  className="button button-secondary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 