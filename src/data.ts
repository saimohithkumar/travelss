import { Vehicle, Testimonial, FAQItem, ContactInfo } from './types';

// Let's import the generated images or directly reference them
import swiftDzireImg from './assets/images/swift_dzire_1781241605239.jpg';
import toyotaCrystaImg from './assets/images/toyota_crysta_1781241573563.jpg';
import forceTravellerImg from './assets/images/tempo_traveller_1781241590078.jpg';
import luxuryMinibusImg from './assets/images/luxury_minibus_1781241622077.jpg';

export const VEHICLES: Vehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire (or similar)',
    type: 'Sedan',
    capacity: '4 + 1 Seater',
    baggage: '2 Medium Bags',
    AC: true,
    image: swiftDzireImg,
    features: [
      'Ample Boot Space',
      'Comfortable Cushioned Seats',
      'Bluetooth Music System',
      'Mobile Charging Point',
      'Experienced Local Driver'
    ],
    bestFor: 'Perfect for small families, couples, or solo business travellers visiting Tirupati & Tirumala Devasthanam.'
  },
  {
    id: 'toyota-crysta',
    name: 'Toyota Innova Crysta',
    type: 'Premium SUV',
    capacity: '7 + 1 Seater',
    baggage: '4 Large Bags',
    AC: true,
    image: toyotaCrystaImg,
    features: [
      'Premium Captain Seats',
      'Rear AC Vents with Climate Control',
      'Superior Safety (Airbags & ABS)',
      'Smooth Suspension for Hill Roads',
      'Spacious Cabin Legroom'
    ],
    bestFor: 'Best-in-class comfort for families visiting Tirumala, local sight-seeing, and longer outstation pilgrim trips.'
  },
  {
    id: 'force-traveller',
    name: 'Force Traveller',
    type: 'Tempo Traveller',
    capacity: '12 to 17 Seater',
    baggage: '6+ Large Bags & Carrier',
    AC: true,
    image: forceTravellerImg,
    features: [
      'Push-back Seats for long journeys',
      'LCD Screen with Music System',
      'High Roof with Spacious Headroom',
      'Individual Reading Lights',
      'Perfect for Temple Group Yatras'
    ],
    bestFor: 'Ideal for medium-sized pilgrim groups, joint families, and wedding parties travelling together.'
  },
  {
    id: 'luxury-coach',
    name: 'Luxury Coach / Mini Bus',
    type: 'Luxury Coach',
    capacity: '21+ Seater',
    baggage: 'Massive Storage Compartments',
    AC: true,
    image: luxuryMinibusImg,
    features: [
      'Ultra Luxury Coach Seats',
      'Advanced Air Suspension',
      'LED TV & Premium Audio System',
      'Ample Overhead Luggage Space',
      'PA System for Tour Guides'
    ],
    bestFor: 'Specially configured for large groups, divine community yatras, and corporate retreats to Tirupati.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ramachandran Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'Booked a Toyota Crysta for my parents’ Tirumala Darshan. The driver was waiting at Tirupati Railway Station with a clean car. He knew the hill road routes perfectly and guided us on how to proceed. Highly recommended!',
    date: 'May 12, 2026',
    avatarSeed: 'ramachandran'
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    location: 'Hyderabad, Telangana',
    rating: 5,
    text: 'We hired a 14-seater Force Traveller for our family trip to Kalahasti, Kanipakam, and Tirupati. Absolute value for money! Excellent service, clean vehicle, and very patient driver who adjusted to our temple timings.',
    date: 'June 02, 2026',
    avatarSeed: 'priya'
  },
  {
    id: 't3',
    name: 'Venkat Rao',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'Sri Ganesha Travels offers the best taxi service in Tirupati. Seamless booking via WhatsApp! Our Swift Dzire driver, Gopi, was extremely humble and acted as an excellent local guide. Five-star experience!',
    date: 'June 10, 2026',
    avatarSeed: 'venkat'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I confirm my booking with Sri Ganesha Travels?',
    answer: 'Once you fill in the booking form, we instantly generate a pre-formatted WhatsApp message. Send the message to us via WhatsApp, and our coordinator will share the booking confirmation, driver details, and tariff breakdown details within 5-10 minutes.'
  },
  {
    id: 'faq-2',
    question: 'Can the driver assist us with Tirumala Darshan guidelines?',
    answer: 'Yes! All our drivers are locals with extensive knowledge of Tirumala Balaji Darshan entry points, luggage deposits, cell phone restrictions, and tons of general guidelines to save you time.'
  },
  {
    id: 'faq-3',
    question: 'Do your vehicle fares include toll charges and hill-climbing taxes?',
    answer: 'We provide clear, all-inclusive package pricing for your specific itinerary. Toll gate charges, Tirumala hill entry permits, and parking fees can be bundled into a fixed custom quote. Speak with our coordinator on WhatsApp to get the most competitive, transparent price with no hidden charges!'
  },
  {
    id: 'faq-4',
    question: 'Are your vehicles safe and sanitized?',
    answer: 'Absolutely. We sanitize all cabs before every trip. Our vehicles undergo regular maintenance checkups, are fully insured, and have active GPS tracking for your maximum safety.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer pickup service from Renigunta Airport & Railway station?',
    answer: 'Yes, we specialize in pick-up and drop services from Renigunta Airport (TIR), Tirupati Main Railway Station (TPTY), and Renigunta Junction. Our driver will be ready at the arrival gate with your name board.'
  }
];

export const CONTACT_INFO: ContactInfo = {
  phonePrimary: '+91 83742 33802',
  phoneSecondary: '+91 81256 75432',
  whatsappNumber: '918374233802', // WhatsApp format with country code, no space/special chars
  email: 'bookings@sriganeshatravelstpt.com',
  address: 'Shop No. 4, Ganesha Complex, Opp. APSRTC Bus Stand, Tirupati, Andhra Pradesh - 517501',
  googleMapsIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5367852684813!2d79.4184643!3d13.626789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3cd13fd0d8ffffaf%3A0xe67bf0bf745331e1!2sTirupati%20APSRTC%20Central%20Bus%20Station!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin'
};
