

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}
function calculateTriangleArea(){
    // Triangle Base Value
    const base = getInputValueById('triangle-base');


    // Triangle Height Value
    const height = getInputValueById('triangle-height');



    // Calculate Area
    const area = 0.5 * base * height;
    console.log(area);


    // Display Triangle Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}   
