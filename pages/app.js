// Indian Jewelry Brands Database Application
class JewelryBrandsApp {
    constructor() {
        this.brands = [];
        this.filteredBrands = [];
        this.currentSort = { field: null, direction: 'asc' };
        this.searchTerm = '';
        this.filters = {
            year: '',
            focus: '',
            valuation: ''
        };
        
        this.init();
    }

    init() {
        this.loadData();
        this.bindEvents();
        this.populateFilters();
        this.renderTable();
        this.updateStats();
    }

    loadData() {
        // Jewelry brands data
        this.brands = [
            {
                "Brand Name": "Tanishq",
                "Website": "https://www.tanishq.co.in",
                "Founded Year": 1994,
                "Valuation (USD Million)": "Part of Titan Company (Market Cap ~$40B)",
                "Market Focus": "Traditional & Contemporary Gold, Diamond Jewelry",
                "Unique Offerings": "Karatmeter purity checks, BIS Hallmarked jewelry, Rivaah bridal collection"
            },
            {
                "Brand Name": "Kalyan Jewellers",
                "Website": "https://www.kalyanjewellers.net",
                "Founded Year": 1993,
                "Valuation (USD Million)": "Market Cap ~$6.5B",
                "Market Focus": "Traditional South Indian, Bridal Jewelry",
                "Unique Offerings": "4-Level Assurance, Lifetime maintenance, Regional collections"
            },
            {
                "Brand Name": "Malabar Gold & Diamonds",
                "Website": "https://www.malabargoldanddiamonds.com",
                "Founded Year": 1993,
                "Valuation (USD Million)": "Estimated $3B+",
                "Market Focus": "Gold, Diamond, Platinum collections",
                "Unique Offerings": "Global presence, Traditional & Contemporary designs"
            },
            {
                "Brand Name": "Tribhovandas Bhimji Zaveri (TBZ)",
                "Website": "https://www.tbz.in",
                "Founded Year": 1864,
                "Valuation (USD Million)": "Listed company ~$300M",
                "Market Focus": "Luxury Wedding Jewelry",
                "Unique Offerings": "Heritage brand, Royal wedding collections"
            },
            {
                "Brand Name": "CaratLane",
                "Website": "https://www.caratlane.com",
                "Founded Year": 2008,
                "Valuation (USD Million)": "Part of Tanishq, $200M+",
                "Market Focus": "Online lightweight jewelry",
                "Unique Offerings": "Digital-first omnichannel, Modern minimalist designs"
            },
            {
                "Brand Name": "PC Jeweller",
                "Website": "https://www.pcjeweller.com",
                "Founded Year": 2005,
                "Valuation (USD Million)": "Listed company ~$100M",
                "Market Focus": "Gold & Diamond jewelry",
                "Unique Offerings": "Modern designs, Wide showroom network"
            },
            {
                "Brand Name": "Joyalukkas",
                "Website": "https://www.joyalukkas.com",
                "Founded Year": 1987,
                "Valuation (USD Million)": "Estimated $4.4B (Joy Alukkas net worth)",
                "Market Focus": "Global jewelry retailer",
                "Unique Offerings": "World's largest single-family owned jewelry chain, Forevermark diamonds"
            },
            {
                "Brand Name": "Bhima Jewellers",
                "Website": "https://www.bhima.com",
                "Founded Year": 1925,
                "Valuation (USD Million)": "Estimated $2B+ (Turnover $6B)",
                "Market Focus": "Traditional South Indian jewelry",
                "Unique Offerings": "Century-old legacy, Ready-made jewelry pioneer"
            },
            {
                "Brand Name": "GRT Jewellers",
                "Website": "https://www.grtjewels.com",
                "Founded Year": 1964,
                "Valuation (USD Million)": "Private, estimated $1B+",
                "Market Focus": "South Indian traditional jewelry",
                "Unique Offerings": "Heritage craftsmanship, Regional designs"
            },
            {
                "Brand Name": "Senco Gold & Diamonds",
                "Website": "https://www.senco.co.in",
                "Founded Year": 1938,
                "Valuation (USD Million)": "Listed company ~$500M",
                "Market Focus": "Eastern India, Bengali designs",
                "Unique Offerings": "Karatmeter gold purity checks, Traditional Bengali jewelry"
            },
            {
                "Brand Name": "Reliance Jewels",
                "Website": "https://www.reliancejewels.com",
                "Founded Year": 2007,
                "Valuation (USD Million)": "Part of Reliance Retail ~$100M",
                "Market Focus": "Budget-friendly designer jewelry",
                "Unique Offerings": "Affordable pricing, Modern designs for daily wear"
            },
            {
                "Brand Name": "P.N. Gadgil Jewellers",
                "Website": "https://www.pngadgil.com",
                "Founded Year": 1832,
                "Valuation (USD Million)": "Listed company ~$400M",
                "Market Focus": "Maharashtra regional jewelry",
                "Unique Offerings": "Oldest jewelry brand, Traditional & Contemporary"
            },
            {
                "Brand Name": "BlueStone",
                "Website": "https://www.bluestone.com",
                "Founded Year": 2011,
                "Valuation (USD Million)": "Seeking $1.4B IPO valuation",
                "Market Focus": "Online diamond jewelry",
                "Unique Offerings": "Digital-first platform, Custom designs"
            },
            {
                "Brand Name": "Candere",
                "Website": "https://www.candere.com",
                "Founded Year": 2013,
                "Valuation (USD Million)": "Part of Kalyan Group",
                "Market Focus": "Lightweight lifestyle jewelry",
                "Unique Offerings": "Kalyan's online brand, Modern designs"
            },
            {
                "Brand Name": "Voylla",
                "Website": "https://www.voylla.com",
                "Founded Year": 2011,
                "Valuation (USD Million)": "Estimated $50M",
                "Market Focus": "Fashion jewelry",
                "Unique Offerings": "Trendy accessories, Affordable pricing"
            },
            {
                "Brand Name": "Amrapali",
                "Website": "https://www.amrapalijewels.com",
                "Founded Year": 1978,
                "Valuation (USD Million)": "Estimated $100M+",
                "Market Focus": "Luxury handcrafted jewelry",
                "Unique Offerings": "Celebrity favorite, Heritage-inspired collections"
            },
            {
                "Brand Name": "Khazana Jewellery",
                "Website": "https://www.khazanajewellery.com",
                "Founded Year": 1992,
                "Valuation (USD Million)": "Private, estimated $200M",
                "Market Focus": "South Indian traditional",
                "Unique Offerings": "Intricate gold designs, Affordable pricing"
            },
            {
                "Brand Name": "Jos Alukkas",
                "Website": "https://www.josalukkas.com",
                "Founded Year": 1956,
                "Valuation (USD Million)": "Part of Alukkas Group",
                "Market Focus": "Premium jewelry",
                "Unique Offerings": "Heritage brand, International presence"
            },
            {
                "Brand Name": "Manubhai Jewellers",
                "Website": "https://www.manubhai.in",
                "Founded Year": 1952,
                "Valuation (USD Million)": "Private, estimated $150M",
                "Market Focus": "Mumbai-based traditional",
                "Unique Offerings": "Bridal specialists, Kundan jewelry"
            },
            {
                "Brand Name": "Shubh Jewellers",
                "Website": "https://www.shubhjewellers.com",
                "Founded Year": 1995,
                "Valuation (USD Million)": "Part of Rajesh Exports",
                "Market Focus": "Affordable gold jewelry",
                "Unique Offerings": "Middle-class focused, Contemporary designs"
            },
            {
                "Brand Name": "Giva",
                "Website": "https://www.giva.co",
                "Founded Year": 2019,
                "Valuation (USD Million)": "Estimated $50M",
                "Market Focus": "Silver & lab-grown diamonds",
                "Unique Offerings": "Contemporary designs, 100+ stores"
            },
            {
                "Brand Name": "Quirksmith",
                "Website": "https://www.quirksmith.com",
                "Founded Year": 2018,
                "Valuation (USD Million)": "Shark Tank funded",
                "Market Focus": "925 sterling silver",
                "Unique Offerings": "Indo-Western designs, Conversation starters"
            },
            {
                "Brand Name": "Emporia Jewels",
                "Website": "https://www.emporiajewels.in",
                "Founded Year": 2020,
                "Valuation (USD Million)": "Startup, estimated $5M",
                "Market Focus": "Artificial jewelry",
                "Unique Offerings": "Instagram-driven sales, Gen Z focused"
            },
            {
                "Brand Name": "The Olio Stories",
                "Website": "https://www.theolios.com",
                "Founded Year": 2016,
                "Valuation (USD Million)": "Estimated $20M",
                "Market Focus": "Brass & gold-plated",
                "Unique Offerings": "Celebrity endorsed, Indian craftsmanship"
            },
            {
                "Brand Name": "Zariin",
                "Website": "https://www.zariin.com",
                "Founded Year": 2014,
                "Valuation (USD Million)": "Estimated $15M",
                "Market Focus": "Contemporary accessories",
                "Unique Offerings": "Modern minimalist, Urban styling"
            },
            {
                "Brand Name": "Parnika",
                "Website": "https://www.parnika.co",
                "Founded Year": 2002,
                "Valuation (USD Million)": "Private, estimated $25M",
                "Market Focus": "925 silver jewelry",
                "Unique Offerings": "20+ years offline, 8 years online presence"
            },
            {
                "Brand Name": "Silverline",
                "Website": "https://www.silverline.in",
                "Founded Year": 2010,
                "Valuation (USD Million)": "Private, estimated $10M",
                "Market Focus": "Silver accessories",
                "Unique Offerings": "Handcrafted designs, Regional motifs"
            },
            {
                "Brand Name": "Dhora",
                "Website": "https://www.dhora.in",
                "Founded Year": 2015,
                "Valuation (USD Million)": "Boutique brand $5M",
                "Market Focus": "Rajasthani inspired",
                "Unique Offerings": "Artisan crafted, Tribal designs"
            },
            {
                "Brand Name": "Solitario",
                "Website": "https://www.solitario.in",
                "Founded Year": 2019,
                "Valuation (USD Million)": "Estimated $30M",
                "Market Focus": "Lab-grown diamonds",
                "Unique Offerings": "Vivek Oberoi founded, Burj Khalifa featured"
            },
            {
                "Brand Name": "Fiona Diamonds",
                "Website": "https://www.fionadiamonds.com",
                "Founded Year": 2016,
                "Valuation (USD Million)": "Estimated $25M",
                "Market Focus": "Lab-created diamonds",
                "Unique Offerings": "Pioneer in lab diamonds, Lifetime exchange"
            },
            {
                "Brand Name": "Emori",
                "Website": "https://www.emori.in",
                "Founded Year": 2023,
                "Valuation (USD Million)": "Startup $5M",
                "Market Focus": "Lab-grown diamonds",
                "Unique Offerings": "Personal story jewelry, Sustainability focused"
            },
            {
                "Brand Name": "Limelight",
                "Website": "https://www.limelightlgd.com",
                "Founded Year": 2019,
                "Valuation (USD Million)": "Estimated $20M",
                "Market Focus": "Lab-grown diamonds",
                "Unique Offerings": "30 brand outlets, Conscious choices"
            },
            {
                "Brand Name": "Surana Jewellers",
                "Website": "https://www.suranajewellers.com",
                "Founded Year": 1700,
                "Valuation (USD Million)": "Heritage brand $50M+",
                "Market Focus": "Vintage authentic designs",
                "Unique Offerings": "18th century legacy, Meenakari art"
            },
            {
                "Brand Name": "Waman Hari Pethe",
                "Website": "https://www.whpjewellers.com",
                "Founded Year": 1909,
                "Valuation (USD Million)": "Private $100M+",
                "Market Focus": "Traditional Maharashtrian",
                "Unique Offerings": "Century-old legacy, Regional designs"
            },
            {
                "Brand Name": "Orra",
                "Website": "https://www.orra.co.in",
                "Founded Year": 2000,
                "Valuation (USD Million)": "Estimated $150M",
                "Market Focus": "Fine diamond jewelry",
                "Unique Offerings": "Contemporary designs, Diamond specialist"
            },
            {
                "Brand Name": "Zoya by Tata",
                "Website": "https://www.zoya.com",
                "Founded Year": 2008,
                "Valuation (USD Million)": "Part of Tanishq luxury",
                "Market Focus": "Luxury diamond jewelry",
                "Unique Offerings": "Tata luxury brand, Creative diamonds"
            },
            {
                "Brand Name": "Mia by Tanishq",
                "Website": "https://www.miabytanishq.com",
                "Founded Year": 2011,
                "Valuation (USD Million)": "Part of Tanishq",
                "Market Focus": "Working women jewelry",
                "Unique Offerings": "Sub-brand of Tanishq, Modern & affordable"
            },
            {
                "Brand Name": "Outhouse Jewellery",
                "Website": "https://www.outhousejewellery.com",
                "Founded Year": 2012,
                "Valuation (USD Million)": "Estimated $15M",
                "Market Focus": "Avant-garde luxury",
                "Unique Offerings": "Bollywood favorite, Contemporary bold designs"
            },
            {
                "Brand Name": "Johori",
                "Website": "https://www.johori.com",
                "Founded Year": 2018,
                "Valuation (USD Million)": "Boutique $8M",
                "Market Focus": "Heritage meets modern",
                "Unique Offerings": "Jaipur-based, Kundan & Meenakari"
            },
            {
                "Brand Name": "Pipa Bella",
                "Website": "https://www.pipabella.com",
                "Founded Year": 2016,
                "Valuation (USD Million)": "Fashion jewelry $12M",
                "Market Focus": "Trendy accessories",
                "Unique Offerings": "Celebrity collaborations, Fashion-forward"
            },
            {
                "Brand Name": "TARA Jewellers",
                "Website": "https://www.tarajewellers.com",
                "Founded Year": 1985,
                "Valuation (USD Million)": "Private $75M",
                "Market Focus": "Contemporary gold & diamond",
                "Unique Offerings": "Minimalist designs, Urban buyers"
            },
            {
                "Brand Name": "Navrathan Jewellers",
                "Website": "https://www.navrathanjewellers.com",
                "Founded Year": 1975,
                "Valuation (USD Million)": "Private $60M",
                "Market Focus": "South Indian heritage",
                "Unique Offerings": "Temple jewelry specialist, Traditional weddings"
            },
            {
                "Brand Name": "Mookuthi",
                "Website": "https://www.mookuthi.com",
                "Founded Year": 2015,
                "Valuation (USD Million)": "Niche $5M",
                "Market Focus": "Artisanal nose ornaments",
                "Unique Offerings": "Chennai-based, Specialized naths & nose pins"
            },
            {
                "Brand Name": "Asian Star Company",
                "Website": "https://www.asianstarcompany.com",
                "Founded Year": 1971,
                "Valuation (USD Million)": "Private $100M",
                "Market Focus": "Integrated diamond jewelry",
                "Unique Offerings": "Manufacturer & retailer, Custom designs"
            },
            {
                "Brand Name": "Kiran Gems",
                "Website": "https://www.kirangems.com",
                "Founded Year": 1985,
                "Valuation (USD Million)": "World's largest diamond manufacturer",
                "Market Focus": "Diamond manufacturing",
                "Unique Offerings": "Natural polished diamonds, Global supplier"
            },
            {
                "Brand Name": "Rajesh Exports",
                "Website": "https://www.rajeshexports.com",
                "Founded Year": 1995,
                "Valuation (USD Million)": "Listed company $2B+",
                "Market Focus": "Gold processing & jewelry",
                "Unique Offerings": "Gold medals & bullion, Handmade jewelry"
            },
            {
                "Brand Name": "Hari Krishna Exports",
                "Website": "https://www.harikrishnaexports.com",
                "Founded Year": 1992,
                "Valuation (USD Million)": "Private $500M+",
                "Market Focus": "Diamond manufacturing",
                "Unique Offerings": "Trusted diamond supplier, Mumbai-based"
            },
            {
                "Brand Name": "Shop Lune",
                "Website": "https://www.shoplune.com",
                "Founded Year": 2018,
                "Valuation (USD Million)": "Boutique $10M",
                "Market Focus": "Minimal elegant jewelry",
                "Unique Offerings": "High fashion quotient, Goa & Mumbai stores"
            },
            {
                "Brand Name": "House of Aadyaa",
                "Website": "https://www.houseofaadyaa.com",
                "Founded Year": 2017,
                "Valuation (USD Million)": "Growing brand $8M",
                "Market Focus": "92.5 silver contemporary",
                "Unique Offerings": "Handcrafted designs, Maharashtra flagship"
            },
            {
                "Brand Name": "Aaree Accessories",
                "Website": "https://www.aareeaccessories.com",
                "Founded Year": 2019,
                "Valuation (USD Million)": "Ethical brand $6M",
                "Market Focus": "Gold-plated jewelry",
                "Unique Offerings": "Celebrity endorsed, Ethical practices"
            },
            {
                "Brand Name": "Madiha Jaipur",
                "Website": "https://www.madihajaipur.com",
                "Founded Year": 2016,
                "Valuation (USD Million)": "Artisan brand $4M",
                "Market Focus": "Handcrafted by artisans",
                "Unique Offerings": "Recycled wood, Zodiac collection"
            },
            {
                "Brand Name": "Dhuri",
                "Website": "https://www.dhuri.in",
                "Founded Year": 2017,
                "Valuation (USD Million)": "Sustainable $3M",
                "Market Focus": "Sustainable handcrafted",
                "Unique Offerings": "Faridabad-based, Ceramic mix from scratch"
            }
        ];

        this.filteredBrands = [...this.brands];
    }

