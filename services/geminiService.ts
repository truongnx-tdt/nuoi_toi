// Replaced real AI service with a mock to save costs and run without API Key
// as per user request: "không cần call đến gemini làm gì"

const FUNNY_RESPONSES = [
  "Alo, bạn gì ơi, tiếng 'ting ting' quan trọng hơn lời nói.",
  "Đừng hỏi vì sao, hãy hỏi bao nhiêu. 50k là đủ ấm lòng chiến sĩ.",
  "Bụng đang réo 'ầm ầm' đây, văn vở làm gì, donate đi!",
  "Tình cảm là chín, chuyển khoản là mười. Uy tín luôn!",
  "Sao kê minh bạch: 100% tiền vào dạ dày. Không tin cứ thử donate xem.",
  "Bạn hỏi khó quá, tôi xin trả lời bằng STK: 0326054827 MB Bank.",
  "Đang bận nhai mì tôm sống, không rảnh chat đâu. Donate đi rồi tính.",
  "Dự báo thời tiết: Hôm nay trời đẹp để chuyển khoản cho tôi.",
  "Người lạ ơi, xin cho tôi 1 ly trà sữa full topping.",
  "Chân lý cuộc đời: Có thực mới vực được đạo. Có tiền mới nuôi được tôi.",
  "Đừng để cái nghèo ngăn cách tình bạn đôi ta.",
  "Hỏi nhiều đói bụng quá. Chuyển khoản chưa?",
  "Hệ thống đang đói, vui lòng nạp năng lượng bằng VND.",
  "Nói ít hiểu nhiều, tài khoản 0326054827 vẫn đang chờ tin nhắn từ ngân hàng.",
  "Thôi đừng văn vở nữa, chụp màn hình bill chuyển khoản đi rồi nói chuyện tiếp."
];

export const askWhyDonate = async (userQuestion: string): Promise<string> => {
  // Simulate AI "thinking" delay to make the chat feel natural
  await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 800));

  // Return a random funny response
  const randomIndex = Math.floor(Math.random() * FUNNY_RESPONSES.length);
  return FUNNY_RESPONSES[randomIndex];
};