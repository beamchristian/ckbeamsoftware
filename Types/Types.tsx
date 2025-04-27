// src/types/data.ts
export interface SliderItem {
  title: string;
  repo: string;
  des: string;
  des1: string;
  images: string[];
}

// types for the data
export interface PortfolioDataType {
  title: string;
  name: string;
  repo: string;
  des: string;
  des1: string;
  skills: string[];
  images: string[];
}

export interface AboutDataType {
  count: number;
  title: string;
  img: string;
  array: string[];
}

// Define an interface for the form state for better type safety
export interface ContactFormDataType {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}
