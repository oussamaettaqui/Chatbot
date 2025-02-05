const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");
const fileInput = document.querySelector("#file-input");
const userData = {
    message : null,
    file : {
        data : null,
        mime_type : null,
    }
}

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
    const requestOptions = {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify({
            contents: [{
               
                parts: [
                    { text: userData.message }, ...(userData.file.data ? [{ inline_data: userData.file }] : [])
                ]
            }]
        })
    }
    try{
        const response =  await fetch(API_URL, requestOptions);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);
            // console.log(data);

        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()|| 'Sorry, I could not process that.';
        messageElement.innerText = apiResponseText;
        // console.log(messageElement);

    }catch(error){
        console.log("hhhhhhhhhhhhhhhhhhhh");
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
    if (e.key === "Enter" && userMessage)
    {
        e.preventDefault();
        handleOutGoingMessage(e);
    } 

});

fileInput.addEventListener("change", () => {
    const file  = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {

        const base64String = e.target.result.split(",")[1];
        userData.file = {
            data : base64String,
            mime_type : file.type
        } 
        const messageContent = `
            <div class="message-text">
                <img src="${e.target.result}" alt="Uploaded image" style="max-width: 200px; border-radius: 10px;">
            </div>`;
        const outGoingMessage = createMessageElement(messageContent, "user-message");
        chatBody.appendChild(outGoingMessage);
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

        // Clear file input
        fileInput.value = "";
    }
    reader.readAsDataURL(file);
    // console.log(file); 
});

sendMessageButton.addEventListener("click", (e) => handleOutGoingMessage(e)); 

document.querySelector("#file-upload").addEventListener("click", () => fileInput.click());





