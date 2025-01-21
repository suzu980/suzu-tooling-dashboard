import { queryDefaultOptions } from "@/config/app-data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient(queryDefaultOptions);
const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StrictMode>{children}</StrictMode>
    </QueryClientProvider>
  );
};
export default AppProvider;