    bindEvents() {
        // Ensure DOM is ready before binding events
        setTimeout(() => {
            // Search functionality with immediate binding
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    this.searchTerm = e.target.value.toLowerCase();
                    this.applyFilters();
                });
            }

            // Filter dropdowns
            const yearFilter = document.getElementById('yearFilter');
            if (yearFilter) {
                yearFilter.addEventListener('change', (e) => {
                    this.filters.year = e.target.value;
                    this.applyFilters();
                });
            }

            const focusFilter = document.getElementById('focusFilter');
            if (focusFilter) {
                focusFilter.addEventListener('change', (e) => {
                    this.filters.focus = e.target.value;
                    this.applyFilters();
                });
            }

            const valuationFilter = document.getElementById('valuationFilter');
            if (valuationFilter) {
                valuationFilter.addEventListener('change', (e) => {
                    this.filters.valuation = e.target.value;
                    this.applyFilters();
                });
            }

            // Reset filters
            const resetBtn = document.getElementById('resetFilters');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    this.resetFilters();
                });
            }

            // Export CSV
            const exportBtn = document.getElementById('exportBtn');
            if (exportBtn) {
                exportBtn.addEventListener('click', () => {
                    this.exportToCSV();
                });
            }

            // Table sorting
            const sortableHeaders = document.querySelectorAll('.sortable');
            sortableHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const field = header.dataset.sort;
                    this.sortTable(field);
                });
            });
        }, 100);
    }

    populateFilters() {
        // Populate market focus filter
        const focusFilter = document.getElementById('focusFilter');
        if (!focusFilter) return;

        const focusOptions = [...new Set(this.brands.map(brand => {
            const focus = brand['Market Focus'];
            // Extract main category
            if (focus.includes('Traditional')) return 'Traditional';
            if (focus.includes('Diamond')) return 'Diamond';
            if (focus.includes('Online')) return 'Online';
            if (focus.includes('Silver')) return 'Silver';
            if (focus.includes('Fashion')) return 'Fashion';
            if (focus.includes('Luxury')) return 'Luxury';
            if (focus.includes('Lab-grown') || focus.includes('Lab-created')) return 'Lab-grown';
            if (focus.includes('Contemporary')) return 'Contemporary';
            return 'Other';
        }))].sort();

        // Clear existing options except first one
        while (focusFilter.children.length > 1) {
            focusFilter.removeChild(focusFilter.lastChild);
        }

        focusOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            focusFilter.appendChild(optionElement);
        });
    }

    applyFilters() {
        let filtered = [...this.brands];

        // Apply search filter
        if (this.searchTerm) {
            filtered = filtered.filter(brand =>
                brand['Brand Name'].toLowerCase().includes(this.searchTerm)
            );
        }

        // Apply year filter
        if (this.filters.year) {
            filtered = filtered.filter(brand => {
                const year = brand['Founded Year'];
                switch (this.filters.year) {
                    case 'before-1950':
                        return year < 1950;
                    case '1950-1970':
                        return year >= 1950 && year < 1970;
                    case '1970-1990':
                        return year >= 1970 && year < 1990;
                    case '1990-2010':
                        return year >= 1990 && year <= 2010;
                    case '2010+':
                        return year > 2010;
                    default:
                        return true;
                }
            });
        }

        // Apply focus filter
        if (this.filters.focus) {
            filtered = filtered.filter(brand =>
                brand['Market Focus'].includes(this.filters.focus) ||
                this.extractMainFocus(brand['Market Focus']) === this.filters.focus
            );
        }

        // Apply valuation filter
        if (this.filters.valuation) {
            filtered = filtered.filter(brand => {
                const valuation = brand['Valuation (USD Million)'];
                const numericValue = this.extractNumericValue(valuation);
                
                switch (this.filters.valuation) {
                    case 'under-10m':
                        return numericValue > 0 && numericValue < 10;
                    case '10m-50m':
                        return numericValue >= 10 && numericValue < 50;
                    case '50m-200m':
                        return numericValue >= 50 && numericValue < 200;
                    case '200m+':
                        return numericValue >= 200;
                    case 'public':
                        return valuation.toLowerCase().includes('listed') || 
                               valuation.toLowerCase().includes('market cap');
                    default:
                        return true;
                }
            });
        }

        this.filteredBrands = filtered;
        this.renderTable();
        this.updateStats();
    }

    extractMainFocus(focus) {
        if (focus.includes('Traditional')) return 'Traditional';
        if (focus.includes('Diamond')) return 'Diamond';
        if (focus.includes('Online')) return 'Online';
        if (focus.includes('Silver')) return 'Silver';
        if (focus.includes('Fashion')) return 'Fashion';
        if (focus.includes('Luxury')) return 'Luxury';
        if (focus.includes('Lab-grown') || focus.includes('Lab-created')) return 'Lab-grown';
        if (focus.includes('Contemporary')) return 'Contemporary';
        return 'Other';
    }

    extractNumericValue(valuationString) {
        // Handle different valuation formats
        const cleanString = valuationString.toLowerCase();
        
        // Check for billion values
        if (cleanString.includes('$') && cleanString.includes('b')) {
            const matches = cleanString.match(/\$(\d+(?:\.\d+)?)\s*b/);
            if (matches) {
                return parseFloat(matches[1]) * 1000; // Convert billions to millions
            }
        }
        
        // Check for million values
        if (cleanString.includes('$') && cleanString.includes('m')) {
            const matches = cleanString.match(/\$(\d+(?:\.\d+)?)\s*m/);
            if (matches) {
                return parseFloat(matches[1]);
            }
        }
        
        // Check for estimated values
        const matches = cleanString.match(/(\d+(?:\.\d+)?)/);
        if (matches) {
            let value = parseFloat(matches[1]);
            if (cleanString.includes('b')) value *= 1000;
            return value;
        }
        
        return 0;
    }

    sortTable(field) {
        if (this.currentSort.field === field) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.field = field;
            this.currentSort.direction = 'asc';
        }

        this.filteredBrands.sort((a, b) => {
            let aValue, bValue;

            switch (field) {
                case 'name':
                    aValue = a['Brand Name'].toLowerCase();
                    bValue = b['Brand Name'].toLowerCase();
                    break;
                case 'year':
                    aValue = a['Founded Year'];
                    bValue = b['Founded Year'];
                    break;
                case 'valuation':
                    aValue = this.extractNumericValue(a['Valuation (USD Million)']);
                    bValue = this.extractNumericValue(b['Valuation (USD Million)']);
                    break;
                case 'focus':
                    aValue = a['Market Focus'].toLowerCase();
                    bValue = b['Market Focus'].toLowerCase();
                    break;
                default:
                    return 0;
            }

            if (aValue < bValue) return this.currentSort.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return this.currentSort.direction === 'asc' ? 1 : -1;
            return 0;
        });

        this.updateSortIcons();
        this.renderTable();
    }

    updateSortIcons() {
        // Reset all sort icons
        document.querySelectorAll('.sortable').forEach(header => {
            header.classList.remove('sort-asc', 'sort-desc');
        });

        // Set active sort icon
        if (this.currentSort.field) {
            const activeHeader = document.querySelector(`[data-sort="${this.currentSort.field}"]`);
            if (activeHeader) {
                activeHeader.classList.add(`sort-${this.currentSort.direction}`);
            }
        }
    }

    renderTable() {
        const tbody = document.getElementById('tableBody');
        const noResults = document.getElementById('noResults');

        if (!tbody || !noResults) return;

        if (this.filteredBrands.length === 0) {
            tbody.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';

        tbody.innerHTML = this.filteredBrands.map(brand => `
            <tr>
                <td class="brand-name">${this.highlightSearch(brand['Brand Name'])}</td>
                <td><a href="${brand['Website']}" target="_blank" rel="noopener noreferrer">${brand['Website']}</a></td>
                <td>${brand['Founded Year']}</td>
                <td class="valuation">${brand['Valuation (USD Million)']}</td>
                <td class="market-focus">${brand['Market Focus']}</td>
                <td class="unique-offerings">${brand['Unique Offerings']}</td>
            </tr>
        `).join('');
    }

    highlightSearch(text) {
        if (!this.searchTerm) return text;
        const regex = new RegExp(`(${this.escapeRegExp(this.searchTerm)})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    updateStats() {
        const totalBrandsEl = document.getElementById('totalBrands');
        const filteredCountEl = document.getElementById('filteredCount');
        const avgYearEl = document.getElementById('avgYear');
        const topFocusEl = document.getElementById('topFocus');

        if (totalBrandsEl) totalBrandsEl.textContent = this.brands.length;
        if (filteredCountEl) filteredCountEl.textContent = this.filteredBrands.length;

        // Calculate average founded year
        const avgYear = Math.round(
            this.brands.reduce((sum, brand) => sum + brand['Founded Year'], 0) / this.brands.length
        );
        if (avgYearEl) avgYearEl.textContent = avgYear;

        // Find most common market focus category
        const focusCount = {};
        this.brands.forEach(brand => {
            const category = this.extractMainFocus(brand['Market Focus']);
            focusCount[category] = (focusCount[category] || 0) + 1;
        });

        const topFocus = Object.keys(focusCount).reduce((a, b) =>
            focusCount[a] > focusCount[b] ? a : b
        );
        if (topFocusEl) topFocusEl.textContent = topFocus;
    }

    resetFilters() {
        this.searchTerm = '';
        this.filters = { year: '', focus: '', valuation: '' };
        
        const searchInput = document.getElementById('searchInput');
        const yearFilter = document.getElementById('yearFilter');
        const focusFilter = document.getElementById('focusFilter');
        const valuationFilter = document.getElementById('valuationFilter');
        
        if (searchInput) searchInput.value = '';
        if (yearFilter) yearFilter.value = '';
        if (focusFilter) focusFilter.value = '';
        if (valuationFilter) valuationFilter.value = '';
        
        this.filteredBrands = [...this.brands];
        this.renderTable();
        this.updateStats();
    }

    exportToCSV() {
        const headers = ['Brand Name', 'Website', 'Founded Year', 'Valuation (USD Million)', 'Market Focus', 'Unique Offerings'];
        const csvContent = [
            headers.join(','),
            ...this.filteredBrands.map(brand => 
                headers.map(header => `"${brand[header] ? String(brand[header]).replace(/"/g, '""') : ''}"`).join(',')
            )
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `indian_jewelry_brands_filtered_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new JewelryBrandsApp();
});