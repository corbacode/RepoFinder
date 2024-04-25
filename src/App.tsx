import "@/assets/scss/style.scss";
import AppRoutes from "./routes";
import { SearchProvider } from "./contexts/SearchContext";

export default function App() {
  return (
    <SearchProvider>
      <AppRoutes />
    </SearchProvider>
  );
}
