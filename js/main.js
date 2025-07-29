let input = document.querySelector('input');
let btn = document.querySelector('button');
let pdt = document.querySelector('.product');
let productArray = ['stick', 'stove', 'broom', 'stove', 'stick', 'pan',
    'stick', 'stove', 'steel', 'spoon',
    'steel', 'steel', ];
productArray.map((item) => {
    pdt.innerHTML += item + '<br>';
})

btn.addEventListener('click', () => {
    if (!input.value) {
        alert('Please enter a product');
    } else {
        pdt.innerHTML = "";
        let finddata = productArray.filter((item) => item == input.value);
        if(finddata.length> 0) {
            
            finddata.map((item) => {
                pdt.innerHTML += item + '<br>';
            })
        } else {
            pdt.innerHTML="No product found"
        }
        input.value = '';
    }
})

// spliting text
let textinput = document.querySelector('.txt');
let btnsplit = document.querySelector('.split');
let word = document.querySelector('.textsplit');

const handleSplit = () => {
    if (!textinput.value) {
        alert("Please enter a value");
        
    } else {
        let myData = textinput.value;
        let char = myData.split('');
        char.map((item) => {
            word.innerHTML += item + ", ";
        })
        textinput.value = '';
        
    }
}