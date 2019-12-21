function WordsCount(str) 
{ 
  return str.split(" ").length;
}
let str = "ITMO University"
document.write(str, '<br>');
document.write('Слова: ', WordsCount(str),' буквы: ', str.length, '<br>');
document.write('URL: ', document.URL,'<br>');
document.write('Протокол: ', document.location.protocol,'<br>');
document.write('Имя файла: ', document.location.pathname.split('.')[0],'<br>');
document.write('Расширение: ', document.location.pathname.split('.')[1],'<br>');
document.write('Подстрока параметров: ', window.document.location.search,'<br>');

let anch = 'Anchor';
document.write('Анкор 1: ', anch.anchor('b1'), '<br>');
document.write('Анкор 2: ', anch.anchor('b2'), '<br>');
document.write('<a href="http://www.ifmo.ru/ru/" target="_blank" id="ITMO">Сайт ИТМО</a><br>')
document.write('<a href="https://de.ifmo.ru/" target="_blank" id="AcademicNT">ЦДО</a><br>')
document.write('<img src="https://bipbap.ru/wp-content/uploads/2017/04/2-16.jpg" style="width: 150px; height: 84px" id="pic1">')
document.write('<img src="https://rtvi.com/upload/iblock/515/515c770e78f1110a21b3f4c3084a2b30.jpg" style="width: 150px; height: 103px" id="pic2"><br>')
document.write('Количество анкоров: ', document.anchors.length,'<br>');
document.write('Количество ссылок: ', document.links.length,'<br>');
document.write('Содержимое анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Количество картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');

for(let i = 0; i < (document.images.length-1); i++) {
if ( document.images[i].width >  document.images[i+1].width){
	let maxwidth = document.images[i].width;
} 		else{
			maxwidth = document.images[i+1].width;
}
}
document.write('Ширина самой широкой картинки : ',  maxwidth,'<br>');

let sumwidth = 0;
for(let i = 0; i < (document.images.length); i++) 
{
	sumwidth += document.images[i].height;
} 	
document.write('Сумма высот изображений : ',  sumwidth,'<br>');


let count = 0;
for(i=0; i<10; i++){
	document.write('<form id ="ID is ',i,'" name="',i,'">');
		while(count < (i % 2  + 1)){
		document.write('<input type = "text" id=text name="text" placeholder = "Текст"></input>');
  		document.write('<input type = "password" id=text name="password" placeholder = "Пароль"></input>');
  		count+=1;
 		}
 		count=0;
  		document.write('<input type = "button" id=button1 class="name" name="show_name_of_form" value="Показать имя формы" onclick="alert(value)"></input>');
  		document.write('<input type = "button" id=button2 class="attachment" name="attachment" value="Принадлежность" onclick="alert(document.forms[',i,'].id)"></input>');
 		document.write('<input type = "reset" id=button3 class="reset"  name="reset" value="Сброс"></input>');
 		document.write('<input type = "button" id=button4 class="number_of_inputs" name="number_of_inputs" value="Показать количество полей" onclick="alert(document.forms[',i,'].elements.length)"></input>');
	document.write('</form>');
}



document.write('<a href="https://www.litres.ru/mihail-bulgakov/master-i-margarita/">М.А. Булгаков</a>', '<br>');
document.write('<a href="https://www.litres.ru/mihail-bulgakov/sobache-serdce/">М.А. Булгаков</a>', '<br>');
document.write('<a href="https://www.litres.ru/mihail-bulgakov/belaya-gvardiya/">М.А. Булгаков</a>', '<br>');
document.write('<a href="https://www.litres.ru/lev-tolstoy/anna-karenina-172100/">Л.Н. Толстой</a>', '<br>');
document.write('<a href="https://www.litres.ru/lev-tolstoy/voyna-i-mir-v-4-h-tomah-304672/">Л.Н. Толстой</a>', '<br>');
document.write('<a href="https://www.litres.ru/lev-tolstoy/voskresenie-171740/">Л.Н. Толстой</a>', '<br>');
document.write('<a href="https://www.litres.ru/fedor-dostoevskiy/prestuplenie-i-nakazanie/">Ф.М. Достоевский</a>', '<br>');
document.write('<a href="https://www.litres.ru/fedor-dostoevskiy/idiot-171937/8">Ф.М. Достоевский</a>', '<br>');


var flags = [], output = [], l = document.links.length, i;
for( i=0; i<l; i++) {
    if(flags[document.links[i].innerHTML]) continue;
    flags[document.links[i].innerHTML] = true;
    output.push(document.links[i].innerHTML);
}

count= 0;
let href=" ";
document.write('<form>');
  	document.write('<table id="dynamic"  width="200" border="1">');
 	    document.write(' <tr>');
    	    document.write('<th scope="col">Уникальный текст ссылки</th>');
    	    document.write('<th scope="col">Количество ссылок</th>');
    	    document.write('<th scope="col">Аттрибут "href"</th>');
    	document.write('</tr>');
    	 	for(i = 0; i < (output.length); i++) {
    	  		document.write('<tr>');
     		  		document.write('<td>',output[i],'</td>');
     		  			for(let j = 0; j < (document.links.length); j++) {
     		  				if (output[i] == document.links[j].innerHTML){
     		  					count+=1;
     		  					href+=document.links[j].href + ', <br>';
     		  				}
      					}
      				document.write('<td>',count,'</td>');
     		  		document.write('<td>',href,'</td>');
     		  		count=0;
      				href=" ";
      			document.write('</tr>');
      		}
  	document.write('</table>');
document.write('</form>');