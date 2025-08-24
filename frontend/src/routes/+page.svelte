<script>
  import { onMount } from 'svelte';
  import { setupDropdownHover } from '$lib/js/dropdown';
  import '$lib/js/dropdown.css';
  import '$lib/js/hero.css';
  import { browser } from '$app/environment';

if (browser) {
  import('../lib/js/bootstrap.bundle.min.js').then(() => {
    console.log('Bootstrap JS loaded successfully');
  }).catch(err => {
    console.error('Error loading Bootstrap JS', err);
  });
}
   onMount(() => {
    setupDropdownHover();
  }); 
     
</script>

<!--Start of Navbar-->
<nav class="navbar navbar-expand-sm navbar-light custom-navbar shadow-sm">
  <div class="container-fluid">
    <!-- Navbar Brand -->
    <a class="navbar-brand fw-bold" href="#">IEI</a>

    <!-- Toggler for Mobile View -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Top Buttons (Members, Academics, Contact Us) -->
    <div class="d-flex justify-content-center flex-wrap gap-3">
      <a href="/members" class="btn btn-light fw-normal text-dark px-3 py-2">Members</a>
      <a href="/celebrations" class="btn btn-light fw-normal text-dark px-3 py-2">Statuatory celebrations</a><!-- 
      <a href="/gallery" class="btn btn-light fw-normal text-dark px-3 py-2">Photo Gallery</a>-->
      <a href="/contact" class="btn btn-light fw-normal text-dark px-3 py-2">Contact Us</a> 
    </div>

    <!-- Navbar Collapse -->
    <div class="collapse navbar-collapse" id="mainNavbar">
      <!-- Centered Navbar Links -->
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

        <!-- Home Mega Menu -->
        <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle" href="iei-Home.aspx" id="homeDropdown" role="button" data-bs-toggle="dropdown">
            <i class="fa fa-home"></i> Home
          </a>
          <div class="dropdown-menu p-4 mega-menu" aria-labelledby="homeDropdown">
            <div class="row">
              <div class="col-md-6">
                <h6>Explore IEI</h6>
                <a class="dropdown-item" href="iei-home.aspx#about-iei">About IEI</a>
                <a class="dropdown-item" href="iei-home.aspx#history-iei">History</a>
                <a class="dropdown-item" href="iei-home.aspx#services">Services</a>
                <a class="dropdown-item" href="iei-home.aspx#forthcoming-events">Forthcoming Events</a>
                <a class="dropdown-item" href="IEI-Tender.aspx">Tender</a>
                <a class="dropdown-item" href="ajax/Custom/IEI_Arbitrator_Panel_New.html">Arbitration</a>
              </div>
              <div class="col-md-6">
                <h6>More</h6>
                <a class="dropdown-item" href="ajax/Custom/RoyalCharter.html">Royal Charter</a>
                <a class="dropdown-item" href="IEI_Council_Members.aspx">IEI Council</a>
                <a class="dropdown-item" href="ajax/Custom/Committees.html">Committees</a>
                <a class="dropdown-item" href="iei-home.aspx#links-downloads">Links & Downloads</a>
                <a class="dropdown-item" href="iei_career.html">Careers</a>
              </div>
            </div>
          </div>
        </li>

        <!-- Membership Mega Menu -->
        <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle" href="iei-Memb.aspx" id="membershipDropdown" role="button" data-bs-toggle="dropdown">
            <i class="fa fa-users"></i> Membership
          </a>
          <div class="dropdown-menu p-4 mega-menu" aria-labelledby="membershipDropdown">
            <div class="row">
              <div class="col-md-6">
                <h6>Member Info</h6>
                <a class="dropdown-item" href="iei-Memb.aspx#members-benefit">Benefits to Members</a>
                <a class="dropdown-item" href="iei-Memb.aspx#membership-grade">Grades of Membership</a>
                <a class="dropdown-item" href="iei-Memb.aspx#Status_Membership">Application Status</a>
                <a class="dropdown-item" href="iei-Memb.aspx#chartered-engineering">Chartered Engineer</a>
                <a class="dropdown-item" href="iei-Memb.aspx#career-advancement">Career Advancement</a>
              </div>
              <div class="col-md-6 text-center align-self-center">
                <a href="IEI-RegistrationForMembApp.aspx" class="btn btn-primary w-100"><strong>Apply for Membership</strong></a>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</nav>

<!-- End of Navbar -->

