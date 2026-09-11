import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import { Camera, Send, Loader2 } from 'lucide-react';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Bonjour ! 👋 Je suis votre assistant agricole. Prenez ou importez une photo de votre plante pour déterminer immédiatement si elle présente des symptômes de maladie.",
      timestamp: "10:00"
    }
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const fileInputRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAnalyzing]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSend = () => {
    if (!imagePreview && !isAnalyzing) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      image: imagePreview,
      text: "Analyse cette feuille s'il te plaît.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setImagePreview(null);
    setSelectedImage(null);
    setIsAnalyzing(true);

    // TODO: CONNECT YOUR BACKEND / AI MODEL HERE
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "J'ai analysé votre échantillon. Voici le diagnostic trouvé :",
        diagnosis: {
          isHealthy: false,
          diseaseName: "Mosaïque du Cassave (Exemple)",
          confidence: 94,
          recommendation: "Isoler les plants touchés et appliquer un traitement bio à base d'huile de Neem."
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto w-full p-2 sm:p-4">
      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-2">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isAnalyzing && (
          <div className="flex items-center space-x-2 text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200 max-w-xs animate-pulse">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">Analyse de la plante par l'IA...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Image Preview Box */}
      {imagePreview && (
        <div className="p-2 bg-white rounded-t-xl border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={imagePreview} alt="Aperçu" className="w-14 h-14 object-cover rounded-lg border" />
            <span className="text-xs text-gray-600 font-medium">Image prête pour l'analyse</span>
          </div>
          <button 
            onClick={() => setImagePreview(null)}
            className="text-red-500 text-xs font-semibold hover:underline px-2"
          >
            Annuler
          </button>
        </div>
      )}

      {/* Action / Send Area */}
      <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
        <input 
          type="file" 
          accept="image/*" 
          ref={fileInputRef} 
          onChange={handleImageSelect} 
          className="hidden" 
        />

        <div className="flex items-center gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-medium px-4 py-3 rounded-xl transition-all duration-200 active:scale-95"
            title="Envoyer une photo"
          >
            <Camera className="w-5 h-5 text-emerald-700" />
            <span className="hidden sm:inline text-sm">Prendre / Choisir photo</span>
          </button>

          <input 
            type="text" 
            placeholder="Posez une question ou ajoutez une précision..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          />

          <button
            onClick={handleSend}
            disabled={!imagePreview && !isAnalyzing}
            className={`p-3 rounded-xl transition-all duration-200 flex items-center justify-center ${
              imagePreview 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-95' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}