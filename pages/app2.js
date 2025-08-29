// Jewelry brands data
const jewelryBrands = [
  {
    "brandName": "Tanishq",
    "website": "https://www.tanishq.co.in",
    "evaluation": "4.8/5 - Most Trusted Brand",
    "marketFocus": "Traditional & Contemporary",
    "uniqueOfferings": "TATA Group heritage, 22k gold watches, wide regional collections, quality checking with 'Karatmeter', 200+ stores"
  },
  {
    "brandName": "Giva",
    "website": "https://www.giva.co",
    "evaluation": "4.5/5 - Rapidly Growing",
    "marketFocus": "Silver & Lab-grown Diamonds",
    "uniqueOfferings": "925 sterling silver, lab-grown diamonds, 6-month warranty, 200+ stores, celebrity endorsed by Karisma Kapoor"
  },
  {
    "brandName": "Palmonas",
    "website": "https://www.palmonas.com",
    "evaluation": "4.6/5 - Shark Tank Success",
    "marketFocus": "Demi-fine Jewelry",
    "uniqueOfferings": "India's first demi-fine brand, waterproof & tarnish-proof, co-founded by Shraddha Kapoor, 18k gold coating"
  },
  {
    "brandName": "Kymee",
    "website": "https://www.kymee.in",
    "evaluation": "4.7/5 - Premium Vermeil",
    "marketFocus": "18k Gold Vermeil",
    "uniqueOfferings": "18k gold vermeil on 925 silver, ethical sourcing, minimalist luxury, affordable luxury alternative"
  },
  {
    "brandName": "Kalyan Jewellers",
    "website": "https://www.kalyanjewellers.net",
    "evaluation": "4.4/5 - IPO Listed",
    "marketFocus": "Traditional Gold & Diamonds",
    "uniqueOfferings": "112-year legacy, transparency in pricing, customer-centric policies, extensive gold collections"
  },
  {
    "brandName": "Malabar Gold & Diamonds",
    "website": "https://www.malabargoldanddiamonds.com",
    "evaluation": "4.3/5 - Global Presence",
    "marketFocus": "Gold & Diamond Jewelry",
    "uniqueOfferings": "250+ showrooms globally, traditional to contemporary designs, Middle East & North America expansion"
  },
  {
    "brandName": "BlueStone",
    "website": "https://www.bluestone.com",
    "evaluation": "4.2/5 - Omnichannel Pioneer",
    "marketFocus": "Online Diamond Jewelry",
    "uniqueOfferings": "7000+ certified designs, VC-funded, lifetime exchange, 30-day returns, try-at-home service"
  },
  {
    "brandName": "CaratLane",
    "website": "https://www.caratlane.com",
    "evaluation": "4.4/5 - Tata Group",
    "marketFocus": "Contemporary Online Jewelry",
    "uniqueOfferings": "Tanishq subsidiary, young consumer focus, contemporary designs, omnichannel presence"
  },
  {
    "brandName": "Melorra",
    "website": "https://www.melorra.com",
    "evaluation": "3.9/5 - Lightweight Designs",
    "marketFocus": "Lightweight Gold & Diamonds",
    "uniqueOfferings": "3D-printed jewelry, 18000+ designs, global fashion trends, 24-hour delivery, starting at ₹3000"
  },
  {
    "brandName": "Zariin",
    "website": "https://www.zariin.com",
    "evaluation": "4.5/5 - Celebrity Favorite",
    "marketFocus": "Fashion Jewelry",
    "uniqueOfferings": "Sisters-founded, celebrity endorsed by Sonam Kapoor & Priyanka Chopra, lifetime warranty on plating"
  },
  {
    "brandName": "Bhima Jewellers",
    "website": "https://www.bhimajewellery.com",
    "evaluation": "4.6/5 - South India Leader",
    "marketFocus": "Traditional Gold",
    "uniqueOfferings": "Est. 1925, 116 stores in South India & UAE, BIS Hallmark, traditional designs"
  },
  {
    "brandName": "Joyalukkas",
    "website": "https://www.joyalukkas.com",
    "evaluation": "4.3/5 - Global Chain",
    "marketFocus": "Gold & Diamond Collections",
    "uniqueOfferings": "85+ showrooms, international presence, trending designs, bridal specialization"
  },
  {
    "brandName": "Senco Gold & Diamonds",
    "website": "https://www.sencogoldanddiamonds.com",
    "evaluation": "4.4/5 - Eastern India Focus",
    "marketFocus": "Traditional & Contemporary",
    "uniqueOfferings": "100+ stores, affordable pricing, Kolkata & North Eastern focus, festival collections"
  },
  {
    "brandName": "PC Jeweller",
    "website": "https://www.pcjeweller.com",
    "evaluation": "4.1/5 - Modern Designs",
    "marketFocus": "Gold & Diamond",
    "uniqueOfferings": "Modern designs, wide wedding jewelry selection, young & traditional buyers"
  },
  {
    "brandName": "Reliance Jewels",
    "website": "https://www.reliancejewels.com",
    "evaluation": "4.2/5 - Reliance Group",
    "marketFocus": "Gold, Diamond & Silver",
    "uniqueOfferings": "115+ stores nationwide, competitive making charges, quality & affordability focus"
  },
  {
    "brandName": "TBZ (Tribhovandas Bhimji Zaveri)",
    "website": "https://www.tbztheoriginal.com",
    "evaluation": "4.5/5 - Century Heritage",
    "marketFocus": "Heritage Jewelry",
    "uniqueOfferings": "100+ year heritage, traditional craftsmanship, modern aesthetics blend"
  },
  {
    "brandName": "Amrapali Jewels",
    "website": "https://www.amrapalijewels.com",
    "evaluation": "4.7/5 - Luxury Heritage",
    "marketFocus": "Luxury Handcrafted",
    "uniqueOfferings": "Celebrity favorite, heritage-inspired designs, luxury jewelry segment leader"
  },
  {
    "brandName": "ORRA",
    "website": "https://www.orra.co.in",
    "evaluation": "4.3/5 - Diamond Specialist",
    "marketFocus": "Diamond Jewelry",
    "uniqueOfferings": "Fine diamond jewelry, bridal collections, contemporary high-quality designs"
  },
  {
    "brandName": "PN Gadgil Jewellers",
    "website": "https://www.pngadgil.com",
    "evaluation": "4.6/5 - 180+ Year Legacy",
    "marketFocus": "Traditional Gold & Diamonds",
    "uniqueOfferings": "Est. 1832, Maharashtra focus, traditional Maharashtrian designs, certified products"
  },
  {
    "brandName": "Manubhai Jewellers",
    "website": "https://www.manubhaijewellers.com",
    "evaluation": "4.4/5 - Mumbai Heritage",
    "marketFocus": "Heritage & Bridal",
    "uniqueOfferings": "Mumbai-based, eclectic heritage designs, bridal specialization, antique-modern fusion"
  },
  {
    "brandName": "GRT Jewellers",
    "website": "https://www.grtjewells.com",
    "evaluation": "4.3/5 - South Indian Focus",
    "marketFocus": "Traditional South Indian",
    "uniqueOfferings": "South Indian designs, temple jewelry, traditional craftsmanship"
  },
  {
    "brandName": "Khazana Jewellery",
    "website": "https://www.khazanajewellery.com",
    "evaluation": "4.2/5 - Affordable Traditional",
    "marketFocus": "Traditional Gold",
    "uniqueOfferings": "South India popular, intricate gold designs, affordable pricing"
  },
  {
    "brandName": "Navratna Jewellers",
    "website": "https://www.navrathanjewellers.com",
    "evaluation": "4.4/5 - Heritage Specialist",
    "marketFocus": "Heritage & Temple Jewelry",
    "uniqueOfferings": "South India brand, heritage jewelry, temple designs, traditional weddings"
  },
  {
    "brandName": "Sukkhi",
    "website": "https://www.sukkhi.com",
    "evaluation": "4.1/5 - Fashion Forward",
    "marketFocus": "Fashion Jewelry",
    "uniqueOfferings": "Est. 2012, trendy designs, competitive prices, 100% CAGR growth, 15 lakh customers"
  },
  {
    "brandName": "Candere by Kalyan Jewellers",
    "website": "https://www.candere.com",
    "evaluation": "4.3/5 - Online Focus",
    "marketFocus": "Online Jewelry Shopping",
    "uniqueOfferings": "Kalyan's online platform, 18000+ customer ratings, modern designs"
  },
  {
    "brandName": "Mia by Tanishq",
    "website": "https://www.miabytanishq.com",
    "evaluation": "4.4/5 - Modern Silver",
    "marketFocus": "Modern Silver Jewelry",
    "uniqueOfferings": "Tanishq sub-brand, modern minimalist designs, sterling silver, affordable luxury"
  },
  {
    "brandName": "Zoya by Tanishq",
    "website": "https://www.zoya.com",
    "evaluation": "4.6/5 - Creative Diamonds",
    "marketFocus": "Creative Diamond Jewelry",
    "uniqueOfferings": "Tanishq's luxury brand, creative diamond designs, premium segment"
  },
  {
    "brandName": "Isharya",
    "website": "https://www.isharya.com",
    "evaluation": "4.2/5 - Modern Women",
    "marketFocus": "Gold Plated Luxury",
    "uniqueOfferings": "Modern designs, working women focus, chunky styles, hypoallergenic, 18k gold plated"
  },
  {
    "brandName": "The Olio Stories",
    "website": "https://www.theoliostories.com",
    "evaluation": "4.5/5 - Celebrity Endorsed",
    "marketFocus": "Heritage Fashion",
    "uniqueOfferings": "Celebrity worn by Sonam Kapoor, Alia Bhatt, 18k gold coated brass, ₹3600 starting"
  },
  {
    "brandName": "Madiha Jaipur",
    "website": "https://www.madihajaipur.com",
    "evaluation": "4.3/5 - Handcrafted",
    "marketFocus": "Handcrafted Sustainable",
    "uniqueOfferings": "Local artisans, recycled materials, zodiac collection, men's accessories, ₹1000 starting"
  },
  {
    "brandName": "Dhuri",
    "website": "https://www.dhuri.in",
    "evaluation": "4.4/5 - Sustainable",
    "marketFocus": "Sustainable Handcraft",
    "uniqueOfferings": "Faridabad-based, ceramic mix from scratch, sustainable approach, ₹1850 starting"
  },
  {
    "brandName": "Azga",
    "website": "https://www.azga.in",
    "evaluation": "4.3/5 - Women-led",
    "marketFocus": "Contemporary Accessories",
    "uniqueOfferings": "Sister duo founded 2014, celebrities like Aamir Khan wear, geometric carvings"
  },
  {
    "brandName": "Touch925",
    "website": "https://www.touch925.com",
    "evaluation": "4.2/5 - Accessible Luxury",
    "marketFocus": "Accessible Luxury",
    "uniqueOfferings": "IIM alumnus founded, luxury accessible to all, diverse age groups, budget-conscious"
  },
  {
    "brandName": "Mesmerize",
    "website": "https://www.mesmerizejewellery.com",
    "evaluation": "4.1/5 - Spiritual Focus",
    "marketFocus": "Spiritual & Natural Stone",
    "uniqueOfferings": "Started 2020, spiritual jewelry, natural stone bracelets, tradition-trend blend"
  },
  {
    "brandName": "Silverline",
    "website": "https://www.silverlinejewellery.com",
    "evaluation": "4.0/5 - Silver Specialist",
    "marketFocus": "Silver Jewelry",
    "uniqueOfferings": "Silver specialization, contemporary designs, affordable pricing"
  },
  {
    "brandName": "Ineze",
    "website": "https://www.ineze.com",
    "evaluation": "4.1/5 - Modern Design",
    "marketFocus": "Modern Fashion",
    "uniqueOfferings": "Contemporary jewelry, modern aesthetic, fashion-forward designs"
  },
  {
    "brandName": "Dhora",
    "website": "https://www.dhora.in",
    "evaluation": "4.3/5 - Geometric Focus",
    "marketFocus": "Geometric Designs",
    "uniqueOfferings": "Geometric silhouettes, perfect gold hoops, architectural inspiration"
  },
  {
    "brandName": "Amama",
    "website": "https://www.amama.in",
    "evaluation": "4.2/5 - Artisanal",
    "marketFocus": "Artisanal Jewelry",
    "uniqueOfferings": "Handcrafted pieces, artisanal approach, unique designs"
  },
  {
    "brandName": "One Nought One One",
    "website": "https://www.ononeoneo.com",
    "evaluation": "4.1/5 - Contemporary",
    "marketFocus": "Contemporary Fashion",
    "uniqueOfferings": "Modern designs, contemporary appeal, fashion jewelry"
  },
  {
    "brandName": "Outhouse Jewellery",
    "website": "https://www.outhousejewellery.com",
    "evaluation": "4.4/5 - Celebrity Favorite",
    "marketFocus": "Luxury Fashion",
    "uniqueOfferings": "Alia Bhatt's Met Gala pieces, bold contemporary designs, luxury segment, ₹2500 starting"
  },
  {
    "brandName": "House Of Aadyaa",
    "website": "https://www.houseofaadyaa.com",
    "evaluation": "4.2/5 - Silver Specialist",
    "marketFocus": "925 Silver Contemporary",
    "uniqueOfferings": "92.5 silver, contemporary designs, Maharashtra flagship store, nose pin collection, ₹999 starting"
  },
  {
    "brandName": "Aaree Accessories",
    "website": "https://www.aareeaccessories.com",
    "evaluation": "4.3/5 - Ethical Brand",
    "marketFocus": "Ethical Handcrafted",
    "uniqueOfferings": "Ethical brand, celebrity endorsed by Vidya Balan, handcrafted pieces, ₹950 starting"
  },
  {
    "brandName": "Quirksmith Jewellery",
    "website": "https://www.quirksmith.com",
    "evaluation": "4.4/5 - Shark Tank Brand",
    "marketFocus": "Indo-Western Silver",
    "uniqueOfferings": "Shark Tank featured, sisters-run, 92.5 sterling silver, conversation starters, ₹450 starting"
  },
  {
    "brandName": "Mookuthi",
    "website": "https://www.mookuthi.com",
    "evaluation": "4.5/5 - Nose Ornament Specialist",
    "marketFocus": "Artisanal Nose Ornaments",
    "uniqueOfferings": "Chennai-based, nose pins & naths specialization, heirloom pieces, ₹10000 starting"
  },
  {
    "brandName": "Shop Lune",
    "website": "https://www.shoplune.com",
    "evaluation": "4.3/5 - High Fashion",
    "marketFocus": "Minimal High Fashion",
    "uniqueOfferings": "Minimal elegant designs, Goa & Bandra stores, high fashion quotient, ₹1000 starting"
  },
  {
    "brandName": "Parnika",
    "website": "https://www.parnika.co",
    "evaluation": "4.4/5 - Silver Heritage",
    "marketFocus": "925 Silver Heritage",
    "uniqueOfferings": "Est. 2002 Agra, 925 silver specialist, 20+ years experience, antimicrobial properties"
  },
  {
    "brandName": "Vamika Silver",
    "website": "https://www.vamikasilver.com",
    "evaluation": "4.5/5 - Luxury Silver",
    "marketFocus": "Luxury Silver Kundan",
    "uniqueOfferings": "Jaipur-based, kundan-jadau heirlooms, empowered women inspiration, luxury-wearability fusion"
  },
  {
    "brandName": "Voylla",
    "website": "https://www.voylla.com",
    "evaluation": "4.1/5 - Omnichannel Fashion",
    "marketFocus": "Fashion Jewelry",
    "uniqueOfferings": "Est. 2011 Jaipur, 250 offline stores, men's jewelry since 2015, omnichannel presence"
  },
  {
    "brandName": "Pipa Bella",
    "website": "https://www.pipabella.com",
    "evaluation": "4.2/5 - Nykaa Acquired",
    "marketFocus": "Custom Fashion Jewelry",
    "uniqueOfferings": "Acquired by Nykaa 2021, ₹500-₹3000 range, 100 new styles weekly, 22-35 age group"
  },
  {
    "brandName": "IskiUski",
    "website": "https://www.iskiuski.com",
    "evaluation": "4.0/5 - Online Diamond",
    "marketFocus": "Online Diamond Shopping",
    "uniqueOfferings": "Est. 2014, changing diamond buying in India, reasonable rates, intricate designs"
  },
  {
    "brandName": "Swashaa Jewellery",
    "website": "https://www.swashaa.com",
    "evaluation": "4.1/5 - Trending Affordable",
    "marketFocus": "Trending Affordable",
    "uniqueOfferings": "Trending designs, bulk purchase discounts, affordable jewelry focus"
  },
  {
    "brandName": "Salty Accessories",
    "website": "https://www.salty.co.in",
    "evaluation": "4.3/5 - Korean Style",
    "marketFocus": "Korean & Western Fashion",
    "uniqueOfferings": "India's first Korean jewelry brand, 6000+ 5-star reviews, Government of India funded"
  },
  {
    "brandName": "Adore By Priyanka",
    "website": "https://www.adorebypriyanka.com",
    "evaluation": "4.2/5 - Handcrafted Fashion",
    "marketFocus": "Handcrafted Fashion",
    "uniqueOfferings": "Exquisite fashion jewelry, handcrafted designs, unique pieces for every occasion"
  },
  {
    "brandName": "The Fun Company",
    "website": "https://www.thefuncompany.in",
    "evaluation": "4.0/5 - Anti-Tarnish",
    "marketFocus": "Anti-Tarnish Fashion",
    "uniqueOfferings": "Anti-tarnish technology, ₹299 for 4 styles, trendy gold-plated fashion jewelry"
  }
];

