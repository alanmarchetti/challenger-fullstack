import { UserProvider } from "./context/user.context";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// routes
import RoutesWrapper from "./routes/index.routes";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <RoutesWrapper />
      </BrowserRouter>
    </UserProvider>
  );
}
