import { motion } from 'framer-motion';

const FadeInComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Conteúdo do componente
    </motion.div>
  );
};

export default FadeInComponent;