// Global variables
let currentData = [...jewelryBrands];
let currentSort = { column: null, direction: null };

// Apply filter based on category
function applyFilter(data, category) {
  return data.filter(brand => {
    return brand.marketFocus.toLowerCase().includes(category.toLowerCase());
  });
}

// Create market focus badges
function createMarketFocusBadges(marketFocus) {
  const badges = [];
  const focusAreas = marketFocus.split(/[&,]/).map(item => item.trim());

  focusAreas.forEach(focus => {
    let badgeClass = 'market-badge--default';
    const focusLower = focus.toLowerCase();

    if (focusLower.includes('traditional')) badgeClass = 'market-badge--traditional';
    else if (focusLower.includes('contemporary')) badgeClass = 'market-badge--contemporary';
    else if (focusLower.includes('silver')) badgeClass = 'market-badge--silver';
    else if (focusLower.includes('diamond')) badgeClass = 'market-badge--diamond';
    else if (focusLower.includes('fashion')) badgeClass = 'market-badge--fashion';
    else if (focusLower.includes('luxury')) badgeClass = 'market-badge--luxury';
    else if (focusLower.includes('heritage')) badgeClass = 'market-badge--heritage';
    else if (focusLower.includes('online')) badgeClass = 'market-badge--online';

    badges.push(`<span class="market-badge ${badgeClass}">${focus}</span>`);
  });

  return badges.join('');
}

