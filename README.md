# AgroDoctor - Chatbot Agronomie (Hackathon)

Application frontend React + Tailwind CSS prête pour le déploiement rapide lors d'un hackathon.

## 🚀 Démarrage Rapide

1. Extraire l'archive ZIP
2. Ouvrir le terminal dans le dossier `agro-detect`
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer l'application en mode développement :
   ```bash
   npm run dev
   ```

## 🔌 Intégration de l'IA

Rendez-vous dans `src/components/ChatWindow.jsx` au niveau de la fonction `handleSend()` pour remplacer le `setTimeout` par votre appel API backend (Flask, FastAPI, FastAPI/TensorFlow, OpenAI Vision, etc.).
