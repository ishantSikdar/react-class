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
      element: <PageSuspense page={<Dashboard />} />
    },
    {
      id: 1,
      path: "/",
      element: <PageSuspense page={<Home />} />
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

// Lazy Loading requires a suspense fallback
function PageSuspense({ page }) {
  return <Suspense fallback={"loading"}>
    {page}
  </Suspense>
}

export default App;
