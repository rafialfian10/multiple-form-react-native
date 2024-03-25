import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContainerNavigation from "./src/Screens/ContainerNavigation";

export default function App() {
  const Client = new QueryClient();

  return (
    <QueryClientProvider client={Client}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <ContainerNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
