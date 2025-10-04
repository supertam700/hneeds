import { useState, useEffect } from 'react';
import { shopifyRequest } from '../lib/shopify';
import { GET_PRODUCTS, GET_PRODUCT_BY_HANDLE } from '../lib/graphql/products';
import { Product } from '../types/product';

interface ProductsResponse {
  products: {
    edges: Array<{
      node: Product;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
}

interface ProductResponse {
  product: Product;
}

export const useProducts = (first: number = 20) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const fetchProducts = async (after?: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await shopifyRequest<ProductsResponse>(GET_PRODUCTS, {
        first,
        after,
      });

      const fetchedProducts = response.products.edges.map(edge => ({
        ...edge.node,
        images: edge.node.images.edges.map(imgEdge => imgEdge.node),
        variants: edge.node.variants.edges.map(varEdge => varEdge.node),
      }));

      if (after) {
        setProducts(prev => [...prev, ...fetchedProducts]);
      } else {
        setProducts(fetchedProducts);
      }

      setHasNextPage(response.products.pageInfo.hasNextPage);
      setEndCursor(response.products.pageInfo.endCursor);
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (hasNextPage && endCursor && !loading) {
      fetchProducts(endCursor);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    hasNextPage,
    loadMore,
    refetch: () => fetchProducts(),
  };
};

export const useProduct = (handle: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await shopifyRequest<ProductResponse>(GET_PRODUCT_BY_HANDLE, {
          handle,
        });

        if (!response.product) {
          throw new Error('Product not found');
        }

        const productData = {
          ...response.product,
          images: response.product.images.edges.map(edge => edge.node),
          variants: response.product.variants.edges.map(edge => edge.node),
        };

        setProduct(productData);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    if (handle) {
      fetchProduct();
    }
  }, [handle]);

  return { product, loading, error };
};