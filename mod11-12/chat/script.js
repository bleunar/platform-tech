function reply(text){
    let chat_messages = document.getElementById('chat-messages');
    let reply_message = document.createElement('div');
    reply_message.classList.add('message', 'incoming');
    reply_message.textContent = text;
    chat_messages.appendChild(reply_message);
}

function send_message(){
    let message_input = document.getElementById('message-input');
    let message = message_input.value.trim();
    
    if (message !== ''){
        let chat_messages = document.getElementById('chat-messages');
        let new_messages = document.createElement('div');
        new_messages.classList.add('message', 'outgoing');
        new_messages.textContent = message;
        chat_messages.appendChild(new_messages);
        message_input.value = '';
        message_input.focus();

        // Gin modify ko lang gamay ang code maam kay hindi ma call ang send_reply nga function
        // setTimeout(() => {
        //     let chat_messages = document.getElementById('chat-messages');
        //     let reply_message = document.createElement('div');
        //     reply_message.classList.add('message', 'incoming');
        //     reply_message.textContent = 'sample';
        //     chat_messages.appendChild(reply_message);
        // }, 1000);


        setTimeout(() => reply("hello babe"), 1000);
        setTimeout(() => reply("lakat ta 150?"), 2000);
        setTimeout(() => reply("charrr"), 3500);
        
        
    }
}