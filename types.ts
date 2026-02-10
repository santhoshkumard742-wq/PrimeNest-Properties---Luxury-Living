
export interface Amenity {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FloorPlan {
  id: string;
  type: string;
  sqft: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
