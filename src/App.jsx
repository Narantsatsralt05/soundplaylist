import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./common/providers/ThemeProvider";
import { MainContent, LeftBar, RightBar } from "./common/components";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <div className="grid-container">
          <LeftBar />
          <MainContent />
          <RightBar />
        </div>
      </ThemeProvider>
    </>
  );
}
