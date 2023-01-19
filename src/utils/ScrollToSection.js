// To scroll to an element or section, pass the reference of that element as a parameter
export const ScrollToSection = (ref) => {
  ref?.current?.scrollIntoView({ behavior: "smooth" });
};
