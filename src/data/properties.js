export const properties = [
  {
    id: 1,
    name: {
      en: 'Swatantra Nagar - 20×40, 2 Floor',
      hi: 'स्वतंत्र नगर - 20×40, 2 मंजिल'
    },
    price: '₹ 35 Lacs',
    location: 'Swatantra Nagar, Ujjain',
    type: 'house',
    status: 'buy',
    beds: 3,
    baths: 2,
    sqft: 800,
    tags: ['2 Floor', '20×40 Plot'],
    tags_hi: ['2 मंजिल', '20×40 प्लॉट'],
    image: '/plot1.jpeg',
    images: [
      '/plot1.jpeg'
    ],
    description: {
      en: 'Well-built 2-floor residential house on a 20×40 plot in Swatantra Nagar, Ujjain. Ideal for families looking for a ready-to-move home.',
      hi: 'स्वतंत्र नगर, उज्जैन में 20×40 प्लॉट पर बना 2 मंजिला आवासीय मकान। रहने के लिए तैयार घर की तलाश करने वाले परिवारों के लिए आदर्श।'
    },
    amenities: {
      en: ['2 Floors', '20×40 Plot', 'Residential Area'],
      hi: ['2 मंजिल', '20×40 प्लॉट', 'आवासीय क्षेत्र']
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.33593005825!2d75.760143!3d23.176467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82f44e996696fa!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
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
      en: 'Premium 3BHK Flat',
      hi: 'प्रीमियम 3BHK फ्लैट'
    },
    price: '₹ 65 Lacs',
    location: 'Arera Colony, Bhopal',
    type: 'flat',
    status: 'buy',
    beds: 3,
    baths: 3,
    sqft: 1550,
    tags: ['New Launch'],
    tags_hi: ['नया लॉन्च'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&auto=format&fit=crop',
    ],
    description: {
      en: 'Spacious 3 bedroom apartment looking over the Bhopal skyline. Complete with high-end fixtures and dedicated covered parking.',
      hi: 'भोपाल के स्काईलाइन को देखने वाला एक विशाल 3 बेडरूम अपार्टमेंट। हाई-एंड फिक्स्चर और सुरक्षित कवर पार्किंग के साथ।'
    },
    amenities: {
      en: ['Gym', 'Visitor Parking', 'CCTV', 'Lift'],
      hi: ['जिम', 'विजिटर पार्किंग', 'CCTV', 'लिफ्ट']
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117360.7719001358!2d77.389849!3d23.259933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8ad68fbd%3A0x2155716d572d451!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    nearby: {
      en: [
        { name: 'DB Mall', distance: '2.5 km', category: 'Shopping' },
        { name: 'Arera Gardens', distance: '1.0 km', category: 'Park' },
        { name: 'Bansal Hospital', distance: '0.8 km', category: 'Medical' }
      ],
      hi: [
        { name: 'DB मॉल', distance: '2.5 किमी', category: 'बाजार' },
        { name: 'अरेरा गार्डन', distance: '1.0 किमी', category: 'पार्क' },
        { name: 'बंसल अस्पताल', distance: '0.8 किमी', category: 'मेडिकल' }
      ]
    }
  },
  {
    id: 3,
    name: {
      en: 'Prime Retail Shop',
      hi: 'प्राइम रिटेल शॉप'
    },
    price: '₹ 45k / month',
    location: 'Freeganj, Ujjain',
    type: 'shop',
    status: 'rent',
    sqft: 800,
    tags: ['Commercial', 'High Visibility'],
    tags_hi: ['कमर्शियल', 'हाई विजिबिलिटी'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=1200&auto=format&fit=crop',
    ],
    description: {
      en: 'Excellent commercial shop space located in the busiest market of Freeganj. Perfect for brand outlets or premium cafes.',
      hi: 'फ्रीगंज के सबसे व्यस्त बाजार में स्थित बेहतरीन कमर्शियल दुकान का स्थान। ब्रांड आउटलेट या प्रीमियम कैफे के लिए बिल्कुल सही।'
    },
    amenities: {
      en: ['Main Road Facing', 'Washroom', 'Glass Facade'],
      hi: ['मेन रोड फेसिंग', 'वॉशरूम', 'ग्लास का फ्रंट']
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0!2d75.7!3d23.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzQ4LjAiTiA3NcKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    nearby: {
      en: [
        { name: 'Ujjain Junction', distance: '0.5 km', category: 'Transport' },
        { name: 'Tower Chowk', distance: '0.3 km', category: 'landmark' },
        { name: 'SBI Bank', distance: '0.1 km', category: 'Banking' }
      ],
      hi: [
        { name: 'उज्जैन जंक्शन', distance: '0.5 किमी', category: 'परिवहन' },
        { name: 'टावर चौक', distance: '0.3 किमी', category: 'लैंडमार्क' },
        { name: 'SBI बैंक', distance: '0.1 किमी', category: 'बैंकिंग' }
      ]
    }
  },
  {
    id: 4,
    name: {
      en: 'Residential Plot',
      hi: 'रेजिडेंशियल प्लॉट'
    },
    price: '₹ 85 Lacs',
    location: 'Kolar Road, Bhopal',
    type: 'plot',
    status: 'buy',
    sqft: 2400,
    tags: ['Corner Plot', 'Gated Society'],
    tags_hi: ['कॉर्नर प्लॉट', 'सिक्योर सोसायटी'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&auto=format&fit=crop',
    ],
    description: {
      en: 'West-facing corner residential plot in a fully developed premium gated society. Immediate registry available.',
      hi: 'पूरी तरह से विकसित प्रीमियम सोसायटी में পশ্চিম-मुखी(West-facing) कॉर्नर आवासीय प्लॉट। तुरंत रजिस्ट्री उपलब्ध।'
    },
    amenities: {
      en: ['Boundary Wall', 'Water Connection', 'Park Facing'],
      hi: ['बाउंड्री वॉल', 'पानी का कनेक्शन', 'पार्क फेसिंग']
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117360.7719001358!2d77.389849!3d23.259933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42b78a9c2d1d%3A0xe7265768822501a!2sKolar%20Rd%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    nearby: {
      en: [
        { name: 'Kolar Market', distance: '1.2 km', category: 'Shopping' },
        { name: 'AIMS Bhopal', distance: '4.5 km', category: 'Medical' },
        { name: 'City School', distance: '0.5 km', category: 'Education' }
      ],
      hi: [
        { name: 'कोलार बाजार', distance: '1.2 किमी', category: 'बाजार' },
        { name: 'AIMS भोपाल', distance: '4.5 किमी', category: 'मेडिकल' },
        { name: 'सिटी स्कूल', distance: '0.5 किमी', category: 'शिक्षा' }
      ]
    }
  }
];
