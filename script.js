(function () {
    animationstyle1();
  })();
function animationstyle1() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', function () {
        canvas.width = this.window.innerWidth;
        canvas.height = this.window.innerHeight;
        init();
    })
    // Window.addEventListener('onchange',function(){
    //     canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // })
    var c = canvas.getContext("2d");
    // c.fillStyle = "green";
    // c.fillRect(100, 100, 100, 100);
    // c.fillStyle = "red";
    // c.fillRect(400, 100, 100, 100);
    // c.fillStyle = "blue";
    // c.fillRect(100, 400, 100, 100);
    // //line
    // c.beginPath();
    // c.moveTo(560, 190);
    // c.lineTo(500, 500);
    // c.lineTo(660, 690);
    // c.strokeStyle = "red";
    // c.stroke();
    // c.strokeStyle = "blue";
    // //arc/circle
    // for (var i = 0; i < 100; i++) {
    //     var x = Math.random() * window.innerWidth;
    //     var y = Math.random() * window.innerHeight;
    //     c.beginPath();
    //     c.arc(x, y, 50, 0, Math.PI * 2, false);
    //     c.stroke();
    // }
    function rnb(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    var mouse = {
        x: undefined,
        y: undefined
    }
    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })
    var maxr = 5, minr = 1;
    var colorarray = ['#2C3E50', '#E74C3C', '#ECF0F1', '3498DB', '#2980B9'];
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.or = radius;
        this.radius = radius;
        this.color = colorarray[rnb(colorarray.length, 0)];
        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "blue";
            c.stroke();
            c.fill();
            c.fillStyle = this.color;
        }
        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
                this.dx = -this.dx;
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
                this.dy = -this.dy;

            this.x += this.dx;
            this.y += this.dy;

            if (mouse.x - this.x < 65 && mouse.x - this.x > -65 && mouse.y - this.y < 65 && mouse.y - this.y > -65 && this.radius < 40) {
                this.radius++;
            }
            else if (this.radius > this.or) {
                this.radius--;
            }
            this.draw();
        }
    }
    var circlearray = [];
    function init() {
        circlearray = [];
        for (var i = 0; i < 500; i++) {
            var x = Math.random() * (innerWidth - 2 * radius) + radius;
            var y = Math.random() * (innerHeight - 2 * radius) + radius;
            var radius = Math.random() * (maxr - minr) + minr;
            var dx = (Math.random() - .5) * 2;
            var dy = (Math.random() - .5) * 2;
            circlearray.push(new Circle(x, y, dx, dy, radius));
        }
    }
    init();
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < circlearray.length; i++)
            circlearray[i].update();

    }
    requestAnimationFrame(animate);
}
function animationstyle2() {
    var canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', function () {
        canvas.width = this.window.innerWidth;
        canvas.height = this.window.innerHeight;
        init();
    })
    var c = canvas.getContext("2d");
    function rnb(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    var mouse = {
        x: undefined,
        y: undefined
    }
    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })
    var maxr = 30, minr = 20;
    const g = 0.07, friction = 0.9;
    var colorarray = ['#2C3E50', '#E74C3C', '#ECF0F1', '3498DB', '#2980B9'];
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.or = radius;
        this.radius = radius;
        this.color = colorarray[rnb(colorarray.length, 0)];
        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "blue";
            c.stroke();
            c.fill();
            c.fillStyle = this.color;
        }
        this.update = function () {
            if (this.x + this.radius + this.dx > innerWidth || this.x - this.radius < 0)
                this.dx = -this.dx;
            if (this.y + this.radius + this.dy > canvas.height) {
                this.dx *= friction;
                this.dy = -this.dy * friction;
            }
            else {
                this.dy += g;
            }
            if (y != 0)
                this.x += this.dx;
            this.y += this.dy;
            // if (mouse.x - this.x < 65 && mouse.x - this.x > -65 && mouse.y - this.y < 65 && mouse.y - this.y > -65 && this.radius < 40) {
            //     this.radius++;
            // }
            // else if (this.radius > this.or) {
            //     this.radius--;
            // }
            this.draw();
        }
    }
    var circlearray = [];
    function init() {
        circlearray = [];
        for (var i = 0; i < 200; i++) {
            var x = Math.random() * (innerWidth - 2 * radius) + radius;
            var y = Math.random() * (innerHeight - 2 * radius) + radius;
            var radius = Math.random() * (maxr - minr) + minr;
            var dx = this.dx = Math.random() * 1.5 - 0.75;;
            var dy = 0;
            circlearray.push(new Circle(x, y, dx, dy, radius));
        }
    }
    init();
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < circlearray.length; i++)
            circlearray[i].update();

    }
    requestAnimationFrame(animate);
}