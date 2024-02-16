import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Content from "./pages/Content";

function App() {
  return (
    <div className="App">
      <main className="flex w-screen">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
}

export default App;
