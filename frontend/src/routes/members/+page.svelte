<script>
  import { onMount } from "svelte";
  
  let members = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/members");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      members = await res.json();
      console.log('Fetched members:', members); // Debug log
    } catch (err) {
      console.error('Error fetching members:', err);
      error = err.message;
    } finally {
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