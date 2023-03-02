import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { addCart, getCart, removeFromCart } from '../api/firebase';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(['cart', uid || ''], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation((product) => addCart(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', uid]);
    },
  });

  const removeItem = useMutation(
    (productId) => removeFromCart(uid, productId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', uid]);
      },
    }
  );

  return { cartQuery, addOrUpdateItem, removeItem };
}
