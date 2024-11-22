import FloatingShape from "./components/FloatingShape.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900
     via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"
    >
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      ></FloatingShape>
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="70%"
        left="80%"
        delay={5}
      ></FloatingShape>
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="40%"
        left="-10%"
        delay={2}
      ></FloatingShape>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
