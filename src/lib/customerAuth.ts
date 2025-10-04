import { shopifyRequest } from './shopify';
import { CUSTOMER_LOGIN, GET_CUSTOMER, CUSTOMER_RECOVER } from './graphql/customers';
import { Customer, CustomerAccessToken } from '../types/customer';

const TOKEN_KEY = 'shopify_customer_token';
const TOKEN_EXPIRY_KEY = 'shopify_token_expiry';

export const authenticateCustomer = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await shopifyRequest<{
      customerAccessTokenCreate: {
        customerAccessToken: CustomerAccessToken | null;
        customerUserErrors: Array<{ field: string[]; message: string }>;
      };
    }>(CUSTOMER_LOGIN, {
      input: {
        email,
        password,
      },
    });

    const { customerAccessToken, customerUserErrors } = response.customerAccessTokenCreate;

    if (customerUserErrors.length > 0) {
      throw new Error(customerUserErrors[0].message);
    }

    if (!customerAccessToken) {
      throw new Error('Authentication failed');
    }

    // Store token and expiry
    localStorage.setItem(TOKEN_KEY, customerAccessToken.accessToken);
    localStorage.setItem(TOKEN_EXPIRY_KEY, customerAccessToken.expiresAt);

    return customerAccessToken.accessToken;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
};

export const fetchCustomerData = async (accessToken: string): Promise<Customer> => {
  try {
    const response = await shopifyRequest<{
      customer: Customer;
    }>(GET_CUSTOMER, {
      customerAccessToken: accessToken,
    });

    return response.customer;
  } catch (error) {
    console.error('Failed to fetch customer data:', error);
    throw new Error('Failed to fetch customer data');
  }
};

export const recoverCustomerPassword = async (email: string): Promise<boolean> => {
  try {
    const response = await shopifyRequest<{
      customerRecover: {
        customerUserErrors: Array<{ field: string[]; message: string }>;
      };
    }>(CUSTOMER_RECOVER, { email });

    const { customerUserErrors } = response.customerRecover;

    if (customerUserErrors.length > 0) {
      throw new Error(customerUserErrors[0].message);
    }

    return true;
  } catch (error) {
    console.error('Password recovery error:', error);
    throw error;
  }
};

export const validateToken = (): boolean => {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

  if (!token || !expiry) {
    return false;
  }

  const expiryDate = new Date(expiry);
  const now = new Date();

  if (now >= expiryDate) {
    // Token expired, remove from storage
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
    return false;
  }

  return true;
};

export const getStoredToken = (): string | null => {
  if (!validateToken()) {
    return null;
  }
  return localStorage.getItem(TOKEN_KEY);
};

export const clearAuthToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
};