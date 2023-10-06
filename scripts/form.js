



(()=>{
    handleSubscriptionForm()








    function handleSubscriptionForm(){
        const subscriptionEmailInput = document.querySelector('#subscription-email input')

        subscriptionEmailInput.addEventListener('input',handleSubscriptionEmailInput)

        const subscriptionForm = document.getElementById('subscription-form');

        subscriptionForm.addEventListener('submit',handleSubscriptionFormSubmit)


    }



    function handleSubscriptionEmailInput(e){
        subscriptionformValidation()
    }

    function handleSubscriptionFormSubmit(e){

        e.preventDefault() // stops reloading on form submit
        //validation check 
        const isValid = subscriptionformValidation()
        if(isValid){
            const email = document.querySelector('#subscription-email input')
            email.value = ""
            alert('Details Submitted!')
        }
    }
   
})()

function subscriptionformValidation(){
    let isValid = true;
    const email = document.querySelector('#subscription-email input').value
    const errorNode = document.querySelector('#subscription-email .error')
    if(email===''){
        errorNode.innerHTML = "Email can't be empty"
        isValid =false
       }else if(!email.includes('@')||!email.includes('.')){
        errorNode.innerHTML  = "Email is not valid"
        isValid =false
       }else{
        errorNode.innerHTML = ""
         isValid = true;
       }
       return isValid
}
function createError(errorText){
    const error = document.createElement('p'); 
    error.classList.add('error')
    error.innerHTML = errorText;
    return error
}
