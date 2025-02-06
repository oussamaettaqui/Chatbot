# AI ChatBot

A modern, responsive web-based chatbot powered by Google's Gemini AI. This chatbot features a clean, intuitive interface with real-time message handling and emoji support.

![ChatBot Preview](/path/to/your/screenshot.png)

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
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chatbot.git
cd chatbot
```

2. Set up your API key:
   - Get an API key from Google's Gemini platform
   - Replace the `API_KEY` constant in `script.js` with your key:
```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

3. Open `index.html` in your web browser or serve it using a local development server.

### Project Structure

```
chatbot/
├── index.html          # Main HTML file
├── style.css          # Styles and animations
├── script.js          # Core functionality
└── README.md          # Documentation
```

## Usage

1. Click the chat icon in the bottom right corner to open the chat interface
2. Type your message in the input field
3. Send messages by:
   - Clicking the send button
   - Pressing Enter (on desktop)
4. Use the emoji picker to add emojis to your messages
5. Close the chat window using the down arrow or the chat icon

## Customization

### Styling

The chatbot uses CSS variables for easy customization. Main colors and styles can be modified in `style.css`:

- Primary Color: `#5350C4` (Purple)
- Background: Linear gradient from `#EEEEFF` to `#C8C7FF`
- Font Family: "Inter"

### Chat Window Size

Default dimensions:
- Width: 420px
- Height: 460px (chat body)

These can be modified in the CSS file under `.chatbot-popup` and `.chat-body` classes.

## Security Considerations

⚠️ Important: The current implementation includes the API key directly in the JavaScript code. For production use, you should:

1. Move the API key to a server-side environment
2. Implement proper API key management
3. Add rate limiting
4. Consider implementing user authentication

## Browser Support

Tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Improvements

- [ ] Server-side API key management
- [ ] Message persistence
- [ ] User authentication
- [ ] File attachment support
- [ ] Voice input support
- [ ] Customizable themes
- [ ] Extended chat history
- [ ] Message search functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini API for powering the chat responses
- Emoji Mart for the emoji picker implementation
- Font Awesome for the icon set
- Material Symbols for additional icons