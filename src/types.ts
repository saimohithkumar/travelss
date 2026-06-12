export interface Vehicle {
  id: string;
  name: string;
  type: 'Sedan' | 'Premium SUV' | 'Tempo Traveller' | 'Luxury Coach';
  capacity: string;
  baggage: string;
  AC: boolean;
  image: string;
  features: string[];
  bestFor: string;
}

export interface BookingDetails {
  fullName: string;
  mobileNumber: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  destination: string;
  selectedVehicleId: string;
  pickupLocation: string;
  tripType: 'round-trip' | 'one-way' | 'local-sightseeing' | 'tirumala-darshan' | 'custom-south-india' | string;
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  email: string;
  address: string;
  googleMapsIframeUrl: string;
}
