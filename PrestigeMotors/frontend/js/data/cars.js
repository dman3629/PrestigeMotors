/**
 * Mock vehicle data for the luxury car dealership
 * This data will be replaced by API data in a production environment
 */
const mockVehicles = [
  {
    id: "v001",
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: 135000,
    mileage: 125,
    exteriorColor: "Obsidian Black",
    interiorColor: "Macchiato Beige",
    vin: "WDDZF8KB1LA747805",
    fuelType: "Hybrid",
    transmission: "9-speed Automatic",
    bodyType: "Sedan",
    drivetrain: "All-Wheel Drive",
    engine: "3.0L Inline-6 Turbo + Electric Motor",
    horsepower: 429,
    torque: 384,
    featuredImage: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "Experience unparalleled luxury with the all-new Mercedes-Benz S-Class. This flagship sedan combines cutting-edge technology with timeless elegance. The EQ Boost system delivers instant torque for effortless acceleration, while the advanced suspension system reads the road ahead to deliver an exceptionally smooth ride.",
    highlights: [
      "MBUX Infotainment System with AI",
      "Burmester 4D Surround Sound",
      "Rear-Wheel Steering",
      "Augmented Reality Navigation",
      "Active Ambient Lighting",
      "Energizing Comfort Control"
    ],
    features: {
      exterior: [
        "Digital LED Headlights",
        "Panoramic Sunroof",
        "Active Multibeam LED Lighting",
        "Illuminated Door Handles",
        "20-inch AMG Alloy Wheels",
        "Hands-Free Access Trunk"
      ],
      interior: [
        "Nappa Leather Upholstery",
        "Heated & Ventilated Seats",
        "Massage Function for All Seats",
        "Executive Rear Seats",
        "Ambient Lighting with 64 Colors",
        "Four-Zone Climate Control"
      ],
      safety: [
        "Pre-Safe Impulse Side",
        "Active Lane Keeping Assist",
        "Attention Assist",
        "Active Brake Assist",
        "360-Degree Camera",
        "Evasive Steering Assist"
      ],
      technology: [
        "12.8-inch OLED Central Display",
        "12.3-inch Digital Instrument Cluster",
        "Augmented Reality Head-Up Display",
        "Wireless Charging",
        "Biometric Authentication",
        "Interior Assistant"
      ]
    },
    specifications: {
      dimensions: {
        length: "208.2 inches",
        width: "76.9 inches",
        height: "59.2 inches",
        wheelbase: "126.6 inches",
        groundClearance: "4.5 inches",
        cargoVolume: "12.9 cubic feet"
      },
      performance: {
        acceleration: "4.9 seconds (0-60 mph)",
        topSpeed: "130 mph (electronically limited)",
        fuelEconomy: "24 city / 32 highway"
      }
    },
    isFeatured: true
  },
  {
    id: "v002",
    brand: "BMW",
    model: "7 Series",
    year: 2023,
    price: 125000,
    mileage: 350,
    exteriorColor: "Alpine White",
    interiorColor: "Cognac",
    vin: "WBA7U2C51KBL34567",
    fuelType: "Electric",
    transmission: "Single-Speed Automatic",
    bodyType: "Sedan",
    drivetrain: "All-Wheel Drive",
    engine: "Electric Motors",
    horsepower: 536,
    torque: 549,
    featuredImage: "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The all-electric BMW i7 redefines luxury mobility with its whisper-quiet operation and impressive range. Every aspect of this flagship sedan is designed to provide a first-class experience for both driver and passengers, with technological innovations that create a true sanctuary on wheels.",
    highlights: [
      "Theater Screen with Amazon Fire TV",
      "Bowers & Wilkins Diamond Surround Sound",
      "Automatic Doors",
      "BMW Interaction Bar",
      "Crystal Headlights",
      "31.3-inch 8K Rear Display"
    ],
    features: {
      exterior: [
        "Illuminated Kidney Grille",
        "Adaptive LED Headlights",
        "Power-Closing Doors",
        "Soft-Close Doors",
        "21-inch Aerodynamic Wheels",
        "Hands-Free Trunk Access"
      ],
      interior: [
        "Merino Leather Upholstery",
        "Multifunction Rear Seats",
        "Panoramic Sky Lounge LED Roof",
        "Executive Lounge Seating",
        "Glass Controls",
        "Cashmere-Wool Blend Upholstery Option"
      ],
      safety: [
        "Driving Assistant Professional",
        "Parking Assistant Professional",
        "Active Protection System",
        "Frontal Collision Warning",
        "Lane Departure Warning",
        "City Collision Mitigation"
      ],
      technology: [
        "BMW Curved Display",
        "iDrive 8 with Personal Assistant",
        "5G Connectivity",
        "Digital Key Plus",
        "Augmented Reality Navigation",
        "My BMW App Integration"
      ]
    },
    specifications: {
      dimensions: {
        length: "212.2 inches",
        width: "76.8 inches",
        height: "60.8 inches",
        wheelbase: "126.6 inches",
        groundClearance: "5.1 inches",
        cargoVolume: "11.4 cubic feet"
      },
      performance: {
        acceleration: "4.5 seconds (0-60 mph)",
        topSpeed: "149 mph (electronically limited)",
        range: "318 miles (EPA estimated)"
      }
    },
    isFeatured: true
  },
  {
    id: "v003",
    brand: "Porsche",
    model: "911 GT3",
    year: 2023,
    price: 187500,
    mileage: 75,
    exteriorColor: "Shark Blue",
    interiorColor: "Black/Shark Blue",
    vin: "WP0AF2A95KS134281",
    fuelType: "Gasoline",
    transmission: "7-speed PDK",
    bodyType: "Coupe",
    drivetrain: "Rear-Wheel Drive",
    engine: "4.0L Naturally Aspirated Flat-6",
    horsepower: 502,
    torque: 346,
    featuredImage: "https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The Porsche 911 GT3 represents the pinnacle of naturally aspirated performance in the Porsche lineup. With technology derived directly from motorsport, the GT3 offers an unfiltered driving experience that connects the driver to the road like few other modern sports cars can achieve.",
    highlights: [
      "Motorsport-derived 4.0L Engine",
      "Double Wishbone Front Suspension",
      "Manual or PDK Transmission",
      "Carbon Fiber Components",
      "Track-Focused Aerodynamics",
      "9,000 RPM Redline"
    ],
    features: {
      exterior: [
        "Swan-neck Rear Wing",
        "Centerlock Wheels",
        "LED Headlights with PDLS+",
        "Carbon Fiber Roof Option",
        "Rear Diffuser",
        "Sport Exhaust System"
      ],
      interior: [
        "Full Bucket Seats",
        "GT3 Sport Steering Wheel",
        "Lightweight Door Panels",
        "Race-Tex Upholstery",
        "Chrono Package",
        "Aluminum Pedals"
      ],
      safety: [
        "Porsche Stability Management",
        "Multi-Collision Brake System",
        "Tire Pressure Monitoring",
        "Porsche Ceramic Composite Brakes (Optional)",
        "Roll Bar with Harness System (Optional)",
        "Track Precision App"
      ],
      technology: [
        "Porsche Communication Management",
        "Apple CarPlay Integration",
        "Track Precision App",
        "Bose Surround Sound (Optional)",
        "Smartphone Compartment with Inductive Charging",
        "Sport Chrono Package"
      ]
    },
    specifications: {
      dimensions: {
        length: "180.0 inches",
        width: "72.9 inches",
        height: "50.4 inches",
        wheelbase: "96.7 inches",
        groundClearance: "3.9 inches",
        cargoVolume: "4.6 cubic feet"
      },
      performance: {
        acceleration: "3.2 seconds (0-60 mph)",
        topSpeed: "197 mph",
        fuelEconomy: "15 city / 20 highway"
      }
    },
    isFeatured: true
  },
  {
    id: "v004",
    brand: "Rolls-Royce",
    model: "Ghost",
    year: 2023,
    price: 358000,
    mileage: 220,
    exteriorColor: "Diamond Black",
    interiorColor: "Seashell",
    vin: "SCA664S54LUX87342",
    fuelType: "Gasoline",
    transmission: "8-speed Automatic",
    bodyType: "Sedan",
    drivetrain: "All-Wheel Drive",
    engine: "6.75L Twin-Turbo V12",
    horsepower: 563,
    torque: 627,
    featuredImage: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The Rolls-Royce Ghost epitomizes 'post-opulent' luxury with its minimalist yet sophisticated design. Built on Rolls-Royce's proprietary aluminum Architecture of Luxury, the Ghost provides an almost magical carpet-like ride quality through its Planar Suspension System that predicts the road ahead.",
    highlights: [
      "Planar Suspension System",
      "Illuminated Fascia",
      "Starlight Headliner",
      "Whisper-Quiet Cabin",
      "Bespoke Audio System",
      "Champagne Cooler"
    ],
    features: {
      exterior: [
        "Pantheon Grille with LED Illumination",
        "Hands-Free Door Opening and Closing",
        "Umbrella Integrated in Rear Doors",
        "Laser Headlights",
        "22-inch Polished Wheels",
        "Illuminated Spirit of Ecstasy"
      ],
      interior: [
        "Open Pore Wood Finishes",
        "Bespoke Clock Face",
        "Lambswool Floor Mats",
        "Shooting Star Headliner",
        "Rear Theater Configuration",
        "Massaging Seats with Ventilation"
      ],
      safety: [
        "Night Vision with Pedestrian Detection",
        "Wildlife & Pedestrian Warning",
        "Alertness Assistant",
        "4-Camera System with Panoramic View",
        "Active Cruise Control",
        "Lane Departure Warning"
      ],
      technology: [
        "Digital Instrument Cluster",
        "Head-Up Display",
        "Satellite Aided Transmission",
        "Bespoke Audio System",
        "Wi-Fi Hotspot",
        "Self-Parking System"
      ]
    },
    specifications: {
      dimensions: {
        length: "218.3 inches",
        width: "77.9 inches",
        height: "61.9 inches",
        wheelbase: "129.7 inches",
        groundClearance: "5.4 inches",
        cargoVolume: "17.9 cubic feet"
      },
      performance: {
        acceleration: "4.6 seconds (0-60 mph)",
        topSpeed: "155 mph (electronically limited)",
        fuelEconomy: "12 city / 19 highway"
      }
    },
    isFeatured: false
  },
  {
    id: "v005",
    brand: "Bentley",
    model: "Continental GT Speed",
    year: 2023,
    price: 274900,
    mileage: 180,
    exteriorColor: "Viridian",
    interiorColor: "Linen & Brunel",
    vin: "SCBDG4ZG5LC076294",
    fuelType: "Gasoline",
    transmission: "8-speed Dual-Clutch",
    bodyType: "Coupe",
    drivetrain: "All-Wheel Drive",
    engine: "6.0L Twin-Turbocharged W12",
    horsepower: 650,
    torque: 664,
    featuredImage: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/253816/pexels-photo-253816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The Bentley Continental GT Speed represents the pinnacle of performance in the Continental range. Combining the luxury and craftsmanship Bentley is renowned for with staggering performance, the Speed variant offers a more dynamic driving experience without compromising comfort.",
    highlights: [
      "Electronic All-Wheel Steering",
      "Electronic Limited Slip Differential",
      "Bentley Dynamic Ride",
      "Carbon Ceramic Brakes",
      "23 Standard Exterior Colors",
      "Handcrafted Interior"
    ],
    features: {
      exterior: [
        "Dark Tint Grille",
        "Speed Badge",
        "22-inch Speed Wheels",
        "Jewel Fuel Filler Cap",
        "Illuminated 'BENTLEY' Welcome Lights",
        "Heated Windscreen Wipers"
      ],
      interior: [
        "Handcrafted Leather Interior",
        "Alcantara Steering Wheel",
        "Rotating Display",
        "Speed Embroidery on Headrests",
        "Metal Sports Pedals",
        "Unique Speed Color Split"
      ],
      safety: [
        "Top View Camera",
        "Blind Spot Assist",
        "Head-Up Display",
        "Lane Assist",
        "Traffic Sign Recognition",
        "City Assist"
      ],
      technology: [
        "Bentley Connected Car Services",
        "Apple CarPlay Integration",
        "Navigation System",
        "Naim for Bentley Audio System",
        "Digital TV Tuner",
        "Inductive Phone Charging"
      ]
    },
    specifications: {
      dimensions: {
        length: "190.9 inches",
        width: "77.4 inches",
        height: "55.3 inches",
        wheelbase: "112.2 inches",
        groundClearance: "5.3 inches",
        cargoVolume: "12.6 cubic feet"
      },
      performance: {
        acceleration: "3.5 seconds (0-60 mph)",
        topSpeed: "208 mph",
        fuelEconomy: "12 city / 20 highway"
      }
    },
    isFeatured: true
  },
  {
    id: "v006",
    brand: "Aston Martin",
    model: "DBS Superleggera",
    year: 2023,
    price: 316300,
    mileage: 95,
    exteriorColor: "Quantum Silver",
    interiorColor: "Obsidian Black",
    vin: "SCFRMHAV8KGJ03271",
    fuelType: "Gasoline",
    transmission: "8-speed Automatic",
    bodyType: "Coupe",
    drivetrain: "Rear-Wheel Drive",
    engine: "5.2L Twin-Turbocharged V12",
    horsepower: 715,
    torque: 664,
    featuredImage: "https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/10691340/pexels-photo-10691340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/253816/pexels-photo-253816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The Aston Martin DBS Superleggera is the ultimate expression of grand touring capability. Combining the power of a super GT with the sleek, highly aerodynamic body of a sports car, the DBS Superleggera delivers an exhilarating driving experience without compromising on luxury or refinement.",
    highlights: [
      "Carbon Fiber Body",
      "Open Decklid with Aeroblade II",
      "Quad Exhaust System",
      "Adaptive Damping System",
      "Carbon Ceramic Brakes",
      "Q by Aston Martin Personalization"
    ],
    features: {
      exterior: [
        "Full Carbon Fiber Body",
        "Aeroblade II",
        "21-inch Forged Y-Spoke Wheels",
        "Signature LED Headlights",
        "Deployable Spoiler",
        "Carbon Fiber Diffuser"
      ],
      interior: [
        "Semi-Aniline Leather & Alcantara",
        "Sports Plus Seats",
        "Leather Headlining",
        "Carbon Fiber Trim",
        "Contrast Stitching",
        "Aston Martin Wings Embroidery"
      ],
      safety: [
        "Dynamic Stability Control",
        "Emergency Brake Assist",
        "Traction Control",
        "Tire Pressure Monitoring",
        "Parking Distance Control",
        "360-Degree Camera"
      ],
      technology: [
        "8-inch LCD Screen",
        "Satellite Navigation",
        "Auto-Park Assist",
        "Bang & Olufsen BeoSound Audio",
        "Bluetooth Connectivity",
        "Wi-Fi Hub"
      ]
    },
    specifications: {
      dimensions: {
        length: "185.5 inches",
        width: "77.5 inches",
        height: "50.4 inches",
        wheelbase: "110.4 inches",
        groundClearance: "4.7 inches",
        cargoVolume: "9.5 cubic feet"
      },
      performance: {
        acceleration: "3.2 seconds (0-60 mph)",
        topSpeed: "211 mph",
        fuelEconomy: "14 city / 22 highway"
      }
    },
    isFeatured: false
  },
  {
    id: "v007",
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2023,
    price: 507000,
    mileage: 35,
    exteriorColor: "Rosso Corsa",
    interiorColor: "Nero",
    vin: "ZFF95NLA6L0259738",
    fuelType: "Hybrid",
    transmission: "8-speed Dual-Clutch",
    bodyType: "Coupe",
    drivetrain: "All-Wheel Drive",
    engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
    horsepower: 986,
    torque: 590,
    featuredImage: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The Ferrari SF90 Stradale represents Ferrari's first series-production plug-in hybrid. With nearly 1,000 horsepower from its sophisticated drivetrain, the SF90 delivers hypercar performance while maintaining the drivability and reliability expected from a Ferrari road car.",
    highlights: [
      "Plug-in Hybrid Technology",
      "All-Wheel Drive System",
      "Electric-Only Mode",
      "Advanced Aerodynamics",
      "Digital Dashboard",
      "Assetto Fiorano Package Available"
    ],
    features: {
      exterior: [
        "Active Aerodynamics",
        "Full LED Headlights",
        "20-inch Forged Wheels",
        "Carbon Fiber Rear Spoiler",
        "Titanium Exhaust System (Optional)",
        "Carbon Fiber Wheels (Optional)"
      ],
      interior: [
        "16-inch Curved Digital Instrument Cluster",
        "Carbon Fiber Steering Wheel with LED Interface",
        "Racing Seats",
        "Alcantara & Leather Upholstery",
        "F1-inspired Controls",
        "Head-Up Display"
      ],
      safety: [
        "ABS with EBD",
        "F1-Trac Traction Control",
        "Side Slip Control 6.0",
        "Ferrari Dynamic Enhancer",
        "Titanium Roll Bar",
        "Advanced Driver Assistance Systems"
      ],
      technology: [
        "eManettino Driving Modes",
        "Ferrari Data Telemetry",
        "Hybrid System Integration",
        "Touch Controls",
        "Apple CarPlay",
        "JBL Professional Audio System"
      ]
    },
    specifications: {
      dimensions: {
        length: "185.4 inches",
        width: "77.6 inches",
        height: "47.0 inches",
        wheelbase: "104.3 inches",
        groundClearance: "4.3 inches",
        cargoVolume: "2.6 cubic feet"
      },
      performance: {
        acceleration: "2.5 seconds (0-60 mph)",
        topSpeed: "211 mph",
        electricRange: "16 miles"
      }
    },
    isFeatured: true
  },
  {
    id: "v008",
    brand: "Lamborghini",
    model: "Aventador SVJ",
    year: 2022,
    price: 573000,
    mileage: 125,
    exteriorColor: "Verde Mantis",
    interiorColor: "Nero Cosmus",
    vin: "ZHWUM7ZD3LLA13924",
    fuelType: "Gasoline",
    transmission: "7-speed ISR",
    bodyType: "Coupe",
    drivetrain: "All-Wheel Drive",
    engine: "6.5L Naturally Aspirated V12",
    horsepower: 759,
    torque: 531,
    featuredImage: "https://images.pexels.com/photos/3954518/pexels-photo-3954518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3954518/pexels-photo-3954518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The Lamborghini Aventador SVJ represents the pinnacle of Lamborghini's naturally aspirated V12 flagship. Holding the production car lap record at the Nürburgring Nordschleife, the SVJ combines advanced aerodynamics, lightweight materials, and raw power to deliver an unforgettable driving experience.",
    highlights: [
      "Aerodinamica Lamborghini Attiva 2.0",
      "Lightweight Carbon Fiber Construction",
      "Screaming Naturally Aspirated V12",
      "Limited Production",
      "Track-Focused Performance",
      "Aggressive Styling"
    ],
    features: {
      exterior: [
        "ALA 2.0 Active Aerodynamics",
        "Carbon Fiber Monocoque",
        "Scissor Doors",
        "Center-Lock Wheels",
        "Exposed Carbon Fiber Elements",
        "Track-Focused Rear Wing"
      ],
      interior: [
        "Carbon Fiber Sports Seats",
        "Alcantara Upholstery",
        "Digital Instrument Cluster",
        "Carbon Fiber Trim",
        "Lamborghini Telemetry System",
        "SVJ Badging"
      ],
      safety: [
        "Carbon Ceramic Brakes",
        "Stability Control Systems",
        "Traction Control",
        "Multiple Airbags",
        "Tire Pressure Monitoring",
        "Hill Start Assist"
      ],
      technology: [
        "Lamborghini Dinamica Veicolo Attiva 2.0",
        "Drive Mode Selector",
        "Apple CarPlay Integration",
        "Telemetry Recording",
        "Performance Data Analyzer",
        "High-Fidelity Sound System"
      ]
    },
    specifications: {
      dimensions: {
        length: "194.6 inches",
        width: "79.9 inches",
        height: "44.7 inches",
        wheelbase: "106.3 inches",
        groundClearance: "4.3 inches",
        cargoVolume: "5.3 cubic feet"
      },
      performance: {
        acceleration: "2.8 seconds (0-60 mph)",
        topSpeed: "217 mph",
        fuelEconomy: "9 city / 15 highway"
      }
    },
    isFeatured: false
  },
  {
    id: "v009",
    brand: "Bugatti",
    model: "Chiron",
    year: 2022,
    price: 3200000,
    mileage: 45,
    exteriorColor: "Atlantic Blue",
    interiorColor: "Beluga Black",
    vin: "VF9SP3V3XLM795012",
    fuelType: "Gasoline",
    transmission: "7-speed Dual-Clutch",
    bodyType: "Coupe",
    drivetrain: "All-Wheel Drive",
    engine: "8.0L Quad-Turbo W16",
    horsepower: 1479,
    torque: 1180,
    featuredImage: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/10691340/pexels-photo-10691340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/93652/pexels-photo-93652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3954518/pexels-photo-3954518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The Bugatti Chiron represents automotive excellence without compromise. Every aspect of this hypercar is designed to deliver the ultimate driving experience, from its record-breaking speed capabilities to the meticulous craftsmanship of its interior. Each Chiron is handcrafted in Molsheim, France.",
    highlights: [
      "Quad-Turbocharged W16 Engine",
      "Carbon Fiber Monocoque",
      "Adaptive Chassis",
      "Extensive Customization Options",
      "Limited Production",
      "Record-Breaking Performance"
    ],
    features: {
      exterior: [
        "Active Aerodynamics",
        "LED Matrix Headlights",
        "Carbon Fiber Body",
        "Hydraulic Rear Wing",
        "Titanium Exhaust System",
        "3D-Printed Titanium Components"
      ],
      interior: [
        "Full Leather Interior",
        "Illuminated C-Line",
        "Aluminum Controls",
        "Carbon Fiber Steering Wheel",
        "Custom Embroidery",
        "One-Carat Diamond Membrane Speakers"
      ],
      safety: [
        "Carbon Ceramic Brakes",
        "Titanium Brake Calipers",
        "Advanced Stability Control",
        "Tire Pressure Monitoring",
        "Multiple Driving Modes",
        "Rear View Camera"
      ],
      technology: [
        "Digital Instrumentation",
        "Bespoke Sound System",
        "Telemetry System",
        "Climate Control",
        "Adaptive Suspension",
        "Mode Selector"
      ]
    },
    specifications: {
      dimensions: {
        length: "178.9 inches",
        width: "80.2 inches",
        height: "47.7 inches",
        wheelbase: "106.7 inches",
        groundClearance: "4.9 inches",
        cargoVolume: "2.2 cubic feet"
      },
      performance: {
        acceleration: "2.4 seconds (0-60 mph)",
        topSpeed: "261 mph (electronically limited)",
        fuelEconomy: "8 city / 13 highway"
      }
    },
    isFeatured: false
  },
  {
    id: "v010",
    brand: "McLaren",
    model: "765LT",
    year: 2023,
    price: 375000,
    mileage: 85,
    exteriorColor: "Papaya Spark",
    interiorColor: "Carbon Black",
    vin: "SBM14DCA6MW339587",
    fuelType: "Gasoline",
    transmission: "7-speed SSG",
    bodyType: "Coupe",
    drivetrain: "Rear-Wheel Drive",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 755,
    torque: 590,
    featuredImage: "https://images.pexels.com/photos/3121482/pexels-photo-3121482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gallery: [
      "https://images.pexels.com/photos/3121482/pexels-photo-3121482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/93652/pexels-photo-93652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    description: "The McLaren 765LT continues McLaren's legendary 'Longtail' lineage with a focus on reduced weight, optimized aerodynamics, and increased power. Limited to just 765 examples worldwide, the 765LT delivers a sensory experience that's unmatched in the supercar segment.",
    highlights: [
      "80kg Lighter Than 720S",
      "Titanium Exhaust System",
      "Active Aerodynamics",
      "Carbon Fiber Construction",
      "Track-Focused Dynamics",
      "Limited Production"
    ],
    features: {
      exterior: [
        "Extended Carbon Fiber Splitter",
        "Active Rear Wing",
        "Quad-Exit Titanium Exhaust",
        "Ultra-Lightweight Wheels",
        "Carbon Fiber Body Panels",
        "Increased Downforce"
      ],
      interior: [
        "Carbon Fiber Racing Seats",
        "Alcantara Trim",
        "Deleted Carpet (Weight Saving)",
        "Carbon Fiber Center Tunnel",
        "Exposed Carbon Fiber Floor",
        "Folding Driver Display"
      ],
      safety: [
        "Carbon Ceramic Brakes",
        "Variable Drift Control",
        "McLaren Track Telemetry",
        "Multiple Electronic Stability Controls",
        "Proactive Chassis Control II",
        "Ultra Lightweight Carbon Fiber Safety Cell"
      ],
      technology: [
        "McLaren Track Telemetry with Cameras",
        "Custom Driving Modes",
        "Bowers & Wilkins Audio System",
        "Central Infotainment Screen",
        "Performance Data Recorder",
        "Race-derived Suspension Sensors"
      ]
    },
    specifications: {
      dimensions: {
        length: "181.1 inches",
        width: "80.5 inches",
        height: "47.0 inches",
        wheelbase: "105.1 inches",
        groundClearance: "4.3 inches",
        cargoVolume: "5.3 cubic feet"
      },
      performance: {
        acceleration: "2.7 seconds (0-60 mph)",
        topSpeed: "205 mph",
        fuelEconomy: "14 city / 18 highway"
      }
    },
    isFeatured: false
  }
];

