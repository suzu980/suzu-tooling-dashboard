import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StrictMode>{children}</StrictMode>
    </QueryClientProvider>
  );
};
export default AppProvider;
