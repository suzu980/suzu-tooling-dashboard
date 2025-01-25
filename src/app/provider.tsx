import { queryDefaultOptions } from "@/config/app-data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";

interface AppProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient(queryDefaultOptions);
const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <Toaster />
        {children}
      </StrictMode>
    </QueryClientProvider>
  );
};
export default AppProvider;
