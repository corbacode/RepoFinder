import { BrowserRouter, Routes, Route } from "react-router-dom";

//import * as Pages from "@/pages";
import * as Pages from "@/pages";
import InternalLinks from "@/enums/InternalLinks";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={InternalLinks.HOME} element={<Pages.Home />} />

        <Route
          path={`${InternalLinks.SEARCH}/:query`}
          element={<Pages.Search />}
        />

        <Route
          path={`${InternalLinks.USER}/:user`}
          element={<Pages.UserDetails />}
        />
        <Route
          path={`${InternalLinks.USER}/:user/:repo`}
          element={<Pages.UserRepo />}
        />

        <Route path={"*"} element={<Pages.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
