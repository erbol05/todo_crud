import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

function App() {
  const app = [
    {
      id: 1,
      link: "/",
      element: <Welcome />,
    },
 {
      id: 2,
      link: "/home",
      element: <Home />,
    },

  ];
  return (
    <>
      <Routes>
        {app.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
}

export default App;
