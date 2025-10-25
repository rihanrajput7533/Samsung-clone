  function scrollSlider(direction) {
    const slider = document.getElementById('slider5');
    const scrollAmount = 300;
    slider.scrollLeft += direction * scrollAmount;
  }

    function scrollslider6(direction) {
      const container = document.getElementById('slider6-container6');
      const cardWidth = document.querySelector('.slide-wrapper6').offsetWidth + 30;
      container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
    function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  chatBox.style.flexDirection = 'column';
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (message === '') return;

  const chatBody = document.getElementById('chatBody');

  // User message
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  // Bot message
  const botMsg = document.createElement('div');
  botMsg.className = 'message bot';
  botMsg.textContent = getBotReply(message);
  chatBody.appendChild(botMsg);

  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(input) {
  input = input.toLowerCase();
  if (input.includes('hello')) return 'Hi! How can I help you today?';
  if (input.includes('price')) return 'Please specify the product name.';
  if (input.includes('bye')) return 'Goodbye! Have a great day!';
  return 'Sorry, I didn’t understand that. 🤖';
}