<!-- Start of message from Chairman and Honorary Secretary -->
<section class="d-flex flex-column align-items-center text-center py-4 border-bottom">
  <div class="container">
    <!-- Main Heading -->
    <h3 class="text-black text-center">Message From Chairman & Honorary Secretary</h3>
   <!-- Row for Chairman and Honorary Secretary Info (Grid Layout) -->
    <div class="row justify-content-center align-items-center">

      <!-- Column 1: Chairman Photo, Name & Designation -->
      <div class="col-md-2 d-flex flex-column align-items-center mb-4">
        <!-- Chairman Photo -->
        <img src="/Image/chairman.png" alt="Chairman Photo" class="img-fluid rounded-circle mb-3" style="width: 120px; height: 120px;">
        <!-- Chairman Name & Designation -->
        <!-- Chairman Name & Designation -->
        <p class="fs-5 text-dark mb-1 text-primary">Premananda Maity</p>
        <p class="fs-6 text-muted mb-3">Chairman</p>
      </div>

      <!-- Column 2: Secretary Message -->
      <div class="col-md-4 d-flex flex-column align-items-center mb-4">
        <p class="text-secondary text-justify text-black text-xs" style="text-align: justify;">
          It is with great pleasure and a sense of responsibility that I extend my warmest greetings to each one of you as the Chairman of the Sunabeda Local  Centre of The Institution of Engineers (India). Our center has a rich legacy of fostering engineering excellence, innovation, and professional development. As we embark on this journey together, I am committed to upholding the esteemed values and principles of our institution while steering us towards greater achievements.
<br>
I invite all members to actively participate in our endeavors, contributing your expertise, ideas, and enthusiasm. Together, let us strive to elevate the engineering landscape in Sunabeda, driving progress and making a meaningful impact in our communities.
I look forward to collaborating with each of you and leading our center to new heights of success.


        </p>
      </div>

      <!-- Column 3: Secretary Photo, Name & Designation -->
      <div class="col-md-2 d-flex flex-column align-items-center mb-4">
        <!-- Secretary Photo -->
        <img src="/Image/sec.png" alt="Secretary Photo" class="img-fluid rounded-circle mb-3" style="width: 120px; height: 120px;">
        <!-- Secretary Name & Designation -->
        <p class="fs-5 text-dark mb-1">Sanjaya Bisyoee</p>
        <p class="fs-6 text-muted mb-3">Secretary General</p>
      </div>

      <!-- Column 4: Chairman Message -->
      <div class="col-md-4 d-flex flex-column align-items-center mb-4">
        <p class="text-secondary text-justify text-black text-xs" style="text-align: justify;">
          Dear Esteemed Members and Associates, It is both an honor and a privilege to serve as the Honorary Secretary of the Sunabeda Local Centre of The Institution of Engineers (India). With a steadfast commitment to excellence, collaboration, and community service, I am dedicated to advancing our shared goals within the field of engineering. Together, let us strive to foster an environment of innovation, knowledge exchange, and professional growth. I extend a warm invitation to all members to actively participate in our center’s activities, contribute your insights, and be an integral part of our collective journey towards success.
I eagerly anticipate the opportunity to work alongside each of you, as we navigate new horizons and make meaningful contributions to our profession and society.

        </p>
      </div>

    </div>
  </div>
</section>


<!--ENd of message from Chairman and Honorary Secretary-->


<!-- <section class="hero d-flex align-items-center text-center text-white">
  <div class="container py-5">
    <h1 class="display-4 fw-bold">Institution of Engineers - Sunabeda</h1>
    <p class="lead">Empowering Innovation • Engineering Excellence • National Progress</p>
    <h3 class="fst-italic mb-4">Welcome to the official portal of IEI - Sunabeda</h3>
  </div>
</section> -->
<!-- Event Galleries Carousel -->
<!-- Event Galleries Carousel -->
<section class="event-gallery py-5 border-bottom">
  <div class="container">
    <h3 class="text-black text-center">Event Galleries of IEI - Sunabeda</h3>
    
    <!-- Carousel -->
    <div id="eventCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- First Slide: Images -->
        <div class="carousel-item active">
          <div class="row g-3">
            <div class="col-3">
              <img src="Image/1.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 1">
            </div>
            <div class="col-3">
              <img src="Image/2.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 2">
            </div>
            <div class="col-3">
              <img src="Image/3.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 3">
            </div>
            <div class="col-3">
              <img src="Image/4.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 4">
            </div>
          </div>
        </div>
        
        <!-- Subsequent Slides: Images -->
        <div class="carousel-item">
          <div class="row g-3">
            <div class="col-3">
              <img src="Image/5.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 5">
            </div>
            <div class="col-3">
              <img src="Image/6.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 6">
            </div>
            <div class="col-3">
              <img src="Image/1.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 7">
            </div>
            <div class="col-3">
              <img src="Image/3.jpeg" class="d-block w-100 img-fluid uniform-img" alt="Event Image 8">
            </div>
          </div>
        </div>

        <!-- Add more slides as necessary... -->
      </div>

      <!-- Carousel Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      
      <!-- Carousel Indicators (Dots) -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <!-- Add more dots as necessary -->
      </div>
    </div>
  </div>
