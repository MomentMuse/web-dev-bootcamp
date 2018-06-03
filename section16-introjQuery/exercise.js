//Select all divs are give purple background
$('div').css('background', 'purple');

//Select divs with class = 'highlight' and set 200px wide
$('div.highlight').css('width', '200px');

//Select div id='third' and give orange border
$('#third').css('border', '3px solid orange');

//BONUS: Select the first div and change font to pink
//first-of-type is a built-in CSS pseudoclass
$('div:first-of-type').css('color', 'pink');