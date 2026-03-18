/**
 * CAR MARKETPLACE - MAIN JAVASCRIPT
 * ================================
 */

// ============================================
// DATA STORAGE & MANAGEMENT
// ============================================

const Storage = {
  get(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },
  
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  
  remove(key) {
    localStorage.removeItem(key);
  }
};

// Initialize default data
function initializeData() {
  if (!Storage.get('cars')) {
    const defaultCars = [
      {
        id: 1,
        title: '2023 BMW M4 Competition',
        brand: 'BMW',
        model: 'M4',
        year: 2023,
        price: 85000,
        originalPrice: 92000,
        mileage: 5000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        color: 'Black',
        engine: '3.0L I6',
        horsepower: 503,
        type: 'sale',
        status: 'available',
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
        images: [
          'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
          'https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=800',
          'https://images.unsplash.com/photo-1555215695-3004980adade?w=800'
        ],
        description: 'Model - G CLASS',
        description1: 'VIN - **********X301733',
        description2: 'Make - Mercedes-Benz',
        description3: 'Engine - 4.0L V-8 DI, DOHC, VVT, turbo, 416HP',
        description4: 'Sale Doc - SALVAGE(Connecticut)',
        features: ['Leather Seats', 'Navigation', 'Sunroof', 'Premium Sound'],
        auctionEnd: null,
        currentBid: null,
        bids: []
      },
      {
        id: 2,
        title: '2022 Mercedes-AMG GT',
        brand: 'Mercedes',
        model: 'AMG GT',
        year: 2022,
        price: 120000,
        originalPrice: null,
        mileage: 8000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        color: 'Silver',
        engine: '4.0L V8',
        horsepower: 523,
        type: 'auction',
        status: 'available',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
        images: [
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
          'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800'
        ],
        description: 'Stunning Mercedes-AMG GT with incredible performance.',
        features: ['Sport Package', 'Carbon Fiber', 'Racing Seats'],
        auctionEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        currentBid: 115000,
        bids: [
          { user: 'John D.', amount: 115000, time: new Date().toISOString() }
        ]
      },
      {
        id: 3,
        title: '2023 Audi RS7 Sportback',
        brand: 'Audi',
        model: 'RS7',
        year: 2023,
        price: 125000,
        originalPrice: 135000,
        mileage: 3000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        color: 'Blue',
        engine: '4.0L V8',
        horsepower: 591,
        type: 'sale',
        status: 'available',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800',
        images: [
          'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'
        ],
        description: 'The perfect blend of luxury and performance.',
        features: ['Matrix LED', 'Bang & Olufsen', 'Virtual Cockpit'],
        auctionEnd: null,
        currentBid: null,
        bids: []
      },
      {
        id: 4,
        title: '2021 Porsche 911 Turbo S',
        brand: 'Porsche',
        model: '911',
        year: 2021,
        price: 230000,
        originalPrice: null,
        mileage: 12000,
        fuelType: 'Petrol',
        transmission: 'PDK',
        color: 'White',
        engine: '3.8L Flat-6',
        horsepower: 640,
        type: 'auction',
        status: 'available',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
        images: [
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
          'https://images.unsplash.com/photo-1544829099-f9c5a70b2dee?w=800'
        ],
        description: 'Iconic 911 Turbo S with unmatched performance.',
        features: ['Sport Chrono', 'PASM', 'Rear Axle Steering'],
        auctionEnd: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        currentBid: 220000,
        bids: [
          { user: 'Mike R.', amount: 220000, time: new Date().toISOString() }
        ]
      },
      {
        id: 5,
        title: '2023 Tesla Model S Plaid',
        brand: 'Tesla',
        model: 'Model S',
        year: 2023,
        price: 110000,
        originalPrice: 125000,
        mileage: 2000,
        fuelType: 'Electric',
        transmission: 'Automatic',
        color: 'Red',
        engine: 'Tri Motor',
        horsepower: 1020,
        type: 'sale',
        status: 'available',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
        images: [
          'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
          'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800'
        ],
        description: 'The fastest accelerating production car ever made.',
        features: ['Autopilot', 'Full Self-Driving', '17" Cinema Display'],
        auctionEnd: null,
        currentBid: null,
        bids: []
      },
      {
        id: 6,
        title: '2022 Lamborghini Huracan',
        brand: 'Lamborghini',
        model: 'Huracan',
        year: 2022,
        price: 280000,
        originalPrice: null,
        mileage: 6000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        color: 'Yellow',
        engine: '5.2L V10',
        horsepower: 631,
        type: 'auction',
        status: 'available',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
        images: [
          'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
          'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800'
        ],
        description: 'Pure Italian supercar excellence.',
        features: ['ANIMA System', 'Carbon Ceramic Brakes', 'Lift System'],
        auctionEnd: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        currentBid: 270000,
        bids: [
          { user: 'Alex K.', amount: 270000, time: new Date().toISOString() }
        ]
      }
    ];
    Storage.set('cars', defaultCars);
  }
   if (!Storage.get('users')) {
    Storage.set('users', []);
  }
  
  if (!Storage.get('currentUser')) {
    Storage.set('currentUser', null);
  }
  
  if (!Storage.get('cart')) {
    Storage.set('cart', []);
  }
  
  if (!Storage.get('purchases')) {
    Storage.set('purchases', []);
  }
  
  if (!Storage.get('wallet')) {
    Storage.set('wallet', { balance: 0 });
  }
}