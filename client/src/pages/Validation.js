function Validation(data) { 

    const error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*A-Z)[a-zA-Z0-9]{8,}$/;


    if(data.email === ""){
        error.email = "email are required";

    }
    
    if(!email_pattern.test(data.email)){
        error.email = "Email didn't match"
    }

    if( data.password === ""){
        error.password = "password fields are required";

    }
    if(!password_pattern.test(data.password)){
        error.password = "Enter a valid password"
    }
    if (data.cpassword === "" || data.cpassword !== data.password){
        error.cpassword = "password not matched"
    }

    return error
}


export default Validation