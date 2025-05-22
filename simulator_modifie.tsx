
'use client';
import { useState } from 'react';

export default function Simulator() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [distance, setDistance] = useState(0);
  const [bags, setBags] = useState(0);
  const [isHighLocation, setIsHighLocation] = useState(false);
  const [largeItems, setLargeItems] = useState(0);
  const [passengers, setPassengers] = useState(1);
  const [isNight, setIsNight] = useState(false);

  const calculateFare = () => {
    let fare = 1000;
    fare += distance * (isNight ? 260 : 160);
    fare += bags * 100;
    if (isHighLocation) fare += 500;
    fare += largeItems * 500;
    if (passengers > 4) fare += 500;
    return fare;
  };

  const t = {
    fr: {
      title: "Simulateur de Tarif Hiva Taxi Moorea",
      distance: "Distance (km)",
      bags: "Bagages (>5 kg)",
      high: "Lieu en hauteur",
      large: "Objets encombrants",
      passengers: "Nombre de passagers",
      time: "Heure de départ",
      day: "Jour (6h–20h)",
      night: "Nuit (20h–6h)",
      result: "Tarif estimé",
      switch: "Passer à l’anglais",
      currency: " XPF",
    },
    en: {
      title: "Hiva Taxi Moorea Fare Simulator",
      distance: "Distance (km)",
      bags: "Luggage (>5 kg)",
      high: "High location",
      large: "Bulky items",
      passengers: "Number of passengers",
      time: "Time of travel",
      day: "Day (6am–8pm)",
      night: "Night (8pm–6am)",
      result: "Estimated fare",
      switch: "Switch to French",
      currency: " XPF",
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-green-100 rounded-2xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">{t[language].title}</h1>
      <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} className="text-blue-600 underline text-sm">
        {t[language].switch}
      </button>

      <label>{t[language].distance}</label>
      <input type="number" value={distance} onChange={e => setDistance(Number(e.target.value))} className="w-full p-2 border rounded" />

      <label>{t[language].bags}</label>
      <input type="number" value={bags} onChange={e => setBags(Number(e.target.value))} className="w-full p-2 border rounded" />

      <label className="block">
        <input type="checkbox" checked={isHighLocation} onChange={e => setIsHighLocation(e.target.checked)} />
        {" " + t[language].high}
      </label>

      <label>{t[language].large}</label>
      <input type="number" value={largeItems} onChange={e => setLargeItems(Number(e.target.value))} className="w-full p-2 border rounded" />

      <label>{t[language].passengers}</label>
      <input type="number" value={passengers} onChange={e => setPassengers(Number(e.target.value))} className="w-full p-2 border rounded" />

      <label>{t[language].time}</label>
      <select value={isNight ? "night" : "day"} onChange={e => setIsNight(e.target.value === "night")} className="w-full p-2 border rounded">
        <option value="day">{t[language].day}</option>
        <option value="night">{t[language].night}</option>
      </select>

      <div className="text-lg font-semibold text-center mt-4">
        {t[language].result}: {calculateFare()} {t[language].currency}
      </div>
    </div>
  );
}
