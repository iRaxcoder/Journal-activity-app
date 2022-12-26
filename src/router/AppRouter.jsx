import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/components";
import Swal from "sweetalert2";
import { useEffect } from "react";

export const AppRouter = () => {
  const { statusMessage } = useSelector((state) => state.journal);
  const status = useCheckAuth();

  useEffect(() => {
    if (statusMessage) {
      Swal.fire(
        statusMessage.header,
        statusMessage.message,
        statusMessage.type
      );
    }
  }, [statusMessage]);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
