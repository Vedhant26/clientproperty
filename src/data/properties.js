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
    image: `${import.meta.env.BASE_URL}plot1.jpeg`,
    images: [
      `${import.meta.env.BASE_URL}plot1.jpeg`
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
  }
];
