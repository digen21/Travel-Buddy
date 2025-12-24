import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-native": reactNative,
      "@typescript-eslint": tseslint,
    },

    rules: {
      // 🔥 THIS FIXES YOUR CRASH
      "no-undef": "off",

      // Optional but sane
      "react/react-in-jsx-scope": "off", // Expo doesn't need React import,
      "react-native/no-raw-text": [
        "error",
        {
          skip: ["Text", "P", "H1", "H2", "H3", "Caption", "LinkText"],
        },
      ],
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
