import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Customer } from '../types/customer';
import { authenticateCustomer, fetchCustomerData, getStoredToken, clearAuthToken } from '../lib/customerAuth';

interface CustomerState {
  customer: Customer | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

type CustomerAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'LOGIN_SUCCESS'; payload: Customer }
  | { type: 'LOGOUT' }
  | { type: 'SET_CUSTOMER'; payload: Customer };

const initialState: CustomerState = {
  customer: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const customerReducer = (state: CustomerState, action: CustomerAction): CustomerState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        customer: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'SET_CUSTOMER':
      return {
        ...state,
        customer: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      clearAuthToken();
      return {
        ...state,
        customer: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

interface CustomerContextValue extends CustomerState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshCustomer: () => Promise<void>;
}

const CustomerContext = createContext<CustomerContextValue | undefined>(undefined);

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, initialState);

  // Check for existing token on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const token = getStoredToken();
      if (token) {
        try {
          dispatch({ type: 'SET_LOADING', payload: true });
          const customerData = await fetchCustomerData(token);
          dispatch({ type: 'SET_CUSTOMER', payload: customerData });
        } catch (error) {
          console.error('Failed to initialize auth:', error);
          clearAuthToken();
        } finally {
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      const token = await authenticateCustomer(email, password);
      const customerData = await fetchCustomerData(token);

      dispatch({ type: 'LOGIN_SUCCESS', payload: customerData });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const refreshCustomer = async (): Promise<void> => {
    const token = getStoredToken();
    if (token) {
      try {
        const customerData = await fetchCustomerData(token);
        dispatch({ type: 'SET_CUSTOMER', payload: customerData });
      } catch (error) {
        console.error('Failed to refresh customer:', error);
        logout();
      }
    }
  };

  const value: CustomerContextValue = {
    ...state,
    login,
    logout,
    refreshCustomer,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = (): CustomerContextValue => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
};