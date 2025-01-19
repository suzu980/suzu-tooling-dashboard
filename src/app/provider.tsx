import { StrictMode } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider = ({ children }: AppProviderProps) => {
  return <StrictMode>{children}</StrictMode>;
};
export default AppProvider;
