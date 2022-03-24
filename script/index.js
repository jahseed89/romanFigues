
class NumeralConverter {
    constructor(numberToConvert) {
      this.value = numberToConvert;
      this.numeral = ""
    }
  
    processNumeral(symbol, symbolValue) {
      while(this.value >= symbolValue){
        this.numeral += symbol;
        this.value -= symbolValue;
      }
    }
  }
  
  function convertToRoman(num) {
    const converter = new NumeralConverter(num);
    // console.log(converter);
    converter.processNumeral('M', 1000)
    converter.processNumeral('CM', 900)
    converter.processNumeral('D', 500)
    converter.processNumeral('CD', 400)
    converter.processNumeral('C', 100)
    converter.processNumeral('XC', 90)
    converter.processNumeral('L', 50)
    converter.processNumeral('XL', 40)
    converter.processNumeral('X', 10)
    converter.processNumeral('IX', 9)
    converter.processNumeral('V', 5)
    converter.processNumeral('IV', 4)
    converter.processNumeral('I', 1)
    // console.log(converter)
  
    return converter.numeral;
  
  }
  
  // Lets convert to romanNumbers in our page
  function userNum() {
      let btnClick = document.getElementById('btn');
  
      btnClick.onclick = function(e) {
        e.preventDefault();
          let numberInput = document.getElementById('num').value
          let currnetVal = parseInt(numberInput)
          let displayType = document.querySelector('.display-val')
          displayType.textContent = convertToRoman(currnetVal)
      };
   }
   userNum();
  