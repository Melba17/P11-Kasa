import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'node_modules'] }, // Ignorer les dossiers spécifiques
  {
    files: ['**/*.{js,jsx}'], // Cible les fichiers JavaScript et JSX
    languageOptions: {
      ecmaVersion: 'latest', // Utilise la version la plus récente de JS
      globals: globals.browser, // Intègre les globales du navigateur
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Active JSX pour React
        sourceType: 'module', // Modules ECMAScript
      },
    },
    settings: {
      react: { version: 'detect' }, // Détecte automatiquement la version de React
    },
    plugins: {
      react, // Plugin React
      'react-hooks': reactHooks, // Plugin React Hooks
      'react-refresh': reactRefresh, // Plugin React Refresh pour Vite
    },
    rules: {
      // Règles recommandées par ESLint
      ...js.configs.recommended.rules,

      // Règles recommandées pour React
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // Règles pour React Hooks
      ...reactHooks.configs.recommended.rules,

      // Règles personnalisées
      'quotes': ['off'], // Autorise '' et ""
      'semi': ['error', 'always'], // Forcer les points-virgules
      'linebreak-style': ['off'], // Désactive les erreurs sur CRLF et LF
      'no-irregular-whitespace': 'off',
      'indent': ['error', 2], // Indentation de 2 espaces
      'react/react-in-jsx-scope': 'off', // Désactive l'import React obligatoire
      'no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^React$' },
      ], // Ignorer les variables inutilisées "React"
    },
  },
];
