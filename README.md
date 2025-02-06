# AI ChatBot

A modern, responsive web-based chatbot powered by Google's Gemini AI. This chatbot features a clean, intuitive interface with real-time message handling and emoji support.

![ChatBot Preview](/assets/Screenshot.png)

## Features

- 💬 Real-time chat interface
- 🤖 AI-powered responses using Gemini API
- 😊 Emoji picker integration
- 💫 Smooth animations and transitions
- 📱 Fully responsive design
- ⌨️ Support for Enter key to send messages
- 🔄 Loading indicators for API responses
- 📜 Chat history management

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google's Gemini API
- Emoji Mart for emoji picker
- Font Awesome for icons
- Google Fonts (Inter & Material Symbols)

## Getting Started

### Prerequisites

- A modern web browser
- Google Gemini API key (Get it from [Google AI Studio](https://makersuite.google.com/app/apikey))
- A local development server (e.g., Live Server VS Code extension)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chatbot.git
cd chatbot
```

2. Set up your API key:
   - Rename `config.env.tmp.js` to `config.env.js`
   - Open `config.env.js` and replace `your-api-key` with your actual Gemini API key:
```javascript
const config = {
    GEMINI_API_KEY: "your-api-key-here"
};

window.env = config;
```


### Project Structure

```
chatbot/
├── config.env.js         # Your API configuration (not committed)
├── config.env.tmp.js     # Template for API configuration
├── index.html           # Main HTML file
├── style.css           # Styles and animations
├── script.js           # Core functionality
└── README.md           # Documentation
```

## Usage

1. Click the chat icon in the bottom right corner to open the chat interface
2. Type your message in the input field
3. Send messages by:
   - Clicking the send button
   - Pressing Enter (on desktop)
4. Use the emoji picker to add emojis to your messages
5. Close the chat window using the down arrow or the chat icon

## Security Notes

- The `config.env.js` file contains your API key and should never be committed to version control
- The template file (`config.env.tmp.js`) is safe to commit as it doesn't contain any sensitive information
- For production deployment, consider using a backend server to handle API keys more securely

## Development

To modify the chatbot:
- Colors and theme can be customized in the `:root` variables in `style.css`
- Chat behavior can be modified in `script.js`
- UI structure can be adjusted in `index.html`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgments

- Google Gemini API for powering the chat responses
- Emoji Mart for the emoji picker implementation
- Font Awesome for the icon set
- Material Symbols for additional icons