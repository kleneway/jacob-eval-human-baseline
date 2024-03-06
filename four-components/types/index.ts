export interface QuoteProps {
  name: string;
  imageUrl: string;
  quote: string;
  rating: number;
  website: string;
}

export interface BloodData {
  id: number;
  uid: string;
  type: string;
  rh_factor: string;
  group: string;
};

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
};

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export interface ToastProps {
  heading: string;
  text?: string;
  bullets?: string[];
  buttons?: ButtonProps[];
}