</section>
<!-- News & Events Section -->
<section class="container my-5">
  <h3 class="text-center mb-4">News & Events of IEI</h3>
  <div class="marquee-container">
    <marquee behavior="scroll" direction="up" scrollamount="3" height="300" 
    style="border: 2px solid #ccc; border-radius: 10px; padding: 10px; background-color: #f9f9f9;">
      <div class="news-item mb-4">
        <div class="d-flex align-items-center">
          <img src="https://ieiodisha.org/wp-content/uploads/2024/07/pdf-enrgy.png" alt="Seminar Image" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 15px;">
          <div>
            <h6 class="font-weight-bold mb-1"><a href="https://ieiodisha.org/all-india-seminar-on-alternative-energy-systems-under-the-aegis-of-its-mechanical-engineering-division-on-the-5th-of-july-2024-at-odisha-state-centre-the-institution-of-engineers-in/" target="_blank" style="text-decoration: none; color: #007bff;">All India Seminar on "Alternative Energy Systems" - July 5, 2024</a></h6>
            <small class="text-muted">A seminar on alternative energy systems to be held at Odisha State Centre.</small>
          </div>
        </div>
      </div>

      <div class="news-item mb-4">
        <div class="d-flex align-items-center">
          <img src="https://ieiodisha.org/wp-content/uploads/2024/10/66th-Annual-General-Body-Meeting-fig-scaled.jpg" alt="AGM Image" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 15px;">
          <div>
            <h6 class="font-weight-bold mb-1"><a href="https://ieiodisha.org/66th-annual-general-body-meeting/" target="_blank" style="text-decoration: none; color: #007bff;">66th Annual General Body Meeting</a></h6>
            <small class="text-muted">Join us for the 66th AGM of IEI, discussing future directions.</small>
          </div>
        </div>
      </div>

      <div class="news-item mb-4">
        <div class="d-flex align-items-center">
          <img src="https://via.placeholder.com/60" alt="Event Image" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 15px;">
          <div>
            <h6 class="font-weight-bold mb-1"><a href="https://ieiodisha.org/another-news-event/" target="_blank" style="text-decoration: none; color: #007bff;">Another Upcoming Event</a></h6>
            <small class="text-muted">Details about an exciting upcoming event will be shared soon.</small>
          </div>
        </div>
      </div>

      <div class="news-item mb-4">
        <div class="d-flex align-items-center">
          <img src="https://via.placeholder.com/60" alt="Event Image" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 15px;">
          <div>
            <h6 class="font-weight-bold mb-1"><a href="https://ieiodisha.org/more-news-link/" target="_blank" style="text-decoration: none; color: #007bff;">More News Coming Soon</a></h6>
            <small class="text-muted">Stay tuned for more updates on upcoming events and news.</small>
          </div>
        </div>
      </div>

      <div class="news-item mb-4">
        <div class="d-flex align-items-center">
          <img src="https://via.placeholder.com/60" alt="Event Image" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%; margin-right: 15px;">
          <div>
            <h6 class="font-weight-bold mb-1"><a href="https://ieiodisha.org/some-other-event/" target="_blank" style="text-decoration: none; color: #007bff;">Some Other Event</a></h6>
            <small class="text-muted">Don't miss out on this upcoming event at IEI.</small>
          </div>
        </div>
      </div>
    </marquee>
  </div>
</section>


<style>
  /* Ensure all images in the carousel have the same height and width */
  .uniform-img {
    height: 200px; /* Set desired height */
    object-fit: cover; /* Ensures image doesn't get distorted */
  }

  /* Make carousel buttons visible by adjusting z-index and adding background */
  .carousel-control-prev, .carousel-control-next {
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5); /* Adds a semi-transparent black background */
    border-radius: 50%; /* Makes the buttons circular */
    padding: 10px; /* Adds padding around the buttons */
  }

  /* Styling for carousel indicators (dots) */
  .carousel-indicators button {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for the dots */
  }

  .carousel-indicators .active {
    background-color: #007bff; /* Active dot color */
  }

/* Reduce Navbar Height */
.navbar {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  /* Light Background Color */
  .navbar-light {
    background-color:lightseagreen; /* Light blue color, adjust as needed */
  }

  /* Customize the color of the brand (Logo) */
  .navbar-brand {
    color: #007bff; /* You can adjust the brand color to match your logo */
  }

  /* Top Buttons - Adjust Padding and Text */
  .navbar .btn {
    padding: 8px 20px;
    font-size: 14px;
  }

  /* Navbar links (centering) */
  .navbar-nav .nav-item {
    padding: 5px 10px;
  }

  /* Dropdown Menu Style */
  .mega-menu {
    width: 100%;
    max-width: 800px;
    background-color: #ffffff; /* Light background for dropdown */
  }

  /* Modify Dropdown Hover Color */
  .dropdown-item:hover {
    background-color: #f1f1f1;
  }

  

</style>


<section class="about py-5 bg-light text-center">
  <div class="container">
    <h3 class="text-black mb-3">What We Do</h3>
    <p class="fs-5 text-secondary">
      The Institution of Engineers is dedicated to fostering technological advancement, academic collaboration, and professional excellence across engineering disciplines. We provide a platform for engineers to connect, collaborate, and contribute to India's progress.
    </p>
  </div>
</section>


<!-- Bootstrap CSS -->
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"> -->

<!-- Bootstrap JS and Dependencies -->
<!-- Bootstrap JS (Bundle with Popper) -->
<!-- Bootstrap Bundle JS -->