// Render the table
function renderTable(data) {
  const tableBody = document.getElementById('tableBody');
  const noResults = document.getElementById('noResults');
  
  if (!tableBody) return;

  if (data.length === 0) {
    tableBody.innerHTML = '';
    if (noResults) {
      noResults.classList.remove('hidden');
    }
    return;
  }

  if (noResults) {
    noResults.classList.add('hidden');
  }

  const rows = data.map(brand => {
    return `
      <tr>
        <td>
          <div class="brand-name">${brand.brandName}</div>
        </td>
        <td>
          <a href="${brand.website}" target="_blank" class="website-link" rel="noopener noreferrer">
            ${brand.website}
          </a>
        </td>
        <td>
          <div class="evaluation">${brand.evaluation}</div>
        </td>
        <td>
          <div class="market-focus">
            ${createMarketFocusBadges(brand.marketFocus)}
          </div>
        </td>
        <td>
          <div class="unique-offerings">${brand.uniqueOfferings}</div>
        </td>
      </tr>
    `;
  }).join('');

  tableBody.innerHTML = rows;
}

// Update brand count
function updateBrandCount(count) {
  const brandCount = document.getElementById('brandCount');
  if (brandCount) {
    brandCount.textContent = count;
  }
}

// Handle search functionality
function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (searchTerm === '') {
    currentData = [...jewelryBrands];
  } else {
    currentData = jewelryBrands.filter(brand => {
      return brand.brandName.toLowerCase().includes(searchTerm) ||
             brand.website.toLowerCase().includes(searchTerm) ||
             brand.evaluation.toLowerCase().includes(searchTerm) ||
             brand.marketFocus.toLowerCase().includes(searchTerm) ||
             brand.uniqueOfferings.toLowerCase().includes(searchTerm);
    });
  }

  // Apply current filter if any
  const activeFilter = document.querySelector('.filter-btn.active');
  if (activeFilter && activeFilter.dataset.category !== 'all') {
    currentData = applyFilter(currentData, activeFilter.dataset.category);
  }

  renderTable(currentData);
  updateBrandCount(currentData.length);
}

