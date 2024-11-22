import { motion } from "framer-motion"; // Importation de la bibliothèque framer-motion pour les animations

// Définition du composant FloatingShape qui accepte des props pour personnaliser l'apparence et le comportement
// eslint-disable-next-line react/prop-types
const FloatingShape = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      // Définition des classes CSS pour le style de l'élément
      className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl ${top} ${left}`}
      // Définition des animations à appliquer à l'élément
      animate={{
        y: ["0%", "100%", "0%"], // Animation de translation verticale
        x: ["0%", "100%", "0%"], // Animation de translation horizontale
        rotate: ["0", "360"], // Animation de rotation
      }}
      // Configuration de la transition pour les animations
      transition={{
        duration: 20, // Durée de l'animation en secondes
        ease: "linear", // Type d'interpolation de l'animation
        repeat: Infinity, // Répète l'animation indéfiniment
        delay: delay, // Délai avant le début de l'animation
      }}
      // Attribut pour indiquer que cet élément n'est pas accessible aux lecteurs d'écran
      aria-hidden="true"
    />
  );
};

// Exportation du composant pour l'utiliser dans d'autres parties de l'application
export default FloatingShape;
