export interface Address {
  id: string;
  address1: string;
  address2?: string;
  city: string;
  company?: string;
  country: string;
  firstName: string;
  lastName: string;
  phone?: string;
  province: string;
  zip: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  acceptsMarketing: boolean;
  createdAt: string;
  defaultAddress?: Address;
  addresses: Address[];
}

export interface CustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}