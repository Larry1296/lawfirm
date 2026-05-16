import { useContext } from "react";

import ThemeContext from "../store/ThemeContext";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
