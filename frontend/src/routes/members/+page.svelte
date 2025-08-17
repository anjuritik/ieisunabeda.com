<!-- <script>
  import { onMount } from "svelte";
  
  let members = [];
  let loading = true;
  let error = null;
  const getApiUrl = () => {
  // In production (Vercel), use Render's API endpoint URL
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;

    if (hostname === 'localhost') {
      // Local development
      return 'http://localhost:5000/api/members'; // or 'http://localhost:5000/api/members' for local dev
    }

    // In Vercel preview/deployment, use your Render backend API URL
    if (hostname !== 'localhost') {
      return 'https://ieisbd.onrender.com/api/members'; // Production URL
    }
  }

  // For other cases (e.g., server-side rendering, fallback)
  return 'http://localhost:5000/api/members'; // Local development fallback
};
  
  onMount(async () => {
    try {
      const apiUrl = getApiUrl();
      console.log('Fetching from:', apiUrl); // Debug log
      
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      // Handle both success response formats
      if (data.success && data.data) {
        members = data.data; // If your API returns { success: true, data: [...] }
      } else if (Array.isArray(data)) {
        members = data; // If your API returns [...] directly
      } else {
        throw new Error('Unexpected response format');
      }
      
      console.log('Fetched members:', members); // Debug log
    } catch (err) {
      console.error('Error fetching members:', err);
      error = err.message;
    } finally {
      loading = false;
    }
  });
</script> -->
<script>
  import { onMount } from "svelte";
  
  // Static members data
  let members = [
    { name: 'Premananda Maity', designation: 'President',email:'johndoe@example.com', phone:'+1234567890'},
    { name: 'Sanjay Bisyoee', designation: 'Secretary',email:'johndoe@example.com', phone:'+1234567890' },
    { name: 'Alex Johnson', designation: 'Secretary',email:'johndoe@example.com', phone:'+1234567890' },
    { name: 'Emily Davis', designation: 'Treasurer',email:'johndoe@example.com', phone:'+1234567890' },
    { name: 'Michael Brown', designation: 'Member',email:'johndoe@example.com', phone:'+1234567890' },
    { name: 'Sarah Wilson', designation: 'Member',email:'johndoe@example.com', phone:'+1234567890' }
  ];
  
  let loading = false;
  let error = null;
  
  // Simulate a small delay to mimic data fetching process
  onMount(async () => {
    try {
      // Simulate loading state
      loading = true;
      setTimeout(() => {
        loading = false;
      }, 1000); // Simulating a 1-second delay

      console.log('Static members:', members); // Debug log
    } catch (err) {
      console.error('Error fetching members:', err);
      error = err.message;
      loading = false;
    }
  });
</script>


<!-- Bootstrap 5 CSS -->
 
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<!-- Member List Section -->
<div class="container mt-4">
  <!-- Section Title -->
  <h2 class="mb-4 text-center text-primary fw-bold">Our Esteemed Members</h2>
  
  <!-- Loading State -->
  {#if loading}
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading members...</p>
    </div>
  {:else if error}
    <!-- Error State -->
    <div class="alert alert-danger text-center" role="alert">
      <h4 class="alert-heading">Error!</h4>
      <p>Failed to load members: {error}</p>
      <button class="btn btn-outline-danger" on:click={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  {:else if members.length === 0}
    <!-- Empty State -->
    <div class="text-center">
      <div class="card border-0">
        <div class="card-body">
          <h5 class="card-title text-muted">No Members Found</h5>
          <p class="card-text">There are currently no members to display.</p>
        </div>
      </div>
    </div>
  {:else}
    <!-- Cards Grid -->
    <div class="row">
      {#each members as member}
        <div class="col-sm-6 col-lg-4 mb-4">
          <div class="card shadow h-100 border-0">
            <!-- Member Image (optional) -->
            {#if member.image_url}
              <img 
                src={member.image_url} 
                class="card-img-top img-fluid rounded-circle mx-auto mt-3" 
                style="width: 120px; height: 120px; object-fit: cover;" 
                alt={member.name}
                on:error={() => {
                  // Handle broken images
                  member.image_url = null;
                }}
              />
            {:else}
              <!-- Default avatar if no image -->
              <div class="mx-auto mt-3 d-flex align-items-center justify-content-center bg-light rounded-circle" 
                   style="width: 120px; height: 120px;">
                <i class="fas fa-user fa-3x text-muted"></i>
              </div>
            {/if}
            
            <div class="card-body text-center">
              <h5 class="card-title text-dark fw-semibold">{member.name}</h5>
              <p class="card-text text-muted">{member.designation || 'Member'}</p>
              
              <!-- Optional: Show additional info if available -->
              {#if member.email}
                <small class="text-muted d-block">
                  <i class="fas fa-envelope"></i> {member.email}
                </small>
              {/if}
              
              {#if member.phone}
                <small class="text-muted d-block">
                  <i class="fas fa-phone"></i> {member.phone}
                </small>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>