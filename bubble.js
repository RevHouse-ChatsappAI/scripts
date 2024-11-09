(async () => {
  // Importa el módulo del Chatbox desde el CDN
  const Chatbox = await import('https://cdn.jsdelivr.net/npm/@chatsappai/embeds@1.0.231/dist/chatbox/index.min.js');
  console.log(Chatbox);
  
  // Inicializa el widget del Chatbox con el ID de tu agente
  const widget = await Chatbox.default.initBubble({
    agentId: 'cm2donrie000kof8kd77au0w4'
  });
})();
