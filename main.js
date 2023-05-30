function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(325, 275);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function apply_filter() {
    tint_color = document.getElementById("tint_color").value;
}

function take_snapshot() {
    save("tinted_image.png");
}