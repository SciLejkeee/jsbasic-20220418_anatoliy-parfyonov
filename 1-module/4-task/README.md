# Проверка на спам

Напишите функцию `checkSpam(str)`, возвращающую `true`, если `str` содержит `'1xBet'` или `'XXX'`, а иначе `false`.

Функция должна быть нечувствительна к регистру:

```js
checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false
```


   if (str.indexOf('1XbeT'|| 'xxx')) {
    return (true);
  } else if (str.idexOf(' ')){
  return (false);
  }

checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');

if (lowerStr.includes('1XbeT') || lowerStr.includes('xxx')); {
  return true;  
}
if (lowerStr.includes(' ')){
  return false;



\\вычисляет всё,кроме последнего

   if (str.indexOf('xxx') || ('1XbeT') != -1){
        return (true);
      }
    if (str.indexOf(` `) != 1){
        return (false);
    }
  
}

\\this too

if (str.includes('xxx') || ('1XbeT')){
        return (true);