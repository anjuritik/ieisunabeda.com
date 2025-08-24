document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.chatbot-toggler');
    const chatbot = document.querySelector('.chatbot');
    const closeBtn = chatbot.querySelector('.close-btn');
    const chatbox = chatbot.querySelector('.chatbox');
    const inputField = chatbot.querySelector('input');
    const sendBtn = chatbot.querySelector('button');
  
    // Toggle open/close
    toggler.addEventListener('click', () => {
      chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
    });
  
    closeBtn.addEventListener('click', () => chatbot.style.display = 'none');
  
    // Function to append messages
    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.classList.add('message', sender);
      msgDiv.textContent = text;
      chatbox.appendChild(msgDiv);
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  
    // Send message handler
    function sendMessage() {
      const text = inputField.value.trim();
      if (!text) return;
      appendMessage('user', text);
      inputField.value = '';
      respondToMessage(text);
    }
  
    sendBtn.addEventListener('click', sendMessage);
    inputField.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendMessage();
    });
  
    // Basic static responses
    function respondToMessage(text) {
      const lower = text.toLowerCase();
      let reply = "Sorry, I didn't understand that. Can you ask something else?";
  
      if (lower.includes('engineers day')) {
        reply = "Engineers' Day is celebrated on 15th September in honor of Sir M. Visvesvaraya.";
      } else if (lower.includes('iei')) {
        reply = "IEI stands for The Institution of Engineers (India), a nation-wide professional body.";
      } else if (/^(hi|hello)$/i.test(lower)) {
        reply = "Hello! How can I assist you today?";
      }
  
      setTimeout(() => appendMessage('bot', reply), 400);
    }
  });
  