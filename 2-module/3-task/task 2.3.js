let calc = {
    sum (){
      return this.a + this.b
    },
    
    mul (){
      return this.a * this.b
    },
    
      read (){
      this.a = ('a' , 0);
      this.b = ('b', 0);
    },
    
  }
    calculator.read();
    console.log (calculator.sum());
    console.log (calculator.mul());

  

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
