/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Fleet from './components/Fleet';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('swift-dzire');
  const [selectedTripType, setSelectedTripType] = useState<string>('tirumala-darshan');

  // Trigger when Quick Book widget submitted in the Hero section
  const handleQuickBook = (vehicleId: string, tripType: string) => {
    setSelectedVehicleId(vehicleId);
    setSelectedTripType(tripType);
    
    // Smooth scroll down to the main booking form
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Trigger when booking button chosen from the Fleet card array
  const handleSelectVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    
    // Smooth scroll down to the main booking form
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-amber-500 selection:text-royal-950">
      {/* Complete Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Visual Hero Area with quick estimate forms */}
        <Hero onQuickBook={handleQuickBook} />

        {/* History + Special Sightseeing packages */}
        <AboutUs />

        {/* Beautiful Interactive Vehicle card grids */}
        <Fleet onSelectVehicle={handleSelectVehicle} />

        {/* Detailed client form submission (with WhatsApp/Email dispatch) */}
        <BookingForm 
          selectedVehicleId={selectedVehicleId}
          selectedTripType={selectedTripType}
          onChangeVehicle={setSelectedVehicleId}
          onChangeTripType={setSelectedTripType}
        />

        {/* Real Pilgrim Stars and Testimonials */}
        <Testimonials />

        {/* Accordions for guidelines */}
        <FAQ />
      </main>

      {/* Embedded Maps Footer + WhatsApp Floating assist */}
      <Footer />
    </div>
  );
}