// Handle filter functionality
function handleFilter(event) {
  const category = event.target.dataset.category;
  
  // Update active filter button
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Apply filter
  if (category === 'all') {
    currentData = [...jewelryBrands];
  } else {
    currentData = applyFilter(jewelryBrands, category);
  }

  // Apply search if there's a search term
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm) {
    currentData = currentData.filter(brand => {
      return brand.brandName.toLowerCase().includes(searchTerm) ||
             brand.website.toLowerCase().includes(searchTerm) ||
             brand.evaluation.toLowerCase().includes(searchTerm) ||
             brand.marketFocus.toLowerCase().includes(searchTerm) ||
             brand.uniqueOfferings.toLowerCase().includes(searchTerm);
    });
  }

  renderTable(currentData);
  updateBrandCount(currentData.length);
}

// Handle sorting functionality
function handleSort(event) {
  const column = event.target.dataset.column;
  
  // Determine sort direction
  let direction = 'asc';
  if (currentSort.column === column && currentSort.direction === 'asc') {
    direction = 'desc';
  }

  // Update sort state
  currentSort = { column, direction };

  // Update header indicators
  const sortableHeaders = document.querySelectorAll('.sortable');
  sortableHeaders.forEach(header => {
    header.classList.remove('sort-asc', 'sort-desc');
  });
  event.target.classList.add(direction === 'asc' ? 'sort-asc' : 'sort-desc');

  // Sort data
  currentData.sort((a, b) => {
    let aVal = a[column];
    let bVal = b[column];

    // Special handling for evaluation (extract number)
    if (column === 'evaluation') {
      aVal = parseFloat(aVal.split('/')[0]);
      bVal = parseFloat(bVal.split('/')[0]);
    }

    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }

    if (direction === 'asc') {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    } else {
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    }
  });

  renderTable(currentData);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Initial render
  renderTable(currentData);
  updateBrandCount(currentData.length);

  // Setup search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  // Setup filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', handleFilter);
  });

  // Setup sorting
  const sortableHeaders = document.querySelectorAll('.sortable');
  sortableHeaders.forEach(header => {
    header.addEventListener('click', handleSort);
  });
});