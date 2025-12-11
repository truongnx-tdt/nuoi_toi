import React, { useState } from 'react';
import { Copy, CheckCircle, QrCode } from './Icons';

const BankCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "0326054827";
  const bankName = "MB BANK";
  
  // Generating a QR link compatible with VietQR
  // Format: https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png
  // MB Bank ID is often 'MB' or '970422' but VietQR uses short names usually. Let's try 'MB'.
  const qrUrl = `https://img.vietqr.io/image/MB-${accountNumber}-compact2.png?amount=50000&addInfo=Nuoi%20Tao%20Di`;

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group perspective">
        <div className="w-full max-w-md mx-auto bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-white transform transition-transform hover:scale-[1.02] duration-300">
          
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-brand-200 text-sm font-medium tracking-wider mb-1">NGÂN HÀNG QUÂN ĐỘI</p>
              <h3 className="text-2xl font-bold">{bankName}</h3>
            </div>
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <QrCode size={32} />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-brand-200 text-xs uppercase tracking-widest mb-2">Số Tài Khoản (Đẹp, Dễ Nhớ)</p>
            <div className="flex items-center gap-3 bg-black/20 p-3 rounded-lg border border-white/10">
              <span className="text-2xl sm:text-3xl font-mono font-bold tracking-widest text-white drop-shadow-md">
                {accountNumber.match(/.{1,4}/g)?.join(' ')}
              </span>
              <button 
                onClick={handleCopy}
                className="ml-auto p-2 hover:bg-white/20 rounded-full transition-colors relative"
                title="Sao chép số tài khoản"
              >
                {copied ? <CheckCircle size={20} className="text-green-300" /> : <Copy size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-brand-200 text-xs">CHỦ TÀI KHOẢN</p>
              <p className="font-bold text-lg uppercase">NGUYEN TRUONG</p> 
            </div>
            <div className="text-right">
              <p className="text-brand-200 text-xs mb-1">EXP DATE</p>
              <p className="font-mono">FOREVER</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
        </div>

        {/* QR Code Section */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-brand-100 max-w-xs mx-auto text-center">
            <h4 className="font-bold text-gray-800 mb-2">Quét Mã Cho Nhanh</h4>
            <p className="text-sm text-gray-500 mb-4">Mở app ngân hàng lên và "ting ting" thôi!</p>
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border-2 border-brand-500">
                <img src={qrUrl} alt="VietQR" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-xs text-brand-600 font-medium bg-brand-50 py-2 rounded">Nội dung: "Nuôi tao đi"</p>
        </div>
    </div>
  );
};

export default BankCard;