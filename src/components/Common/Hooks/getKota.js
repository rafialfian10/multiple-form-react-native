import { useQuery } from "@tanstack/react-query";
import { API } from "../../../Config/Api";

export const GetKota = (id) => {
  const {
    data: kota,
    isLoading: isLoadingKota,
    refetch: refetchKota,
  } = useQuery({
    queryKey: ["kota"],
    queryFn: async () => {
      try {
        if (id) {
          const response = await API.get(`/regencies/${id}.json`);
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        console.error("Error fetching kota:", error);
        throw new Error("Failed to fetch kota");
      }
    },
  });

  return { kota, isLoadingKota, refetchKota };
};
