const express = require('express');
const cors = require('cors');
const path = require('path');
const NodeCache = require('node-cache');
const app = express();

// Initialize cache with 1 hour default TTL
const cache = new NodeCache({ stdTTL: 3600 });

// Middleware
app.use(cors({
  origin: 'http://localhost:5174', // Your frontend URL
  credentials: true
}));
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Modified cache middleware
const cacheMiddleware = (key, duration) => {
  return (req, res, next) => {
    const cachedData = cache.get(key);
    
    if (cachedData) {
      return res.json(cachedData);
    }
    
    // Store original res.json function
    const originalJson = res.json;
    
    // Override res.json method
    res.json = function(data) {
      // Store in cache before sending
      cache.set(key, data, duration);
      return originalJson.call(this, data);
    };
    
    next();
  };
};

// Services Routes with 1-hour cache
app.get('/api/services/itr', cacheMiddleware('itr_services', 3600), (req, res) => {
  res.json({
    title: "Income Tax Return Filing",
    features: [
      "Individual ITR Filing",
      "Business ITR Filing",
      "Professional ITR Filing"
    ]
  });
});

app.get('/api/services/partnership', cacheMiddleware('partnership_services', 3600), (req, res) => {
  res.json({
    title: "Partnership Deed Services",
    features: [
      "Partnership Registration",
      "Deed Drafting",
      "Legal Consultation",
      "Documentation Support"
    ]
  });
});

app.get('/api/services/accounting', cacheMiddleware('accounting_services', 3600), (req, res) => {
  res.json({
    title: "Accounting Services",
    features: [
      "GST Return Filing",
      "TDS Return Filing",
      "Income Tax Return Filing",
      "Partnership Deed Agreements",
      "Accounting for Shares"
    ]
  });
});

// About Route with 1-day cache
app.get('/api/about', cacheMiddleware('about', 86400), (req, res) => {
  res.json({
    company: "B.V. SWAMI & CO.",
    established: 2000,
    partners: [
      {
        name: "CA. Venugopal Swami B, FCA",
        qualification: "Fellow Member of ICAI",
        experience: "Since 1999"
      },
      {
        name: "CA. Venkataramana S, FCA",
        qualification: "Fellow Member of ICAI",
        experience: "Since 2002"
      }
    ],
    address: "No 3440, SR Harmony, 4th Cross, 10th Main Rd, Bengaluru, Karnataka-560038"
  });
});

// Tax Calculator Route - No cache as it needs fresh calculations
app.post('/api/tax/calculate', (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  const { income, regime = 'new' } = req.body;
  const taxAmount = calculateTax(Number(income), regime);
  
  res.json({
    income: Number(income),
    regime,
    taxAmount
  });
});

// Home Route with 1-hour cache
app.get('/api/home', cacheMiddleware('home', 3600), (req, res) => {
  res.json({
    header: {
      companyName: "B.V. Swami & Co, Chartered Accountants",
      address: "No 3440, SR Harmony, 4th Cross, 10th Main Rd, Bengaluru, Karnataka-560038"
    },
    brand: {
      title: "WELCOME TO OUR WEBSITE",
      description: [
        "B.V. SWAMI & CO. was established in the year 2000. It is a leading chartered accountancy firm rendering comprehensive professional services which include audit, management consultancy, tax consultancy, accounting services, manpower management, secretarial services etc.",
        "We are a professionally managed firm. The team consists of distinguished chartered accountants, corporate financial advisors and tax consultants. The firm represents a combination of specialized skills, which are geared to offers sound financial advice and personalized proactive services.",
        "Those associated with the firm have regular interaction with industry and other professionals which enables the firm to keep pace with contemporary developments and to meet the needs of its clients."
      ]
    }
  });
});

// Add static file serving for production
app.use(express.static(path.join(__dirname, 'my-react-app/dist')));

// Handle React Router routes in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-react-app/dist/index.html'));
});

// Add cache clear endpoint (protected or for development only)
app.post('/api/cache/clear', (req, res) => {
  cache.flushAll();
  res.json({ message: 'Cache cleared successfully' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Tax calculation helper function
function calculateTax(income, regime) {
  let tax = 0;
  if (regime === 'new') {
    // New regime tax calculation
    if (income <= 300000) {
      tax = 0;
    } else if (income <= 600000) {
      tax = (income - 300000) * 0.05;
    } else if (income <= 900000) {
      tax = 15000 + (income - 600000) * 0.10;
    } else if (income <= 1200000) {
      tax = 45000 + (income - 900000) * 0.15;
    } else if (income <= 1500000) {
      tax = 90000 + (income - 1200000) * 0.20;
    } else {
      tax = 150000 + (income - 1500000) * 0.30;
    }
  } else {
    // Old regime tax calculation
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.20;
    } else {
      tax = 112500 + (income - 1000000) * 0.30;
    }
  }
  return Math.round(tax);
}
