const scene = document.getElementById('bgScene');
const rotator = document.getElementById('rotator');

var number = 30;
var angle = 0;
var increase = Math.PI * 2 / number;
for (var y = -20; y <= 20; y = y + 2) {
    for (var i = 0; i < number; i++) {
        var box = document.createElement('a-box');
        var color = createColor(i);
        box.setAttribute('material', 'shader: standard; color: #' + color);

        var animation = document.createElement('a-animation');
        animation.setAttribute('attribute', 'rotation');
        animation.setAttribute('from', '0 0 0');
        animation.setAttribute('to', '360 360 0');
        animation.setAttribute('dur', '4000');
        animation.setAttribute('repeat', 'indefinite');
        animation.setAttribute('easing', 'linear');

        var x = 10 * Math.cos(angle);
        var z = 10 * Math.sin(angle);

        box.setAttribute('position', x + ' ' + y + ' ' + z);
        rotator.appendChild(box);
        box.appendChild(animation);
        angle += increase;
    }
}

function createColor(i) {
    var seed = i * 8;
    var r, g, b;
    r = parseInt((Math.sin((2 * seed / 128 * Math.PI / 2)) + 1) * 128);
    g = parseInt((Math.sin((2 * seed / 128 * Math.PI / 2) - 4 * Math.PI / 3) + 1) * 128);
    b = parseInt((Math.sin((2* seed / 128 * Math.PI / 2) - 2 * Math.PI / 3) + 1) * 128);
    function toHex(e) {
        var hex = e.toString(16);
        if (hex.length === 1) {
            return '0' + hex;
        } else if (hex.length > 2){
            return 'ff';
        } else {
            return hex;
        }
    }
    var hexcolor = toHex(r) + toHex(g) + toHex(b);
    return hexcolor;
}

var rotating = document.createElement('a-animation');
rotating.setAttribute('attribute', 'rotation');
rotating.setAttribute('from', '0 0 0');
rotating.setAttribute('to', '0 0 360');
rotating.setAttribute('dur', '40000');
rotating.setAttribute('repeat', 'indefinite');
rotating.setAttribute('easing', 'linear');

rotator.appendChild(rotating);