import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";

// lazy loading
const Dashboard = lazy(() => import("./components/Dashboard"));
const Home = lazy(() => import("./components/Home"));

function App() {
  const ROUTES = [
    {
      id: 0,
      path: "/dashboard",
      // Lazy Loading requires a suspense fallback
      element: (
        <Suspense fallback={"loading"}>   
          <Dashboard />
        </Suspense>
      ),
    },
    {
      id: 1,
      path: "/",
      element: (
        <Suspense fallback={"loading"}>
          <Home />
        </Suspense>
      ),
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
