import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true));
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, [dark]);
  const toggleDarkMode = (): void => {
    setDark((prevMode) => !prevMode);
  };
  return {
    dark,
    toggleDarkMode,
  };
};
export default useDarkMode;
