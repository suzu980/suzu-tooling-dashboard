import { queryDefaultOptions } from "@/config/app-data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface AppProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient(queryDefaultOptions);
const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StrictMode>
        <Toaster />
        {children}
      </StrictMode>
    </QueryClientProvider>
  );
};
export default AppProvider;
