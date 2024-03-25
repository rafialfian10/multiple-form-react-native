import { useQuery } from "@tanstack/react-query";
import { API } from "../../../Config/Api";

export const GetDesa = (id) => {
  const { data: desa, isLoading: isLoadingDesa, refetch: refetchDesa } = useQuery({
    queryKey: ['desa'],
    queryFn: async () => {
      try {
        if (id) {
          const response = await API.get(`/villages/${id}.json`);
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        console.error("Error fetching desa:", error);
        throw new Error("Failed to fetch desa");
      }
    }
  });

  return { desa, isLoadingDesa, refetchDesa };
};