/**
 * Function to get all vehicles
 */
function getAllVehicles() {
  return mockVehicles;
}

/**
 * Function to get featured vehicles
 */
function getFeaturedVehicles() {
  return mockVehicles.filter(vehicle => vehicle.isFeatured);
}

/**
 * Function to get a vehicle by ID
 */
function getVehicleById(id) {
  return mockVehicles.find(vehicle => vehicle.id === id);
}

/**
 * Function to get similar vehicles
 */
function getSimilarVehicles(id, count = 3) {
  const vehicle = getVehicleById(id);
  if (!vehicle) return [];
  
  // Filter vehicles by same brand or body type, excluding the current vehicle
  return mockVehicles
    .filter(v => (v.brand === vehicle.brand || v.bodyType === vehicle.bodyType) && v.id !== id)
    .slice(0, count);
}

/**
 * Function to filter vehicles
 */
function filterVehicles(filters) {
  let filtered = [...mockVehicles];
  
  if (filters.brands && filters.brands.length > 0) {
    filtered = filtered.filter(vehicle => filters.brands.includes(vehicle.brand));
  }
  
  if (filters.bodyTypes && filters.bodyTypes.length > 0) {
    filtered = filtered.filter(vehicle => filters.bodyTypes.includes(vehicle.bodyType));
  }
  
  if (filters.yearMin) {
    filtered = filtered.filter(vehicle => vehicle.year >= filters.yearMin);
  }
  
  if (filters.yearMax) {
    filtered = filtered.filter(vehicle => vehicle.year <= filters.yearMax);
  }
  
  if (filters.priceMin) {
    filtered = filtered.filter(vehicle => vehicle.price >= filters.priceMin);
  }
  
  if (filters.priceMax) {
    filtered = filtered.filter(vehicle => vehicle.price <= filters.priceMax);
  }
  
  return filtered;
}

/**
 * Function to get unique filter options
 */
function getFilterOptions() {
  const brands = [...new Set(mockVehicles.map(vehicle => vehicle.brand))];
  const bodyTypes = [...new Set(mockVehicles.map(vehicle => vehicle.bodyType))];
  
  return {
    brands,
    bodyTypes
  };
}

/**
 * Function to get testimonials
 */
function getTestimonials() {
  return [
    {
      id: 1,
      name: "Jonathan Reynolds",
      title: "Tech Entrepreneur",
      content: "The attention to detail in my Bentley Continental GT is astounding. Prestige Motors made the purchasing process as luxurious as the car itself.",
      rating: 5
    },
    {
      id: 2,
      name: "Victoria Chen",
      title: "Investment Banker",
      content: "I've purchased multiple vehicles through Prestige Motors over the years. Their knowledge of luxury automobiles is unmatched, as is their commitment to customer satisfaction.",
      rating: 5
    },
    {
      id: 3,
      name: "Alexander Williams",
      title: "Real Estate Developer",
      content: "My experience with Prestige Motors exceeded all expectations. From the personalized selection process to the white-glove delivery, every moment reflected true luxury service.",
      rating: 5
    }
  ];
}