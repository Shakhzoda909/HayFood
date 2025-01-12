import Navbar from "@/components/navbar";
import { useAuth } from "@/contexts/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    login({ name, phone });
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-[10px] h-[calc(100vh-100px)] pb-[100px]">
        <h1 className="text-2xl font-bold">Kirish</h1>
        <input
          type="text"
          placeholder="Ism"
          className="w-full max-w-[300px] p-2 border border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefon raqam"
          className="w-full max-w-[300px] p-2 border border-gray-300 rounded-md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-[var(--lightgreen)] max-w-[300px] w-full text-white px-4 py-2 rounded-md">
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
