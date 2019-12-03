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

let anch = 'Anchor';
document.write('Анкор 1: ', anch.anchor('b1'), '<br>');
document.write('Анкор 2: ', anch.anchor('b2'), '<br>');
document.write('<a href="http://www.ifmo.ru/ru/" target="_blank" id="ITMO">Сайт ИТМО</a><br>')
document.write('<a href="https://de.ifmo.ru/" target="_blank" id="AcademicNT">ЦДО</a><br>')
document.write('<img src="https://bipbap.ru/wp-content/uploads/2017/04/2-16.jpg" style="width: 50%" id="pic1">')
document.write('<img src="https://rtvi.com/upload/iblock/515/515c770e78f1110a21b3f4c3084a2b30.jpg" style="width: 60%" id="pic2"><br>')
document.write('Количество анкоров: ', document.anchors.length,'<br>');
document.write('Количество ссылок: ', document.links.length,'<br>');
document.write('Содержимое анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Количество картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');
