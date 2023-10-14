var formValues  = {
};
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

(function(){
    handleForm()
    

})()


function handleForm(){
    const form = document.getElementById('contactForm');
    form.addEventListener('input',onFormChange)
    form.addEventListener('submit',onSubmit)
    form.addEventListener('change',handleValidation)
}


function onFormChange(e){
    // const name =e.target.name
    // const value = e.target.value;
    const {target:{name,value}} = e;
    formValues[name]=value

   
}

function onSubmit(e){
    e.preventDefault();
    console.log(formValues)
}

function disableButton(isDisabled){
    const btn = document.getElementById('contactFormbtn')
    btn.disabled = isDisabled;
}

function handleValidation(){
    const {name,email,message} = formValues;
    let isValidated = true;
    const errors =  {
    }

    if(!name){
        isValidated=false;
        errors.name ="Please enter name"
    }else if(name && name.length<=3 ){
        isValidated=false;
        errors.name ="Name should be more than 3 letters"
    }else if(!email){
        isValidated=false;
        errors.email ="Please enter email"
    }else if(email && !emailRegex.test(email)){
        isValidated=false;
        errors.email ="Please enter valid email"
    }else if(!message){
        isValidated=false;
        errors.message ="Please enter your message"
    }else if(message && message.length<8){
        isValidated=false;
        errors.message ="Please exlain your query further"
    }else{
        isValidated = true
    }
    
    disableButton(!isValidated)

    handleErrors(errors)

    return isValidated
}

function handleErrors(erors){
    console.log(erors)
}







