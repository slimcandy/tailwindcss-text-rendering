module.exports = function hyphens({ addUtilities, config, e }) {
  const values = config("theme.rendering", {
    auto: "auto",
    speed: "optimizeSpeed",
    legibility: "optimizeLegibility",
    precision: "geometricPrecision",
  });

  const variants = config("variants.rendering", []);
  const utilities = {};

  for (const key in values) {
    utilities[`.rendering-${e(key)}`] = {
      "text-rendering": values[key],
    };
  }

  addUtilities(utilities, {
    variants,
  });
};
