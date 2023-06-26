export interface User {
    email: string
    password: string
    returnSecureToken?: boolean
  }

  export interface FbAuthResponse {
    idToken: string
    expiresIn: string
  }
  
  export interface Product {
    id?: string
    title: string
    description: string
    image?: any
    price: number
    category: string
    date: Date
    quantity?: number
    measure?: any
    option?: any
  }


  export interface CartProduct {
    id?: string
    title: string
    description: string
    image?: any
    price: number
    category: string
    date: Date
    quantity: number

  }

  export interface FbCreateResponse {
    name: string
  }