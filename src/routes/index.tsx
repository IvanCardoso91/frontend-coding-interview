import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../views/SignInView";
import Photos from "../views/PhotosView";
import { isAuthenticated } from "../auth/auth.ts";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/photos"
          element={
            isAuthenticated() ? <Photos /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
