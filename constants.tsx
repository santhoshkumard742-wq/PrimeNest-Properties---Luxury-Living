
import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Maximize, 
  Cpu, 
  Waves, 
  Dumbbell, 
  ParkingCircle, 
  Baby, 
  Zap,
  School,
  Hospital,
  Train,
  Building2
} from 'lucide-react';
import { Highlight, Amenity, FloorPlan, Testimonial } from './types';

export const HIGHLIGHTS: Highlight[] = [
  {
    id: '1',
    title: 'Prime Location',
    description: 'Situated in the heart of the tech corridor with easy access to main highways.',
    icon: 'MapPin'
  },
  {
    id: '2',
    title: 'Smart Home Ready',
    description: 'Fully integrated IoT systems for lighting, security, and climate control.',
    icon: 'Cpu'
  },
  {
    id: '3',
    title: 'Spacious Interiors',
    description: 'Vast living spaces with double-height ceilings and panoramic windows.',
    icon: 'Maximize'
  },
  {
    id: '4',
    title: '24/7 Security',
    description: 'Advanced multi-tier security systems with biometric access control.',
    icon: 'ShieldCheck'
  }
];

export const AMENITIES: Amenity[] = [
  { id: '1', title: 'Swimming Pool', icon: 'Waves', description: 'Infinity pool with temperature control.' },
  { id: '2', title: 'Modern Gym', icon: 'Dumbbell', description: 'World-class fitness equipment and personal trainers.' },
  { id: '3', title: 'Dedicated Parking', icon: 'ParkingCircle', description: 'Ample multi-level parking for residents and guests.' },
  { id: '4', title: 'Kids Play Area', icon: 'Baby', description: 'Safe and engaging outdoor space for children.' },
  { id: '5', title: 'Fast EV Charging', icon: 'Zap', description: 'State-of-the-art electric vehicle charging stations.' },
  { id: '6', title: 'Concierge Service', icon: 'Building2', description: '24/7 front desk support for all your needs.' }
];

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: '1',
    type: 'Luxury 2BHK',
    sqft: '1,450 Sq.Ft.',
    price: 'Starting $1.2M',
    image: 'https://picsum.photos/seed/floor1/800/600'
  },
  {
    id: '2',
    type: 'Grand 3BHK',
    sqft: '2,100 Sq.Ft.',
    price: 'Starting $1.8M',
    image: 'https://picsum.photos/seed/floor2/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'The attention to detail in the architecture and the premium finishes exceeded my expectations. PrimeNest truly delivers on luxury.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Investor',
    content: 'A fantastic investment opportunity. The location advantage and smart home features make these properties highly desirable.',
    rating: 5
  },
  {
    id: '3',
    name: 'Eleanor Vance',
    role: 'Interior Designer',
    content: 'The layout designs are impeccable. The natural light flow throughout the apartment is something you rarely see in modern builds.',
    rating: 5
  }
];

export const LOCATION_DATA = [
  { name: 'St. Jude International School', distance: '1.2 km', icon: <School className="w-5 h-5" /> },
  { name: 'Central City Hospital', distance: '2.5 km', icon: <Hospital className="w-5 h-5" /> },
  { name: 'Grand Central Metro Station', distance: '0.8 km', icon: <Train className="w-5 h-5" /> },
  { name: 'Global IT Park', distance: '3.0 km', icon: <Building2 className="w-5 h-5" /> }
];

export const ICON_MAP: Record<string, any> = {
  MapPin: <MapPin className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Maximize: <Maximize className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Waves: <Waves className="w-8 h-8" />,
  Dumbbell: <Dumbbell className="w-8 h-8" />,
  ParkingCircle: <ParkingCircle className="w-8 h-8" />,
  Baby: <Baby className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />
};
