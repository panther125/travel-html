let divTyping_qq = document.getElementById('xf_type_qq')
let i1 = 0,
    timer1 = 0,
    str1 = '123456'

function typing_qq() {
    if (i1 <= str1.length) {
        divTyping_qq.innerHTML = str1.slice(0, i1++) + '_'
        timer1 = setTimeout(typing_qq, 150) //time
    } else {
        divTyping_qq.innerHTML = str1
        clearTimeout(timer1)
    }
}
typing_qq()

let divTyping_wx = document.getElementById('xf_type_wx')
let i2 = 0,
    timer2 = 0,
    str2 = '123456'

function typing_wx() {
    if (i2 <= str2.length) {
        divTyping_wx.innerHTML = str2.slice(0, i2++) + '_'
        timer2 = setTimeout(typing_wx, 150) //time
    } else {
        divTyping_wx.innerHTML = str2
        clearTimeout(timer2)
    }
}
typing_wx()

let divTyping_ws = document.getElementById('xf_type_ws')
let i3 = 0,
    timer3 = 0,
    str3 = 'aaaaa.com'

function typing_ws() {
    if (i3 <= str3.length) {
        divTyping_ws.innerHTML = str3.slice(0, i3++) + '_'
        timer3 = setTimeout(typing_ws, 150) //time
    } else {
        divTyping_ws.innerHTML = str3
        clearTimeout(timer3)
    }
}
typing_ws()

let divTyping_em = document.getElementById('xf_type_em')
let i4 = 0,
    timer4 = 0,
    str4 = '12345@163.com'

function typing_em() {
    if (i4 <= str4.length) {
        divTyping_em.innerHTML = str4.slice(0, i4++) + '_'
        timer4 = setTimeout(typing_em, 150) //time
    } else {
        divTyping_em.innerHTML = str4
        clearTimeout(timer4)
    }
}

typing_em()


let divTyping_tl = document.getElementById('xf_type_tl')
let i5 = 0,
    timer5 = 0,
    str5 = '11012012138'

function typing_tl() {
    if (i5 <= str5.length) {
        divTyping_tl.innerHTML = str5.slice(0, i5++) + '_'
        timer5 = setTimeout(typing_tl, 150) //time
    } else {
        divTyping_tl.innerHTML = str5
        clearTimeout(timer5)
    }
}

typing_tl()


let divTyping_gt = document.getElementById('xf_type_gt')
let i6 = 0,
    timer6 = 0,
    str6 = 'panther125'

function typing_gt() {
    if (i6 <= str6.length) {
        divTyping_gt.innerHTML = str6.slice(0, i6++) + '_'
        timer6 = setTimeout(typing_gt, 150) //time
    } else {
        divTyping_gt.innerHTML = str6
        clearTimeout(timer6)
    }
}

typing_gt()


var binft = function(r) {
    function t() {
        return b[Math.floor(Math.random() * b.length)]
    }

    function e() {
        return String.fromCharCode(94 * Math.random() + 33)
    }

    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = e(),
                l.style.color = t(),
                n.appendChild(l)
        }
        return n
    }

    function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")),
            r.textContent = c.text,
            r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))),
            setTimeout(i, d)
    }
    var l = "",
        o = ["从不认为野心勃勃是贬义词", "大道至简,悟者自成", "保持热爱，世间美好"].map(function(r) {
            return r + "."
        }),
        a = 2,
        g = 1,
        s = 5,
        d = 75,
        b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
        c = {
            text: "",
            prefixP: 10,
            skillI: 0,
            skillP: 0,
            direction: "forward",
            delay: a,
            step: g
        };
    i()
};
binft(document.getElementById('xf_txt'));