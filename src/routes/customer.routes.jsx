import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Dish } from "./../pages/Dish/index";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish" element={<Dish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}
