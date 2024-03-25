import { useQuery } from "@tanstack/react-query";
import { API } from "../../../Config/Api";

export const GetProvinsi = () => {
  const {
    data: provinsi,
    isLoading: isLoadingProvinsi,
    refetch: refetchProvinsi,
  } = useQuery({
    queryKey: ["provinsi"],
    queryFn: async () => {
      try {
        const response = await API.get("/provinces.json");
        return response.data;
      } catch (error) {
        console.error("Error fetching provinsi:", error);
        throw new Error("Failed to fetch provinsi");
      }
    },
  });

  return { provinsi, isLoadingProvinsi, refetchProvinsi };
};
