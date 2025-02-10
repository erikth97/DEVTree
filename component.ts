<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Carrusel</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #001f5b;
            color: white;
        }
        .container {
            display: flex;
            height: 100vh;
        }
        .left-panel {
            flex: 1;
            background: #002f7a;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
        }
        .right-panel {
            flex: 1.5;
            padding: 20px;
            background: #003ea8;
        }
        .carousel {
            overflow: hidden;
            position: relative;
        }
        .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
        .card {
            min-width: 50%;
            height: 350px;
            background: white;
            color: black;
            border-radius: 20px;
            padding: 20px;
            text-align: center;
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .card-image {
            width: 100%;
            height: 60%;
            background-color: lightgray;
            border-radius: 20px 20px 0 0;
        }
        .card-content {
            padding: 10px;
            text-align: left;
        }
        .carousel-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            position: relative;
        }
        .progress-bar {
            flex-grow: 1;
            height: 4px;
            background: white;
            border-radius: 2px;
            position: relative;
            margin: 0 20px;
            overflow: hidden;
        }
        .progress-bar-fill {
            width: 33%;
            height: 100%;
            background: red;
            position: absolute;
            left: 0;
            transition: width 0.5s ease-in-out;
        }
        .carousel-controls button {
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            font-size: 20px;
            color: white;
            cursor: pointer;
        }
        .prev {
            background-color: #002f7a;
        }
        .next {
            background-color: #ff2e63;
        }
        .prev:hover {
            background-color: #001f5b;
        }
        .next:hover {
            background-color: #ff1e50;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="left-panel" id="image-display"></div>
        <div class="right-panel">
            <h2>MOTOCARROS</h2>
            <p class="location">📍 A 2 km de un distribuidor</p>
            <div class="carousel">
                <div class="carousel-track" id="carousel-track">
                    <div class="card" data-image="img1.jpg">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <p class="title">LOREM IPSUM</p>
                            <a href="#" class="explore">EXPLORA →</a>
                        </div>
                    </div>
                    <div class="card" data-image="img2.jpg">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <p class="title">LOREM IPSUM</p>
                            <a href="#" class="explore">EXPLORA →</a>
                        </div>
                    </div>
                    <div class="card" data-image="img3.jpg">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <p class="title">LOREM IPSUM</p>
                            <a href="#" class="explore">EXPLORA →</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <button class="prev" id="prev">◀</button>
                <div class="progress-bar"><div class="progress-bar-fill" id="progress-fill"></div></div>
                <button class="next" id="next">▶</button>
            </div>
        </div>
    </div>
    <script>
        const track = document.getElementById('carousel-track');
        const cards = document.querySelectorAll('.card');
        const progressBarFill = document.getElementById('progress-fill');
        let index = 0;

        function updateCarousel() {
            track.style.transform = `translateX(${-index * 50}%)`;
            progressBarFill.style.width = `${(index + 1) * 33}%`;
        }

        document.getElementById('next').addEventListener('click', () => {
            if (index < cards.length - 1) {
                index++;
                updateCarousel();
            }
        });

        document.getElementById('prev').addEventListener('click', () => {
            if (index > 0) {
                index--;
                updateCarousel();
            }
        });

        updateCarousel();
    </script>
</body>
</html>
