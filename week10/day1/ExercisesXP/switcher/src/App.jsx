import React from "react";
import { ThemeProvider} from "./components/ThemeContext";
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <div className= "App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        {/* I can add more components */}
      </div>
    </ThemeProvider>
  );
}

export default App;