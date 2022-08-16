//log in field 
document.getElementById('btn-login').addEventListener('click',function(){
    //input mail from user
    const mailBox = document.getElementById('user-mail');
    const email = mailBox.value;
    //input password from user
    const passwordBox = document.getElementById('user-pass');
    const password = passwordBox.value;
    //verify user from email and password
    if(email === 'ather.physics57@gmail.com' && password === 'Ather7890@'){
        window.location.href = 'bank.html';
    }else{
        alert('Please enter your valid email and password');
    }
})