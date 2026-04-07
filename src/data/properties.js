export const properties = [
  {
    id: 1,
    name: {
      en: 'Swatantra Nagar - 20×40, 2 Floor',
      hi: 'स्वतंत्र नगर - 20×40, 2 मंजिल'
    },
    price: '₹ 35 Lacs',
    location: 'Swatantra Nagar, Bhind',
    type: 'house',
    status: 'buy',
    category: 'sale_residential',
    beds: 6,
    baths: 2,
    sqft: 800,
    tags: ['2 Floor', '20×40 Plot'],
    tags_hi: ['2 मंजिल', '20×40 प्लॉट'],
    image: `${import.meta.env.BASE_URL}plot1.jpeg`,
    images: [
      `${import.meta.env.BASE_URL}plot1.jpeg`
    ],
    description: {
      en: 'Well-built 2-floor residential house on a 20×40 plot in Swatantra Nagar, Bhind. Ideal for families looking for a ready-to-move home.',
      hi: 'स्वतंत्र नगर, उज्जैन में 20×40 प्लॉट पर बना 2 मंजिला आवासीय मकान। रहने के लिए तैयार घर की तलाश करने वाले परिवारों के लिए आदर्श।'
    },
    amenities: {
      en: ['2 Floors', '20×40 Plot', 'Residential Area'],
      hi: ['2 मंजिल', '20×40 प्लॉट', 'आवासीय क्षेत्र']
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.33593005825!2d75.760143!3d23.176467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82f44e996696fa!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    adminMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.33593005825!2d75.760143!3d23.176467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82f44e996696fa!2sSwatantra%20Nagar%2C%20Ujjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    nearby: {
      en: [
        { name: 'Mahakal Temple', distance: '1.2 km', category: 'Shrine' },
        { name: 'Ujjain Market', distance: '0.8 km', category: 'Shopping' },
        { name: 'Govt. Hospital', distance: '1.5 km', category: 'Medical' }
      ],
      hi: [
        { name: 'महाकाल मंदिर', distance: '1.2 किमी', category: 'मंदिर' },
        { name: 'उज्जैन मार्केट', distance: '0.8 किमी', category: 'बाजार' },
        { name: 'शासकीय अस्पताल', distance: '1.5 किमी', category: 'मेडिकल' }
      ]
    }
  },
  {
    id: 2,
    name: {
      en: 'Best VIP House - 20×40, Full Furnished',
      hi: 'बेस्ट VIP मकान - 20×40, पूर्ण फर्निश्ड'
    },
    price: '₹ 35 Lakh',
    location: 'Remjapura Kumrauha, Talghar | 22 ft Road',
    address: '20 by 40, Full Furnished, Best VIP House\nWith Talghar\nLocation – Remjapura Kumrauha\n22 ft Road\nRate: ₹35 Lakh',
    type: 'house',
    status: 'buy',
    category: 'sale_residential',
    beds: 3,
    baths: 2,
    sqft: 800,
    tags: ['Full Furnished', '20×40 Plot', '22 ft Road'],
    tags_hi: ['पूर्ण फर्निश्ड', '20×40 प्लॉट', '22 फीट रोड'],
    image: `${import.meta.env.BASE_URL}plot2/image1.jpeg`,
    images: [
      `${import.meta.env.BASE_URL}plot2/image1.jpeg`,
      `${import.meta.env.BASE_URL}plot2/image2.jpeg`
    ],
    description: {
      en: 'Best VIP fully furnished house on a 20×40 plot, located in Remjapura Kumrauha, Talghar. Features a 22 ft road frontage. Ideal for families seeking a premium ready-to-move home.',
      hi: 'Remjapura Kumrauha, Talghar में 20×40 प्लॉट पर स्थित बेस्ट VIP पूर्ण फर्निश्ड मकान। 22 फीट रोड फ्रंटेज के साथ। प्रीमियम रेडी-टू-मूव घर की तलाश में परिवारों के लिए आदर्श।'
    },
    amenities: {
      en: ['Full Furnished', '20×40 Plot', '22 ft Road', 'VIP Location', 'Talghar Area'],
      hi: ['पूर्ण फर्निश्ड', '20×40 प्लॉट', '22 फीट रोड', 'VIP लोकेशन', 'तलघर क्षेत्र']
    },
    mapUrl: null,
    adminMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.64!2d78.7830!3d26.5647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976f5dc3abb9b9b%3A0xc0b7e3bd96e96e9a!2sRemjapura%20Kumrauha%2C%20Talghar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin",
    nearby: {
      en: [
        { name: 'Talghar Market', distance: '0.5 km', category: 'Shopping' },
        { name: 'Local School', distance: '0.8 km', category: 'Education' },
        { name: 'Community Hospital', distance: '1.2 km', category: 'Medical' }
      ],
      hi: [
        { name: 'तलघर बाजार', distance: '0.5 किमी', category: 'बाजार' },
        { name: 'स्थानीय स्कूल', distance: '0.8 किमी', category: 'शिक्षा' },
        { name: 'सामुदायिक अस्पताल', distance: '1.2 किमी', category: 'मेडिकल' }
      ]
    }
  },
  {
    id: 3,
    name: {
      en: '2 Bigha Plot - 100 Front',
      hi: '2 बीघा जमीन - 100 फ्रंट'
    },
    price: '1.10 / Bigha',
    location: 'Barakalan (Near Siddhi Vinayak College)',
    address: 'Near Siddhi Vinayak College, Barakalan\n2 Bigha Land\n100 Front\nTime: 4 Months\nFinal Rate: 1.10 per Bigha',
    type: 'plot',
    status: 'buy',
    category: 'lands_plots',
    beds: null,
    baths: null,
    sqft: '2 Bigha',
    tags: ['2 Bigha', '100 Front', '4 Months Time'],
    tags_hi: ['2 बीघा', '100 फ्रंट', '4 महीने का समय'],
    voiceNote: `${import.meta.env.BASE_URL}plot%20for%20sale/voice.ogg`,
    image: `${import.meta.env.BASE_URL}plot%20for%20sale/image.png`,
    images: [
      `${import.meta.env.BASE_URL}plot%20for%20sale/image.png`
    ],
    description: {
      en: 'Premium 2 Bigha land available for sale near Siddhi Vinayak College in Barakalan. The plot features an excellent 100 wide front. Offered at a final rate of 1.10 per Bigha, with a comfortable payment time of 4 months allowed.',
      hi: 'सिद्धिविनायक कॉलेज, बरकलां के पास 2 बीघा बेहतरीन जमीन बिकाऊ। शानदार 100 फ्रंट के साथ। 1.10 प्रति बीघा के बहुत ही उचित मूल्य पर, जिसमें भुगतान के लिए 4 महीने का समय भी दिया गया है।'
    },
    amenities: {
      en: ['100 Front', '2 Bigha Area', 'Investment Opportunity', 'Clear Title'],
      hi: ['100 फ्रंट', '2 बीघा क्षेत्रफल', 'निवेश का अवसर', 'क्लियर टाइटल']
    },
    mapUrl: null,
    adminMapUrl: null,
    nearby: {
      en: [
        { name: 'Siddhi Vinayak College', distance: 'Near', category: 'Education' }
      ],
      hi: [
        { name: 'सिद्धिविनायक कॉलेज', distance: 'पास', category: 'शिक्षा' }
      ]
    }
  },
  {
    id: 4,
    name: {
      en: 'All Size Plots - Vivekanand Colony',
      hi: 'सभी आकार के प्लॉट - विवेकानंद कॉलोनी'
    },
    price: '₹ 900 / sq.ft',
    location: 'Vivekanand Colony, Kumrauha',
    address: 'Vivekanand Colony, Kumrauha\nAll Size Plots Available\nPrime Location Nearby Market\n800m from No.2 School\nRate: ₹ 900 per sq.ft',
    type: 'plot',
    status: 'buy',
    category: 'lands_plots',
    beds: null,
    baths: null,
    sqft: 'Custom Sizes',
    tags: ['Prime Location', 'Near Market', '₹ 900/sqft'],
    tags_hi: ['प्राइम लोकेशन', 'बाजार के पास', '₹ 900/वर्ग फुट'],
    videoNote: `${import.meta.env.BASE_URL}plot%20sale%202/video.mp4`,
    image: `${import.meta.env.BASE_URL}plot%20sale%202/Screenshot%202026-04-06%20235013.png`,
    images: [
      `${import.meta.env.BASE_URL}plot%20sale%202/Screenshot%202026-04-06%20235013.png`,
      `${import.meta.env.BASE_URL}plot%20sale%202/Screenshot%202026-04-06%20235029.png`
    ],
    description: {
      en: 'Various sized plots available in the highly sought-after Vivekanand Colony, Kumrauha. This is a prime location situated very close to the local market and just 800 meters distance from No.2 School. Offered at a very competitive final rate of 900 rs per sq.ft.',
      hi: 'विवेकानंद कॉलोनी, कुमरौहा में सभी आकार के प्लॉट उपलब्ध। यह एक प्राइम लोकेशन है जो बाजार के करीब और नंबर 2 स्कूल से केवल 800 मीटर की दूरी पर है। मात्र 900 रुपये प्रति वर्ग फुट के आकर्षक रेट पर।'
    },
    amenities: {
      en: ['Custom Sizes', 'Prime Location', 'Near Market', 'Near School'],
      hi: ['कस्टम आकार', 'प्राइम लोकेशन', 'बाजार के पास', 'स्कूल के पास']
    },
    mapUrl: null,
    adminMapUrl: null,
    nearby: {
      en: [
        { name: 'No.2 School', distance: '800 m', category: 'Education' },
        { name: 'Local Market', distance: 'Nearby', category: 'Shopping' }
      ],
      hi: [
        { name: 'नंबर 2 स्कूल', distance: '800 मीटर', category: 'शिक्षा' },
        { name: 'स्थानीय बाज़ार', distance: 'पास', category: 'बाज़ार' }
      ]
    }
  },
  {
    id: 5,
    name: {
      en: 'New House for Sale - 22×45, Railway Crossing',
      hi: 'बिकाऊ नया मकान - 22×45, रेलवे क्रॉसिंग'
    },
    price: '₹ 28 Lakh',
    location: 'Railway Crossing, Jay Shree Garden, Bhind',
    address: 'New House for Sale\nSize: 22 by 45\nLocation: Railway Crossing, Jay Shree Garden, Bhind\nRoad: 20 ft\nOnly 300 meters from Main Highway\nRate: ₹28 Lakh',
    type: 'house',
    status: 'buy',
    category: 'sale_residential',
    beds: null,
    baths: null,
    sqft: '990',
    tags: ['22×45 Plot', '20ft Road', 'Main Highway 300m'],
    tags_hi: ['22×45 प्लॉट', '20 फीट रोड', 'मुख्य राजमार्ग 300 मी'],
    image: `${import.meta.env.BASE_URL}house%20for%20sale%201/WhatsApp%20Image%202026-04-07%20at%2011.08.07%20PM.jpeg`,
    images: [
      `${import.meta.env.BASE_URL}house%20for%20sale%201/WhatsApp%20Image%202026-04-07%20at%2011.08.07%20PM.jpeg`,
      `${import.meta.env.BASE_URL}house%20for%20sale%201/Screenshot%202026-04-06%20235013.png`,
      `${import.meta.env.BASE_URL}house%20for%20sale%201/Screenshot%202026-04-06%20235436.png`,
      `${import.meta.env.BASE_URL}house%20for%20sale%201/Screenshot%202026-04-07%20231045.png`,
      `${import.meta.env.BASE_URL}house%20for%20sale%201/Screenshot%202026-04-07%20231055.png`,
      `${import.meta.env.BASE_URL}house%20for%20sale%201/Screenshot%202026-04-07%20231103.png`
    ],
    description: {
      en: 'Newly built residential house available for sale on a 22 by 45 plot size (approx 990 sq.ft). Prime location near the Railway Crossing at Jay Shree Garden, Bhind. It features a wide 20 ft frontal road and is extremely convenient being only 300 meters away from the Main Highway.',
      hi: '22 x 45 प्लॉट साइज (लगभग 990 वर्ग फुट) पर नवनिर्मित आवासीय मकान बिक्री के लिए। जय श्री गार्डन, भिंड में रेलवे क्रॉसिंग के पास प्रमुख स्थान। इसका फ्रंटल रोड 20 फीट चौड़ा है और यह मुख्य राजमार्ग से केवल 300 मीटर की दूरी पर स्थित अत्यंत सुविधाजनक है।'
    },
    amenities: {
      en: ['22×45 Plot Size', '20 ft Wide Road', 'Near Highway (300m)', 'Prime Location'],
      hi: ['22×45 प्लॉट साइज', '20 फीट चौड़ी सड़क', 'राजमार्ग के पास (300 मी)', 'प्राइम लोकेशन']
    },
    mapUrl: null,
    adminMapUrl: null,
    nearby: {
      en: [
        { name: 'Main Highway', distance: '300 m', category: 'Transport' },
        { name: 'Railway Crossing', distance: 'Near', category: 'Transport' },
        { name: 'Jay Shree Garden', distance: 'Nearby', category: 'Park' }
      ],
      hi: [
        { name: 'मुख्य राजमार्ग', distance: '300 मीटर', category: 'परिवहन' },
        { name: 'रेलवे क्रॉसिंग', distance: 'पास', category: 'परिवहन' },
        { name: 'जय श्री गार्डन', distance: 'पास', category: 'पार्क' }
      ]
    }
  }
];
