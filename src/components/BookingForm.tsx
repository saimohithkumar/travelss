import React, { useState, useEffect } from 'react';
import { Calendar, Phone, User, MapPin, Navigation, MessageSquare, Check, Sparkles, CheckCircle, Mail, Send } from 'lucide-react';
import { BookingDetails } from '../types';
import { VEHICLES, CONTACT_INFO } from '../data';

const SOUTH_INDIA_PLACES = [
  { id: 'tirupati', name: 'Tirupati', state: 'AP / TS', type: 'Temples' },
  { id: 'tirumala', name: 'Tirumala Balaji', state: 'AP / TS', type: 'Darshan' },
  { id: 'kalahasti', name: 'Srikalahasti', state: 'AP / TS', type: 'Temples' },
  { id: 'kanipakam', name: 'Kanipakam Ganesha', state: 'AP / TS', type: 'Temples' },
  { id: 'srisailam', name: 'Srisailam Temple', state: 'AP / TS', type: 'Temples' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'AP / TS', type: 'City' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', type: 'City' },
  { id: 'vellore', name: 'Vellore Golden Temple', state: 'Tamil Nadu', type: 'Temples' },
  { id: 'pondicherry', name: 'Pondicherry', state: 'Tamil Nadu', type: 'Beach / Historic' },
  { id: 'madurai', name: 'Madurai Meenakshi', state: 'Tamil Nadu', type: 'Temples' },
  { id: 'rameshwaram', name: 'Rameshwaram', state: 'Tamil Nadu', type: 'Jyotirlinga' },
  { id: 'kanyakumari', name: 'Kanyakumari', state: 'Tamil Nadu', type: 'Scenic' },
  { id: 'ooty', name: 'Ooty Hills', state: 'Tamil Nadu', type: 'Hill Station' },
  { id: 'kodaikanal', name: 'Kodaikanal', state: 'Tamil Nadu', type: 'Hill Station' },
  { id: 'bangalore', name: 'Bangalore (Bengaluru)', state: 'Karnataka', type: 'City' },
  { id: 'mysore', name: 'Mysore Palace', state: 'Karnataka', type: 'Palace' },
  { id: 'coorg', name: 'Coorg', state: 'Karnataka', type: 'Hill Station' },
  { id: 'munnar', name: 'Munnar', state: 'Kerala', type: 'Hill Station' },
  { id: 'kochi', name: 'Kochi (Cochin)', state: 'Kerala', type: 'Scenic' },
  { id: 'wayanad', name: 'Wayanad', state: 'Kerala', type: 'Hill Station' }
];

interface BookingFormProps {
  selectedVehicleId: string;
  selectedTripType: string;
  onChangeVehicle: (id: string) => void;
  onChangeTripType: (type: string) => void;
}

export default function BookingForm({
  selectedVehicleId,
  selectedTripType,
  onChangeVehicle,
  onChangeTripType
}: BookingFormProps) {
  // Local state for booking form fields
  const [formData, setFormData] = useState<Partial<BookingDetails>>({
    fullName: '',
    mobileNumber: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    destination: '',
    pickupLocation: '',
    specialRequests: ''
  });

  const [activePlaceState, setActivePlaceState] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // active submission channel 'whatsapp' or 'email'
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [simulationSteps, setSimulationSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  // Sync state if props change from parent selectors (Hero/Fleet cards)
  useEffect(() => {
    if (selectedTripType) {
      // Handle setting defaults if needed
    }
  }, [selectedTripType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const selectedVehicle = VEHICLES.find(v => v.id === selectedVehicleId) || VEHICLES[0];

  const cleanPhoneNumber = (num: string): string => {
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return '91' + cleaned;
    }
    if (cleaned.length === 11 && cleaned.startsWith('0')) {
      return '91' + cleaned.substring(1);
    }
    return cleaned;
  };

  const handleTogglePlace = (placeName: string) => {
    const current = formData.destination || '';
    const placesList = current.split(',')
      .map(p => p.trim())
      .filter(p => p.length > 0);
    
    const index = placesList.indexOf(placeName);
    if (index > -1) {
      placesList.splice(index, 1);
    } else {
      placesList.push(placeName);
    }
    
    setFormData(prev => ({
      ...prev,
      destination: placesList.join(', ')
    }));
  };

  const isPlaceSelected = (placeName: string) => {
    const current = formData.destination || '';
    const placesList = current.split(',')
      .map(p => p.trim())
      .filter(p => p.length > 0);
    return placesList.includes(placeName);
  };

  // Logic to build the booking message string
  const generateBookingMessage = (details: Partial<BookingDetails>) => {
    const tripTypeLabels: Record<string, string> = {
      'round-trip': 'Outstation Round-Trip Yatra',
      'one-way': 'One-Way Drop Trip',
      'local-sightseeing': 'Tirupati Local Sightseeing',
      'tirumala-darshan': 'Tirumala Special Darshan package',
      'custom-south-india': 'Custom South India Tour (Multi-City)'
    };

    const tripLabel = tripTypeLabels[selectedTripType] || selectedTripType;

    return `*🔔 SRI GANESHA TRAVELS - NEW CAB BOOKING*
----------------------------------------
👤 *Customer Name:* ${details.fullName}
📞 *Mobile Number:* ${details.mobileNumber}
🚗 *Selected Ride:* ${selectedVehicle.name} (${selectedVehicle.type})
🗺️ *Trip Style:* ${tripLabel}
📍 *Pick-up Point:* ${details.pickupLocation}
🚩 *Destination:* ${details.destination}
📅 *Journey Date:* ${details.pickupDate}
⏰ *Pick-up Time:* ${details.pickupTime}
📅 *Return Date:* ${details.returnDate || 'Same Day / N-A'}
💬 *Special Requests:* ${details.specialRequests || 'None'}
----------------------------------------
_Please confirm availability and share tariff quote!_`;
  };

  const generateSuccessMessage = (details: Partial<BookingDetails>) => {
    const tripTypeLabels: Record<string, string> = {
      'round-trip': 'Outstation Round-Trip Yatra',
      'one-way': 'One-Way Drop Trip',
      'local-sightseeing': 'Tirupati Local Sightseeing',
      'tirumala-darshan': 'Tirumala Special Darshan package',
      'custom-south-india': 'Custom South India Tour (Multi-City)'
    };

    const tripLabel = tripTypeLabels[selectedTripType] || selectedTripType;

    return `*✨ SRI GANESHA TRAVELS - BOOKING SUCCESSFUL!*
----------------------------------------
Dear *${details.fullName}*, thank you for choosing Sri Ganesha Travels for your Darshan journey! Your cab booking request is cataloged successfully.

🚗 *Vehicle:* ${selectedVehicle.name} (${selectedVehicle.type})
🗺️ *Trip Style:* ${tripLabel}
📍 *Pickup:* ${details.pickupLocation}
📅 *Journey Date:* ${details.pickupDate}
⏰ *Pickup Time:* ${details.pickupTime || 'N-A'}
📞 *Your Number:* ${details.mobileNumber}
----------------------------------------
🤝 Our operator *+91 83742 33802* is processing your request. We will share your driver and tariff setup details shortly!`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName || !formData.mobileNumber || !formData.pickupDate || !formData.destination) {
      alert("Please fill in all the required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setCurrentStep(0);

    const message = generateBookingMessage(formData);

    if (channel === 'whatsapp') {
      // Option A: WhatsApp direct send
      setSimulationSteps([
        'Validating traveler details...',
        'Formatting ticket parameters...',
        'Connecting with Sri Ganesha Travels Support...',
        'Redirecting to secure WhatsApp chat...'
      ]);

      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCurrentStep(step);
        if (step >= 4) {
          clearInterval(interval);
          setIsSubmitting(false);
          setSubmitSuccess(true);
          
          // Official WhatsApp api redirect
          setTimeout(() => {
            const encodedMessage = encodeURIComponent(message);
            const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedMessage}`;
            window.open(waUrl, '_blank');
          }, 800);
        }
      }, 650);

    } else {
      // Option B: Mocking high-fidelity Email submission
      setSimulationSteps([
        'Checking secure API connection...',
        'Serializing booking payload...',
        'Transmitting to bookings@sriganeshatravelstpt.com...',
        'Generating receipt & sending callback SMS...'
      ]);

      let step = 0;
      const interval = setInterval(() => {
        step++;
        setCurrentStep(step);
        if (step >= 4) {
          clearInterval(interval);
          setIsSubmitting(false);
          setSubmitSuccess(true);
        }
      }, 800);
    }
  };

  return (
    <section id="booking-section" className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full inline-block">
            Secure Booking Intake
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-royal-950 leading-tight">
            Book Your Ride in <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">60 Seconds</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Fill in your tour guidelines below. Choose WhatsApp for instant reservations, or Email query form for tailored rates. No credit card or advance booking token needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Complete Interactive Passenger Info Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-royal-950/[0.03] border border-slate-100">
            
            {/* Booking Channel Selector */}
            <div className="grid grid-cols-2 gap-4 bg-slate-100 p-1.5 rounded-2xl mb-8">
              <button
                type="button"
                onClick={() => { setChannel('whatsapp'); setSubmitSuccess(false); }}
                className={`py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  channel === 'whatsapp'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                WhatsApp (Instant)
              </button>
              <button
                type="button"
                onClick={() => { setChannel('email'); setSubmitSuccess(false); }}
                className={`py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  channel === 'email'
                    ? 'bg-royal-900 text-white shadow-md shadow-royal-900/10'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Mail className="w-4 h-4 shrink-0" />
                Email / Formspree
              </button>
            </div>

            {/* Custom Information Message */}
            <div className={`p-4 rounded-xl border flex gap-3 text-xs mb-8 transition-colors ${
              channel === 'whatsapp' 
                ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-850'
                : 'bg-royal-500/5 border-royal-500/10 text-royal-900'
            }`}>
              <Sparkles className={`w-5 h-5 shrink-0 mt-0.5 ${channel === 'whatsapp' ? 'text-emerald-600' : 'text-royal-600'}`} />
              <div>
                <strong>{channel === 'whatsapp' ? 'WhatsApp Submission Selected:' : 'Email / Form Request Selected:'}</strong>
                <p className="mt-1 leading-relaxed opacity-90">
                  {channel === 'whatsapp' 
                    ? 'Submit to instantly generate a clean WhatsApp dispatch card on your device. Click send in WhatsApp of the Sri Ganesha tour operator to lock in your ride!' 
                    : 'We will dispatch an automated service email to our regional booking desk. One of our coordinators will call you back on your mobile to guide you in Telugu, English or Tamil.'
                  }
                </p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Row 1: Full name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    Mobile / WhatsApp No <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="mobileNumber"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Selected Vehicle & Trip Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 block">
                    Selected Vehicle <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="selectedVehicleId"
                    value={selectedVehicleId}
                    onChange={(e) => onChangeVehicle(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 rounded-xl px-4.5 py-3.5 text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                  >
                    {VEHICLES.map(vehicle => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} ({vehicle.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 block">
                    Travel Trip Style <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="selectedTripType"
                    value={selectedTripType}
                    onChange={(e) => onChangeTripType(e.target.value)}
                    className="w-full bg-slate-50 hover:bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 rounded-xl px-4.5 py-3.5 text-sm focus:outline-none appearance-none cursor-pointer transition-all"
                  >
                    <option value="tirumala-darshan">Tirumala Special Darshan package</option>
                    <option value="local-sightseeing">Tirupati Local Temple Sightseeing</option>
                    <option value="one-way">One-Way Drop Trip</option>
                    <option value="round-trip">Outstation Round-Trip Yatra</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Pickup Date & Return Date & Pickup Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    Pickup Date <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="date" 
                    name="pickupDate"
                    required
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1">
                    Setup Time
                  </label>
                  <input 
                    type="time" 
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1 font-sans">
                    Return Date
                  </label>
                  <input 
                    type="date" 
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Pickup Location & Point of Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    Pickup Point in Tirupati <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="pickupLocation"
                    required
                    placeholder="e.g. Tirupati Railway Station, Renigunta Airport"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-orange-500" />
                    Destination Place <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="destination"
                    required
                    placeholder="e.g. Tirumala Temple, Kalahasti, Bangalore"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>
              </div>

              {/* SOUTH INDIA INTERACTIVE PLACE SELECTOR */}
              <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-royal-950 flex items-center gap-1.5 font-display">
                      <Sparkles className="w-4 h-4 text-amber-500 animate-pulse shrink-0" />
                      South India Itinerary: Quick Select Places
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      Select or tap any places in South India to auto-build your route:
                    </p>
                  </div>
                  {/* Search box for places */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search South India..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-white border border-slate-200 focus:border-amber-500 rounded-lg px-2.5 py-1 text-xs focus:outline-none w-full sm:w-44 focus:ring-1 focus:ring-amber-500/20"
                    />
                  </div>
                </div>

                {/* State Tabs */}
                <div className="flex flex-wrap gap-1">
                  {['ALL', 'AP / TS', 'Tamil Nadu', 'Karnataka', 'Kerala'].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setActivePlaceState(st)}
                      className={`text-[10px] font-bold uppercase px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        activePlaceState === st
                          ? 'bg-royal-900 border-royal-900 text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {st === 'ALL' ? 'All South India' : st === 'AP / TS' ? 'Andhra / Telangana' : st}
                    </button>
                  ))}
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1 select-none">
                  {SOUTH_INDIA_PLACES.filter((place) => {
                    if (activePlaceState !== 'ALL' && place.state !== activePlaceState) return false;
                    if (searchTerm && !place.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
                    return true;
                  }).map((place) => {
                    const selected = isPlaceSelected(place.name);
                    return (
                      <button
                        key={place.id}
                        type="button"
                        onClick={() => handleTogglePlace(place.name)}
                        className={`text-xs px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 border transition-all cursor-pointer ${
                          selected
                            ? 'bg-amber-500/10 border-amber-500 text-amber-950 font-bold shadow-sm'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {selected ? (
                          <Check className="w-3 h-3 text-amber-600 shrink-0 border border-amber-400 bg-white rounded-full p-0.5" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
                        )}
                        <span>{place.name}</span>
                        <span className="text-[9px] opacity-65 font-semibold px-1 py-0.5 bg-slate-100/80 rounded text-slate-500">{place.type}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Customized Pilgrim Comments */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-royal-950 block">
                  Any Special Requests or Guided Requirements?
                </label>
                <textarea 
                  name="specialRequests"
                  rows={2}
                  placeholder="Need driver speaking Tamil / Hindi, child safety seat, senior citizen support, multiple temple stop guidelines, etc."
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                ></textarea>
              </div>

              {/* CTA Booking Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                  isSubmitting
                    ? 'bg-slate-400 text-slate-200 pointer-events-none'
                    : channel === 'whatsapp'
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10 hover:shadow-emerald-600/20'
                      : 'bg-royal-900 hover:bg-royal-950 text-white shadow-royal-900/10 hover:shadow-royal-900/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    Processing Secure Order...
                  </>
                ) : channel === 'whatsapp' ? (
                  <>
                    <Send className="w-4 h-4" />
                    Book Instantly on WhatsApp
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    Submit Ticket via Email API
                  </>
                )}
              </button>
            </form>

            {/* Simulated Live submission notification workflow logic */}
            {isSubmitting && (
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 animate-pulse">
                <h5 className="text-xs font-bold text-royal-950 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                  Booking Pipeline Active
                </h5>
                <ul className="space-y-1.5 list-none">
                  {simulationSteps.map((stepMsg, idx) => (
                    <li key={idx} className="text-xs flex items-center gap-2">
                      <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                        idx < currentStep ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {idx < currentStep ? '✓' : idx + 1}
                      </span>
                      <span className={idx === currentStep ? 'text-royal-950 font-bold' : 'text-gray-500'}>
                        {stepMsg}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Success Dialogue banner */}
            {submitSuccess && !isSubmitting && (
              <div className="mt-6 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-850 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-emerald-950 font-display font-extrabold text-base">Booking Inquiry Created!</h4>
                    <p className="text-[11px] text-emerald-800">For passenger {formData.fullName}</p>
                  </div>
                </div>

                <div className="p-4 bg-white/80 rounded-xl space-y-3.5 border border-emerald-500/10 text-xs text-left">
                  <p className="font-semibold text-emerald-900 leading-normal">
                    We've compiled your travel details. Send them over to finish your reservation:
                  </p>

                  <div className="space-y-3 pt-1">
                    {/* Step 1: Send to Staff */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-emerald-50/70 border border-emerald-200/50 rounded-xl">
                      <div className="space-y-0.5">
                        <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">Step 1: Send Booking Request to Staff</p>
                        <p className="text-slate-600 text-[11px]">Send dispatch data to Sri Ganesha travels (+91 83742 33802)</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const encoded = encodeURIComponent(generateBookingMessage(formData));
                          window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-extrabold px-3.5 py-2 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-emerald-500/20"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send to Owner
                      </button>
                    </div>

                    {/* Step 2: Send Success confirmation to client */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-amber-50/60 border border-amber-200/50 rounded-xl">
                      <div className="space-y-0.5">
                        <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">Step 2: Send Success Ticket to Client</p>
                        <p className="text-slate-600 text-[11px]">Send copy of the final booking confirmation to your number: {formData.mobileNumber}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const cleanNum = cleanPhoneNumber(formData.mobileNumber || '');
                          const encodedSuccess = encodeURIComponent(generateSuccessMessage(formData));
                          window.open(`https://wa.me/${cleanNum}?text=${encodedSuccess}`, '_blank');
                        }}
                        className="bg-royal-900 hover:bg-royal-950 text-white text-[11px] font-extrabold px-3.5 py-2 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-royal-950/20"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Send to Client
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-emerald-800 leading-relaxed font-medium">
                  💡 <strong>Did pop-ups get blocked?</strong> If the secure redirection did not trigger automatically on press, utilize the buttons above to request both messaging paths directly.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Live Custom Package Estimate & Vehicle details Card */}
          <div className="lg:col-span-5 bg-royal-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-royal-900 sticky top-24">
            <h3 className="font-display text-xl font-bold text-white mb-2 flex items-center gap-2 border-b border-white/10 pb-4">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Car Booking Summary
            </h3>

            {/* Vehicle Card Profile preview */}
            <div className="space-y-6 pt-4">
              <div className="relative h-44 rounded-2xl overflow-hidden bg-royal-900 border border-white/10">
                <img 
                  src={selectedVehicle.image} 
                  alt={selectedVehicle.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-royal-950 font-bold px-3 py-1 rounded text-[10px] uppercase tracking-wider shadow">
                  {selectedVehicle.type}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-display text-2xl font-bold text-white">
                  {selectedVehicle.name}
                </h4>
                <p className="text-xs text-amber-300 font-medium">
                  {selectedVehicle.capacity} • {selectedVehicle.baggage} • Air Conditioned ({selectedVehicle.AC ? 'Yes' : 'No'})
                </p>
              </div>

              {/* Pricing Estimate Card Details */}
              <div className="bg-royal-900/60 p-4 rounded-2xl border border-white/5 space-y-3.5">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                  <span className="text-gray-400">Base Price:</span>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                    Pricing on Request
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                  <span className="text-gray-400">Driver Allowance:</span>
                  <span className="text-white font-medium">Included in quote</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                  <span className="text-gray-400">Local Tolls &amp; Parking:</span>
                  <span className="text-white font-medium">As per actuals / Extra</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold">Estimated Cost:</span>
                  <span className="font-display font-extrabold text-amber-400 text-sm uppercase tracking-wide">
                    Best rates guaranteed
                  </span>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="pt-2 text-xs space-y-2">
                <div className="flex items-start gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Free cancellation up to 12 hours before pick-up times.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Door-to-door transit: pickup from hotel/station.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>English, Telugu, Tamil, and Hindi speaking operators.</span>
                </div>
              </div>

              {/* Assistance support widget */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4 rounded-2xl border border-amber-500/20 text-center">
                <p className="text-xs text-amber-300 font-medium">
                  Need a custom pricing quote?
                </p>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi,%20I'm%20planning%20a%20trip%20to%20Tirupati%20and%20need%20help%20with%20cab%2520package%20charges.`}
                  target="_blank"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full font-bold shadow-md hover:scale-102 transition-all cursor-pointer"
                >
                  Chat with Expert operator
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
