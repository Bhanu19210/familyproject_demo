const username = document.getElementById('username');
const password = document.getElementById('password');
        
        
        
        
        
        const validate = () => {
            const username_value = username.value.trim();
            const password_value = password.value.trim();
        
            if (username_value === ''){
                let inputControl = username.parentElement;
                let errorDisplay = inputControl.querySelector('.error');
        
                errorDisplay.innerText = "cannot leave empty";
                inputControl.classList.add('error')
                return false;  
           }
           else if (username_value != "Bhanu"){
                let inputControl = username.parentElement;
                let errorDisplay = inputControl.querySelector('.error');
        
                errorDisplay.innerText = "Invalid User";
                inputControl.classList.add('error')
                return false; 
           } 
        
           if (password_value === ''){
                let inputControl = password.parentElement;
                let errorDisplay = inputControl.querySelector('.error');
        
                errorDisplay.innerText = "cannot leave empty";
                inputControl.classList.add('error')
                return false
            }  
            else if (password_value != "paila"){
                let inputControl = password.parentElement;
                let errorDisplay = inputControl.querySelector('.error');
        
                errorDisplay.innerText = "wrong password";
                inputControl.classList.add('error')
                return false; 
           } 
            else{
                return true 
            }
        
        }  