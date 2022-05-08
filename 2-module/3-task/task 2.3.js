let calculator = {
sum(){
  return this.a + this.b
},
mul(){
  return this.a * this.b
},
read(){
this.a = +prompt ('number', 0);
this.b = +prompt ('number2', 0);
}
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
