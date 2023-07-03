export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Option {
  measureValue: string;
  price: number;
  measureQantity: number
}

export interface Product {
  id?: string;
  title: string;
  description: string;
  image?: any;
  price: number;
  discount? : string;
  category: string;
  date: Date;
  quantity?: number;
  options?: any;
}

export interface CartProduct {
  id?: string;
  title: string;
  description: string;
  image?: any;
  price: number;
  category: string;
  date: Date;
  quantity: number;
}

export interface FbCreateResponse {
  name: string;
}
