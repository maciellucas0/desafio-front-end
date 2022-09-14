import { Routes, Route, Navigate } from "react-router-dom";
import PaginaCadastro from "../pages/paginaCadastro";
import { TelaLogin } from "../pages/telaLogin";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate replace to="/cadastro" />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/home" element={""} />
      </Routes>
    </>
  );
};

export default RoutesMain;
