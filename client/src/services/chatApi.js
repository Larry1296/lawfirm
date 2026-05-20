// src/services/chatApi.js

let messages = [
  {
    id: 1,
    sender: "system",
    text: "Welcome to SheriaDesk Chat 👋",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    sender: "lawyer",
    text: "Please upload the case file.",
    createdAt: new Date().toISOString(),
  },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const chatApi = {
  async getMessages() {
    await delay(400);
    return [...messages];
  },

  async sendMessage(text, sender = "user") {
    await delay(300);

    const newMsg = {
      id: Date.now(),
      sender,
      text,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMsg);

    return newMsg;
  },

  async clearChat() {
    await delay(200);
    messages = [];
    return true;
  },
};
