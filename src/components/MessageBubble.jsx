import React from 'react';
import { Bot, User, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function MessageBubble({ message }) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-end space-x-2 my-3 ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      {/* Bot Avatar */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow">
          <Bot className="w-5 h-5" />
        </div>
      )}

      {/* Bubble Container */}
      <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm ${
        isUser 
          ? 'bg-emerald-600 text-white rounded-br-none' 
          : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
      }`}>
        {/* Uploaded Image */}
        {message.image && (
          <div className="mb-2 overflow-hidden rounded-lg border border-emerald-500/30">
            <img 
              src={message.image} 
              alt="Plante à analyser" 
              className="max-h-60 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Message Text */}
        {message.text && (
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {message.text}
          </p>
        )}

        {/* AI Diagnostic Results Placeholder */}
        {message.diagnosis && (
          <div className={`mt-3 p-3 rounded-xl border ${
            message.diagnosis.isHealthy 
              ? 'bg-green-50 border-green-200 text-green-900' 
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            <div className="flex items-center space-x-2 font-bold mb-1">
              {message.diagnosis.isHealthy ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Plante Saine ({message.diagnosis.confidence}%)</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>{message.diagnosis.diseaseName} ({message.diagnosis.confidence}%)</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm mt-1">{message.diagnosis.recommendation}</p>
          </div>
        )}

        {/* Timestamp */}
        <span className={`text-[10px] block text-right mt-1.5 ${isUser ? 'text-emerald-100' : 'text-gray-400'}`}>
          {message.timestamp}
        </span>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-white shrink-0 shadow">
          <User className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}