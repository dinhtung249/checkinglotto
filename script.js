let lottoData = [];

fetch('lotto_data.json')
  .then(response => response.json())
  .then(data => {
    console.log("Dữ liệu đã load:", data); // <-- Thêm dòng này để kiểm tra
    // xử lý tiếp
  })
  .catch(error => console.error("Lỗi khi load JSON:", error));

function checkNumbers() {
  const input = document.getElementById("numbersInput").value;
  const numbers = input.split(',').map(num => parseInt(num.trim())).sort((a,b)=>a-b);

  if (numbers.length !== 5 || new Set(numbers).size !== 5 || numbers.some(n => n < 1 || n > 35)) {
    document.getElementById("result").textContent = "⚠️ Nhập đúng 5 số không trùng nhau từ 1–35.";
    return;
  }

  const found = lottoData.some(combo => JSON.stringify(combo.sort((a,b)=>a-b)) === JSON.stringify(numbers));
  document.getElementById("result").textContent = found 
    ? "🎉 Bộ số bạn CHỌN có trong danh sách!" 
    : "😔 Bộ số bạn chọn KHÔNG có trong danh sách.";
}
