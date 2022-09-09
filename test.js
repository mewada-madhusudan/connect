function message() {

    name = document.getElementById('name').value;
    mail = document.getElementById('mail').value;
    msg = document.getElementById('msg').value;
    data=`Name: ${name},
    	  Mail: ${mail},
    	  Message: ${msg}`
    fetch("https://api.telegram.org/bot5798174362:AAGod65O7U_M0ikOyD31Tolk1HxkIT3Wjuc/sendMessage?chat_id=-626217587&text="+data)
        .then(function(response) {
            return response.json();
        })
};