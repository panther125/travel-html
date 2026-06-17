/* ============================================
   Contact Page - Typing Animation
   ============================================ */

function createTypewriter(elementId, text, speed) {
    speed = speed || 150;
    var el = document.getElementById(elementId);
    if (!el) return;
    var i = 0;
    var timer;

    function type() {
        if (i <= text.length) {
            el.innerHTML = text.slice(0, i++) + '_';
            timer = setTimeout(type, speed);
        } else {
            el.innerHTML = text;
            clearTimeout(timer);
        }
    }
    type();
}

createTypewriter('xf_type_qq', '123456');
createTypewriter('xf_type_wx', '123456');
createTypewriter('xf_type_ws', 'aaaaa.com');
createTypewriter('xf_type_em', '12345@163.com');
createTypewriter('xf_type_tl', '11012012138');
createTypewriter('xf_type_gt', 'panther125');

/* Gradient Text Animation */
var binft = function (r) {
    function t() { return b[Math.floor(Math.random() * b.length)]; }
    function e() { return String.fromCharCode(94 * Math.random() + 33); }

    function n(r) {
        var frag = document.createDocumentFragment();
        for (var i = 0; r > i; i++) {
            var span = document.createElement("span");
            span.textContent = e();
            span.style.color = t();
            frag.appendChild(span);
        }
        return frag;
    }

    function i() {
        var skill = o[c.skillI];
        if (c.step) {
            c.step--;
        } else {
            c.step = g;
            if (c.prefixP < l.length) {
                if (c.prefixP >= 0) c.text += l[c.prefixP];
                c.prefixP++;
            } else if (c.direction === "forward") {
                if (c.skillP < skill.length) { c.text += skill[c.skillP]; c.skillP++; }
                else if (c.delay) c.delay--;
                else { c.direction = "backward"; c.delay = a; }
            } else {
                if (c.skillP > 0) { c.text = c.text.slice(0, -1); c.skillP--; }
                else { c.skillI = (c.skillI + 1) % o.length; c.direction = "forward"; }
            }
        }
        r.textContent = c.text;
        r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, skill.length - c.skillP)));
        setTimeout(i, d);
    }

    var l = "";
    var o = ["从不认为野心勃勃是贬义词", "大道至简,悟者自成", "保持热爱，世间美好"].map(function (r) { return r + "."; });
    var a = 2, g = 1, s = 5, d = 75;
    var b = [
        "rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)",
        "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)",
        "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)",
        "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)",
        "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"
    ];
    var c = { text: "", prefixP: 10, skillI: 0, skillP: 0, direction: "forward", delay: a, step: g };
    i();
};

var txtEl = document.getElementById('xf_txt');
if (txtEl) binft(txtEl);
