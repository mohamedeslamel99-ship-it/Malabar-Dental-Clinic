export interface Booking {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  experience: string;
  languages: string[];
  education: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  benefits: string[];
  duration: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
