import { GraphQLClient } from 'graphql-request';

const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const accessToken = import.meta.env.VITE_STOREFRONT_ACCESS_TOKEN;
const apiVersion = import.meta.env.VITE_SHOPIFY_API_VERSION || '2024-10';

// Only throw error if we're in production and missing required vars
if (!domain || !accessToken) {
  if (import.meta.env.PROD) {
    throw new Error('Missing required Shopify environment variables');
  } else {
    console.warn('Shopify environment variables not configured. Some features may not work properly.');
  }
}

const endpoint = domain && accessToken ? `https://${domain}/api/${apiVersion}/graphql.json` : 'https://dummy-endpoint.com';

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': accessToken || '',
    'Content-Type': 'application/json',
  },
});

export const shopifyRequest = async <T>(
  query: string,
  variables?: any
): Promise<T> => {
  // If Shopify is not configured, return empty data
  if (!domain || !accessToken) {
    console.warn('Shopify not configured, returning empty data');
    return { products: { edges: [], pageInfo: { hasNextPage: false, endCursor: null } } } as T;
  }

  try {
    const data = await shopifyClient.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error('Shopify API Error:', error);
    throw new Error('Failed to fetch data from Shopify');
  }
};
