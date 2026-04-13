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
  },
  {
    id: 6,
    name: {
      en: 'House for Sale - 20×30, Joshi Nagar',
      hi: 'बिकाऊ मकान - 20×30, जोशी नगर'
    },
    price: '₹ 12 Lakh',
    location: 'Joshi Nagar (Near Sattra Batalian), Bhind',
    address: 'House for Sale\nSize: 20 by 30\nLocation: Joshi Nagar, Sattrabatalian\nNear Bullet Agency\nRate: ₹12 Lakh',
    type: 'house',
    status: 'buy',
    category: 'sale_residential',
    beds: null,
    baths: null,
    sqft: '600',
    tags: ['20×30 Plot', 'Joshi Nagar', 'Affordable'],
    tags_hi: ['20×30 प्लॉट', 'जोशी नगर', 'किफायती'],
    image: `${import.meta.env.BASE_URL}house%20for%20sale%206/Screenshot%202026-04-13%20142909.png`,
    images: [
      `${import.meta.env.BASE_URL}house%20for%20sale%206/Screenshot%202026-04-13%20142909.png`,
      `${import.meta.env.BASE_URL}house%20for%20sale%202/Screenshot%202026-04-07%20231334.png`
    ],
    description: {
      en: 'Residential house available for sale on a 20 by 30 plot size (approx 600 sq.ft). Located in Joshi Nagar, Sattrabatalian, near Bullet Agency, Bhind. Available at a very affordable rate of ₹12 Lakh.',
      hi: '20 x 30 प्लॉट साइज (लगभग 600 वर्ग फुट) पर आवासीय मकान बिक्री के लिए। जोशी नगर, सत्रा बटालियन, बुलेट एजेंसी के पास, भिंड में स्थित है। यह ₹12 लाख के बहुत ही किफायती मूल्य पर उपलब्ध है।'
    },
    amenities: {
      en: ['20×30 Plot Size', 'Affordable Price', 'Near Sattra Batalian', 'Near Bullet Agency'],
      hi: ['20×30 प्लॉट साइज', 'किफायती कीमत', 'सत्रा बटालियन के पास', 'बुलेट एजेंसी के पास']
    },
    mapUrl: 'https://www.google.com/maps?q=26.5834433,78.79774&z=17&hl=en&output=embed',
    adminMapUrl: 'https://www.google.com/maps?q=26.5834433,78.79774&z=17&hl=en&output=embed',
    nearby: {
      en: [
        { name: 'Sattra Batalian', distance: 'Near', category: 'Landmark' },
        { name: 'Bullet Agency', distance: 'Near', category: 'Landmark' }
      ],
      hi: [
        { name: 'सत्रा बटालियन', distance: 'पास', category: 'लैंडमार्क' },
        { name: 'बुलेट एजेंसी', distance: 'पास', category: 'लैंडमार्क' }
      ]
    }
  },
  {
    id: 7,
    name: {
      en: 'G+1 House for Sale - 15×60, Shastri Nagar',
      hi: 'G+1 बिकाऊ मकान - 15×60, शास्त्री नगर'
    },
    price: '₹ 38 Lakh',
    location: '131, B Block Shastri Nagar, Ward no. 8, Bhind (M.P) 477001',
    address: 'Plot Size: 15×60 (900 sqft)\nConstruction: 1800 sqft (G+1)\nLocation: 131, B Block Shastri Nagar, Ward no. 8, Bhind\nDistance: 300-400 mtr from National Highway\nRate: ₹38 Lakh',
    type: 'house',
    status: 'buy',
    category: 'sale_residential',
    beds: null,
    baths: null,
    sqft: '1800 ',
    tags: ['G+1', '15×60 Plot', 'Near NH'],
    tags_hi: ['G+1', '15×60 प्लॉट', 'NH के पास'],
    image: `${import.meta.env.BASE_URL}house%20for%20sale%203/Screenshot%202026-04-07%20232926.png`,
    images: [
      `${import.meta.env.BASE_URL}house%20for%20sale%203/Screenshot%202026-04-07%20232926.png`,
      `${import.meta.env.BASE_URL}house%20for%20sale%203/Screenshot%202026-04-07%20232935.png`
    ],
    videoNote: `${import.meta.env.BASE_URL}house%20for%20sale%203/video.mp4`,
    description: {
      en: 'Spacious G+1 residential house available for sale in B Block, Shastri Nagar, Bhind. It sits on a 15×60 plot (approx 900 sq.ft) with a total constructed area of 1800 sq.ft. Extremely well-located, just 300-400 meters away from the National Highway.',
      hi: 'B ब्लॉक, शास्त्री नगर, भिंड में विशाल G+1 आवासीय मकान बिक्री के लिए। यह 15×60 प्लॉट (900 वर्ग फुट) पर बना है, जिसका कुल निर्माण क्षेत्र 1800 वर्ग फुट है। बहुत ही सुविधाजनक स्थान, राष्ट्रीय राजमार्ग (National Highway) से मात्र 300-400 मीटर अंदर।'
    },
    amenities: {
      en: ['15×60 Plot Size', '1800 sqft Construction (G+1)', '300-400m from NH', 'Prime Location'],
      hi: ['15×60 प्लॉट साइज', '1800 वर्ग फुट निर्माण (G+1)', 'NH से 300-400मी अंदर', 'प्राइम लोकेशन']
    },
    mapUrl: 'https://www.google.com/maps?q=26.5573405,78.769653&z=17&hl=en&output=embed',
    adminMapUrl: 'https://www.google.com/maps?q=26.5573405,78.769653&z=17&hl=en&output=embed',
    nearby: {
      en: [
        { name: 'National Highway', distance: '300-400 m', category: 'Transport' }
      ],
      hi: [
        { name: 'राष्ट्रीय राजमार्ग', distance: '300-400 मीटर', category: 'परिवहन' }
      ]
    }
  },
  {
    id: 8,
    name: {
      en: 'House for Sale - 20×50, Darpan Colony',
      hi: 'बिकाऊ मकान - 20×50, दर्पण कॉलोनी'
    },
    price: '₹ 35 Lakh',
    location: 'Darpan Colony (Before Bharoli Tirahe)',
    address: 'House for Sale\nSize: 20 by 50\nLocation: Darpan Colony, Before Bharoli Tirahe\nLayout: 4 Rooms, 1 Kitchen, Lath Bath, Baithak, Gallery\nRate: ₹35 Lakh',
    type: 'house',
    status: 'buy',
    category: 'sale_residential',
    beds: 4,
    baths: 1,
    sqft: '1000',
    tags: ['20×50 Plot', '4 Rooms', 'Darpan Colony'],
    tags_hi: ['20×50 प्लॉट', '4 कमरे', 'दर्पण कॉलोनी'],
    image: `${import.meta.env.BASE_URL}house%20sale%204/Screenshot%202026-04-09%20214313.png`,
    images: [
      `${import.meta.env.BASE_URL}house%20sale%204/Screenshot%202026-04-09%20214313.png`,
      `${import.meta.env.BASE_URL}house%20sale%204/Screenshot%202026-04-09%20214325.png`
    ],
    description: {
      en: 'Spacious residential house available for sale on a 20×50 plot size. Located in Darpan Colony, just before Bharoli Tirahe. It includes 4 rooms, 1 kitchen, bathroom, baithak (living room), and a gallery.',
      hi: '20×50 प्लॉट साइज पर विशाल आवासीय मकान बिक्री के लिए। दर्पण कॉलोनी में स्थित, भरौली तिराहे से ठीक पहले। इसमें 4 कमरे, 1 रसोई, लैट-बाथ, बैठक और गैलरी शामिल हैं।'
    },
    amenities: {
      en: ['20×50 Plot Size', '4 Rooms', 'Kitchen & Bath', 'Baithak & Gallery'],
      hi: ['20×50 प्लॉट साइज', '4 कमरे', 'रसोई और बाथरूम', 'बैठक और गैलरी']
    },
    mapUrl: 'https://www.google.com/maps?q=26.5462683,78.78966&z=17&hl=en&output=embed',
    adminMapUrl: 'https://www.google.com/maps?q=26.5462683,78.78966&z=17&hl=en&output=embed',
    nearby: {
      en: [
        { name: 'Bharoli Tirahe', distance: 'Near', category: 'Landmark' }
      ],
      hi: [
        { name: 'भरौली तिराहे', distance: 'पास', category: 'लैंडमार्क' }
      ]
    }
  },
  {
    id: 9,
    name: {
      en: 'Premium Plot - Best Service',
      hi: 'प्रीमियम प्लॉट - बेहतरीन सेवा'
    },
    price: '₹ 34 Lakh',
    location: 'Bhind (See Map for Location)',
    address: 'Premium Plot for Sale\nFeatures: Best Plot, Best Service\nRate: ₹34 Lakh',
    type: 'plot',
    status: 'buy',
    category: 'lands_plots',
    beds: null,
    baths: null,
    sqft: 'Custom',
    tags: ['Best Plot', 'Premium', '₹ 34 Lakh'],
    tags_hi: ['बेहतरीन प्लॉट', 'प्रीमियम', '₹ 34 लाख'],
    image: `${import.meta.env.BASE_URL}house%20sale%205/Screenshot%202026-04-09%20214719.png`,
    images: [
      `${import.meta.env.BASE_URL}house%20sale%205/Screenshot%202026-04-09%20214719.png`
    ],
    description: {
      en: 'Offering the best plot with the best service. Prime real estate opportunity available at 34 Lakh. See map for exact location coordinates.',
      hi: 'सबसे अच्छी सेवा के साथ सबसे अच्छे प्लॉट की पेशकश। 34 लाख में प्राइम रियल एस्टेट का अवसर उपलब्ध है। सटीक स्थान के लिए नक्शा देखें।'
    },
    amenities: {
      en: ['Best Plot', 'Premium Location', 'Best Service'],
      hi: ['बेहतरीन प्लॉट', 'प्रीमियम लोकेशन', 'सर्वोत्तम सेवा']
    },
    mapUrl: 'https://www.google.com/maps?q=26.5516683,78.8151695&z=17&hl=en&output=embed',
    adminMapUrl: 'https://www.google.com/maps?q=26.5516683,78.8151695&z=17&hl=en&output=embed',
    nearby: {
      en: [],
      hi: []
    }
  }
];
