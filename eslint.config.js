import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

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
      prettier, // Plugin Prettier
    },
    rules: {
      // Règles recommandées par ESLint
      ...js.configs.recommended.rules,

      // Règles recommandées pour React
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // Règles pour React Hooks
      ...reactHooks.configs.recommended.rules,

      // Désactiver les règles qui pourraient entrer en conflit avec Prettier
      ...prettierConfig.rules,

      // Intègre Prettier comme une règle
      'prettier/prettier': 'error', // Considère les erreurs Prettier comme des erreurs ESLint

      // Désactive l'import obligatoire de React pour JSX
      'react/react-in-jsx-scope': 'off',

      // Ignorer les variables inutilisées nommées "React"
      'no-unused-vars': [
        'warn', // Signale un avertissement au lieu d'une erreur
        { varsIgnorePattern: '^React$' }, // Ignore les imports inutilisés pour React
      ],
    },
  },
];
