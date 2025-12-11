import React, { useEffect, useState } from 'react';
import { Utensils, Heart, ShieldCheck, TrendingUp, DollarSign } from './components/Icons';
import TransparencyChart from './components/TransparencyChart';
import BankCard from './components/BankCard';
import ChatBot from './components/ChatBot';
import Reveal from './components/Reveal';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                <Utensils size={18} />
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-900">Quỹ Nuôi Tao</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#about" className="hover:text-brand-600 transition-colors">Về Dự Án</a>
              <a href="#transparency" className="hover:text-brand-600 transition-colors">Sao Kê</a>
              <a href="#donate" className="hover:text-brand-600 transition-colors">Donate</a>
            </div>
            <a href="#donate" className="bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 hover:scale-105 transform duration-200">
              Nuôi Ngay
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal variant="fade-down" delay={100}>
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-brand-200">
                <Heart size={16} className="fill-brand-600 text-brand-600 animate-pulse" />
                Dự án khởi nghiệp từ cái bụng rỗng
              </div>
            </Reveal>
            
            <Reveal variant="fade-up" delay={300}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
                Đầu tư cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-yellow-500">Chiếc Bụng Đói</span>
              </h1>
            </Reveal>
            
            <Reveal variant="fade-up" delay={500}>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                "Vì một thế giới không còn tiếng bụng kêu. Hãy chung tay (chuyển khoản) để duy trì nụ cười và sự sống cho tôi."
              </p>
            </Reveal>

            <Reveal variant="zoom-in" delay={700}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#donate" className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <DollarSign className="group-hover:rotate-12 transition-transform" />
                  Donate Cứu Đói
                </a>
                <a href="#transparency" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-brand-300 transition-all duration-300 flex items-center justify-center gap-2">
                  <ShieldCheck />
                  Xem Sao Kê Uy Tín
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features / About */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Reveal variant="fade-up" delay={0}>
                <div className="h-full p-8 rounded-3xl bg-brand-50 border border-brand-100 hover:shadow-lg transition-shadow hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                    <Utensils size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Nhu Cầu Cơ Bản</h3>
                  <p className="text-slate-600">
                    Tôi ăn ngày 3 bữa. Sáng phở, trưa cơm, tối lẩu. Một chế độ dinh dưỡng khoa học cần sự đầu tư tài chính vững mạnh từ các bạn.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={200}>
                <div className="h-full p-8 rounded-3xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-shadow hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Sao Kê Minh Bạch</h3>
                  <p className="text-slate-600">
                    Mọi khoản donate đều được sử dụng đúng mục đích: Ăn. Cam kết không dùng tiền donate để mua biệt thự hay siêu xe (vì chưa đủ).
                  </p>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={400}>
                <div className="h-full p-8 rounded-3xl bg-green-50 border border-green-100 hover:shadow-lg transition-shadow hover:-translate-y-2 duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Lợi Nhuận Vô Hình</h3>
                  <p className="text-slate-600">
                    Đầu tư vào tôi, bạn nhận lại niềm vui, sự thanh thản trong tâm hồn và những lời chúc may mắn mỗi khi tôi no bụng.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section id="transparency" className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal variant="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Báo Cáo Tài Chính</h2>
                <p className="text-lg text-slate-600">Minh bạch dòng tiền, uy tín đặt lên hàng đầu (bụng).</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal variant="fade-right" delay={200}>
                <TransparencyChart />
              </Reveal>
              <Reveal variant="fade-left" delay={400}>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-500 font-medium">Tổng thu (Tháng này)</span>
                      <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded">+ 0 VNĐ</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 text-right">Mục tiêu: 5.000.000 VNĐ</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-4">Nhà Tài Trợ Vàng 🏆</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">?</div>
                        <span className="flex-1 italic">Chưa có ai (Là bạn đó!)</span>
                        <span className="font-bold text-slate-900">---</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600 opacity-50">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-400">?</div>
                        <span className="flex-1 italic">Vị trí đang chờ...</span>
                        <span className="font-bold text-slate-900">---</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="py-24 bg-brand-900 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute w-96 h-96 bg-brand-500 rounded-full blur-3xl -top-20 -left-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDuration: '7s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal variant="fade-down">
                  <div className="text-center mb-12 text-white">
                      <h2 className="text-4xl font-bold mb-4">Cổng Thanh Toán Vũ Trụ</h2>
                      <p className="text-brand-100 text-lg">Mọi đóng góp dù là 1.000đ cũng được ghi nhận bằng cả tấm lòng.</p>
                  </div>
                </Reveal>
                
                <Reveal variant="zoom-in" delay={200}>
                  <BankCard />
                </Reveal>
                
                <Reveal variant="fade-up" delay={400}>
                  <div className="mt-12 text-center">
                      <p className="text-brand-200 italic text-sm">
                          * Lưu ý: Nội dung chuyển khoản vui lòng ghi lời nhắn yêu thương hoặc để trống (tôi tự hiểu là bạn yêu tôi).
                      </p>
                  </div>
                </Reveal>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <Reveal variant="fade-up" threshold={0.5}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Utensils size={20} className="text-brand-500" />
              <span className="font-bold text-white text-lg">Quỹ Nuôi Tao</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Nuôi Tao Foundation. All rights reserved (for eating).</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Tiktok</a>
            </div>
          </div>
        </Reveal>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;