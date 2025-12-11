import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, DollarSign,  } from './Icons';
import { askWhyDonate } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Chào nhà đầu tư! Bạn đang phân vân không biết có nên ném tiền qua cửa sổ (vào túi tôi) không? Hỏi tôi ngay!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const botResponse = await askWhyDonate(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-brand-200 animate-fade-in-up">
          <div className="bg-brand-500 p-4 text-white flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2">
              <MessageCircle size={18} />
              Tư Vấn Viên Cấp Cao
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-brand-600 rounded p-1">✕</button>
          </div>
          
          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[85%] p-3 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-100 text-brand-900 self-end rounded-br-none' 
                  : 'bg-white text-gray-800 border border-gray-200 self-start rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-gray-200 rounded-lg p-2 text-xs text-gray-500 animate-pulse">
                Đang bịa lý do...
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tại sao tôi phải nuôi bạn?..."
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-brand-500"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-brand-500 text-white p-2 rounded-full hover:bg-brand-600 disabled:opacity-50 transition-colors"
            >
              <DollarSign size={18} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2 font-bold"
      >
        {isOpen ? 'Đóng Chat' : 'Hỏi lý do donate?'}
        {!isOpen && <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatBot;