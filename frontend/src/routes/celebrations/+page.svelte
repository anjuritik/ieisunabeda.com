<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Statutory Celebrations</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .card {
      margin-bottom: 2rem;
    }
    .card-3d {
      border: 3px solid #ccc;
      border-radius: 10px;
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2), -2px -2px 10px rgba(255, 255, 255, 0.7);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card-3d:hover {
      transform: translateY(-5px);
      box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
    }

    .carousel-inner img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
      margin: auto;
    }

    .carousel {
      max-width: 300px; /* limit width */
      margin: auto;
    }

    @media (max-width: 768px) {
      .carousel-inner img {
        width: 120px;
        height: 120px;
      }

      .carousel {
        max-width: 140px;
      }
    }
  </style>
</head>
<body>

<div class="container">
  <h4 class="mb-4 text-center text-primary">Statutory Celebrations</h4>
  <!-- Card 1: Engineers' Day -->
  <div class="card p-3 bg-light text-dark card-3d">
    <div class="row g-4 align-items-center">
      <!-- Text -->
      <div class="col-md-6">
        <h4>Engineers' Day</h4>
        <p>Celebrated on 15th September in honor of Sir M. Visvesvaraya, recognizing the contributions of engineers to society.</p>
      </div>

      <!-- Carousel -->
      <div class="col-md-4 text-center">
        <div id="carouselEngineersDay" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/Image/e1.jpg" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
              <img src="/Image/e2.jpg" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
              <img src="/Image/e3.jpg" class="d-block" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselEngineersDay" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselEngineersDay" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Card 2: Foundation Day -->
  <div class="card p-3 card-3d">
    <div class="row g-4 align-items-center">
      <!-- Text -->
      <div class="col-md-6">
        <h4>IEI Foundation Day</h4>
        <p>Celebrated to commemorate the founding of the Institution of Engineers India.</p>
      </div>

      <!-- Carousel -->
      <div class="col-md-4 text-center">
        <div id="carouselFoundationDay" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/Image/f1.jpg" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
              <img src="/Image/f2.jpg" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
              <img src="/Image/f3.jpg" class="d-block" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselFoundationDay" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselFoundationDay" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
