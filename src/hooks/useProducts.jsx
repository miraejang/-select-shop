import { getProducts, addProduct } from '../api/firebase';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(['products'], () => getProducts(), {
    stateTime: 1000 * 60 * 5,
  });

  const addNewProduct = useMutation((product) => addProduct(product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  return { productsQuery, addNewProduct };
}
