export default defineAppConfig({
  ui: {
    colors: {
      // Assign actual color values to semantic color names
      // These can be any color from your @theme or Tailwind's default palette
      primary: "brand", // Maps 'primary' to your custom 'brand' color!
      secondary: "purple",
      success: "green",
      info: "blue",
      warning: "yellow",
      error: "red",
      neutral: "zinc",
    },
  },
});
