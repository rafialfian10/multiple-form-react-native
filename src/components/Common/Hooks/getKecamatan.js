import { useQuery } from "@tanstack/react-query";
import { API } from "../../../Config/Api";

export const GetKecamatan = (id) => {
  const {
    data: kecamatan,
    isLoading: isLoadingKecamatan,
    refetch: refetchKecamatan,
  } = useQuery({
    queryKey: ["kecamatan"],
    queryFn: async () => {
      try {
        if (id) {
          const response = await API.get(`/districts/${id}.json`);
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        console.error("Error fetching kecamatan:", error);
        throw new Error("Failed to fetch kecamatan");
      }
    },
  });

  return { kecamatan, isLoadingKecamatan, refetchKecamatan };
};
