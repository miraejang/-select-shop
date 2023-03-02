import { addLikeList, getLikeList, removeFromLikeList } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export default function useLikeList() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const likeItemsQuery = useQuery(['likeList', uid], () => getLikeList(uid));

  const addLikeItem = useMutation((product) => addLikeList(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['likeList', uid]);
    },
  });

  const removeLikeItem = useMutation(
    (productId) => removeFromLikeList(uid, productId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['likeList', uid]);
      },
    }
  );

  return { likeItemsQuery, addLikeItem, removeLikeItem };
}
