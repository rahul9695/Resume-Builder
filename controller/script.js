const headerColor = document.getElementById('header-color');
const headerBackgroundColor = document.getElementById('resume-header-bg-color');
const headerTextColor = document.getElementById('header-text-color');
const fullName = document.getElementById('fullname');
const finalFullName = document.getElementById('final-fullName');
const jobTitleValue = document.getElementById('job-title-value');
const finalJobTitle = document.getElementById('final-jobTitle');
const email = document.getElementById('email-value');
const finalEmail = document.getElementById('final-email');
const phoneNumberValue = document.getElementById('phoneNumber-value');
const finalPhoneNumber = document.getElementById('final-phone');
const cityValue = document.getElementById('city-value');
const finalAddress = document.getElementById('final-address');
const summaryValue = document.getElementById('summary-value');
const finalSummary = document.getElementById('final-summary');

headerColor.addEventListener('input', updateHeaderColor);
headerTextColor.addEventListener('input', updateHeaderTextColor);
fullName.addEventListener('keyup', updateCandidateName);
jobTitleValue.addEventListener('keyup', updateJobTitle);
email.addEventListener('keyup', updateEmail);
phoneNumberValue.addEventListener('keyup', updatePhoneNumber);
cityValue.addEventListener('keyup', updateAddress);
summaryValue.addEventListener('keyup', updateSummary)

function updateHeaderColor(e){
    headerBackgroundColor.style.backgroundColor = e.target.value;
    // console.log(value);
}

function updateHeaderTextColor(e){
    headerBackgroundColor.style.color = e.target.value;
}

function updateCandidateName(e) {
    finalFullName.innerText = e.target.value;
}

function updateJobTitle(e){
    finalJobTitle.innerText = e.target.value;
}

function updateEmail(e){
    finalEmail.innerText = e.target.value;
}

function updatePhoneNumber(e){
    finalPhoneNumber.innerHTML = e.target.value;
}

function updateAddress(e){
    finalAddress.innerText = e.target.value;
}

function updateSummary(e){
    finalSummary.innerText = e.target.value;
}