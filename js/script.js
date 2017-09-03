var arrayVariable = ['生', '年', '千'];

$.each(arrayVariable, function(index, value) {
  $('<div />', {
    id: 'drag'+index,
    text: value,
    draggable: 'true',
    ondragstart: 'drag(event)'
  }).appendTo('.leftContainer');
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
