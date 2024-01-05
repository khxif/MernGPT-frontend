import { motion } from "framer-motion";

export default function RevealAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 25 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
