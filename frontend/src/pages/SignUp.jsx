import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "../composants/input";
import { User } from "lucide-react"; // Assurez-vous d'importer l'icône User
console.log(Input);

const SignUp = () => {
  const [name, setName] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(e); // Remplacez par votre logique de soumission du formulaire
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create account
        </h2>
        <form onSubmit={handleSignup}>
          <Input
            icon={User} // Assurez-vous que 'User' est défini correctement
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-green-500 text-white py-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
