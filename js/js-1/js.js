function WordsCount(str) 
{ 
  return str.split(" ").length;
}
let str = "ITMO University"
document.write(str, '<br>');
document.write('Words: ', WordsCount(str),' letters: ', str.length, '<br>');
document.write('URL: ', document.URL,'<br>');
document.write('Протокол: ', document.location.protocol,'<br>');
document.write('Имя файла: ', document.location.pathname.split('.')[0],'<br>');
document.write('Расширение: ', document.location.pathname.split('.')[1],'<br>');
let strget = window.location.search.replace( '?', '');
document.write('Подстрока параметров: ', strget,'<br>');
