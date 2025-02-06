const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");
const startChat = document.querySelector(".start-chat");
const chatBotPopUp = document.querySelector(".chatbot-popup");
const closeChatBot = document.querySelector("#close-chatbot");



const userData = {
    message : null,
    file : {
        data : null,
        mime_type : null,
    }
}

const chatHistory = [];
const initialHieght = messageInput.scrollHeight;
const API_KEY = "AIzaSyCVy2BPd7IIQNbLjwe3U13O1X7YpPPFb-Q";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;


const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}


const generateBotRespose = async(inComingMessage) => {
    const messageElement = inComingMessage.querySelector(".message-text");
    chatHistory.push({
        role: "user",
        parts: [{ text: userData.message }]
    });
    const requestOptions = {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify({
            contents: chatHistory
        })
    }
    try{
        const response =  await fetch(API_URL, requestOptions);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);

        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()|| 'Sorry, I could not process that.';
        messageElement.innerText = apiResponseText;
        chatHistory.push({
            role: "model",
            parts: [{ text: apiResponseText }]
        });

    }catch(error){
        messageElement.innerText = error.message;
        messageElement.style.color = "#ff0000";
    }finally{
        inComingMessage.classList.remove("thinking");
        chatBody.scrollTo({ top:chatBody.scrollHeight, behavior: "smooth" });
    }

}

const handleOutGoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    messageInput.value = "";

    messageInput.dispatchEvent(new Event("input"));

    const messageContent = `<div class="message-text"></div>`;
    const outGoingMessage = createMessageElement(messageContent, "user-message");
    outGoingMessage.querySelector(".message-text").textContent = userData.message;
    chatBody.appendChild(outGoingMessage);
    chatBody.scrollTo({ top:chatBody.scrollHeight, behavior: "smooth" });

    setTimeout(() => {
        const messageContent = `<i class="fa-solid fa-robot fa-1x bot-avatar"></i>
                <div class="message-text">
                    <div class="thinking-indcator">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                     </div>
                </div>`
        const inComingMessage = createMessageElement(messageContent, "bot-message", "thinking");
        chatBody.appendChild(inComingMessage);
        chatBody.scrollTo({ top:chatBody.scrollHeight, behavior: "smooth" });
        generateBotRespose(inComingMessage);
    }, 600);
}

messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === "Enter" && userMessage && !e.shiftKey && window.innerWidth > 768)
    {
        e.preventDefault();
        handleOutGoingMessage(e);
    } 

});

messageInput.addEventListener("input", () => {
    messageInput.style.hieght = `${initialHieght}px`;
    messageInput.style.hieght = `${messageInput.scrollHeight}px`;
    document.querySelector(".chat-form").style.borderRadius = messageInput.scrollHeight > 
    initialHieght ? "15px" : "32px";
});

const picker = new EmojiMart.Picker({
    theme: "light",
    skinTonePosition: "none",
    previewPosition: "none",
    onEmojiSelect: (emoji) => {
        const { slectionStart: start, selectionEnd: end } = messageInput;
        messageInput.setRangeText(emoji.native, start, end, "end");
        messageInput.focus();
    },
    onClickOutside : (e) => {
        if (e.target.id === "emoji-picker"){
            document.body.classList.toggle("show-emoji-picker");
        }
        else{
            document.body.classList.remove("show-emoji-picker");
        }
    }
});

document.querySelector(".chat-form").appendChild(picker);

sendMessageButton.addEventListener("click", (e) => handleOutGoingMessage(e)); 

startChat.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

closeChatBot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));


