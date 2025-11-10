export const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const cardHover = {
  whileHover: { y: -12, boxShadow: "0 25px 50px rgba(15, 23, 42, 0.15)" },
};

export const heroBackgroundVariants = {
  initial: { x: "-20%" },
  animate: {
    x: "20%",
    transition: {
      duration: 14,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

