import { Routes, Route, Navigate } from "react-router-dom";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate replace to="/cadastro" />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
