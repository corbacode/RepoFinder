import { SearchProvider } from "./contexts/SearchContext";
import AppRoutes from "./routes";

export default function App() {
  return (
    <SearchProvider>
      <AppRoutes />
    </SearchProvider>
  );
}
