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
  {
    "name": "Er.Premananda Maity",
    "designation": "Chairman",
    "email": "premananda.maity@gmail.com",
    "phone": 9437206531,
    "membership_no": "F-1304484",
    "address": "Chief Manager (OH), HAL   Qtr. No. N-3   HAL Township   Sunabeda-2",
    "division": "Mechanical Engineering",
    "image_url":"/Image/mphoto/1.png"
  },
  {
    "name": "Er.Arabinda Swamy",
    "designation": "Imm.past Chairman",
    "email": "sarabinda@gmail.com",
    "phone": 9337399651,
    "membership_no": "F-1176672",
    "address": "Addl.General Manager (HAL)           Qtr. No. V- 17   HAL Township Sunabeda-2",
    "division": "Aerospace Engineering",
    "image_url":"/Image/mphoto/2.png"
  },
  {
    "name": "Er.Manas Ranjan Subudhi",
    "designation": "Member",
    "email": "manasengghal@gmail.com",
    "phone": 9938213361,
    "membership_no": "M-1707129",
    "address": "Ch. Manager (Shops) ,HAL           Qtr. No. Y - 275                        HAL Township Sunabeda-2",
    "division": "Aerospace Engineering",
    "image_url":"/Image/mphoto/3.png"
  },
  {
    "name": "Er. Sanjaya Kumar Bishoyi",
    "designation": "Honorary Secretary",
    "email": "sanjiathal 2006@gmail.com",
    "phone": 9437834741,
    "membership_no": "F- 1313335",
    "address": "Chief  Manager (Quality) HAL,Koraput Engine Division           Qtr. No. H - 1,                           HAL Township Sunabeda-2",
    "division": "Environmental Engineering",
    "image_url":"/Image/mphoto/4.png"
  },
  {
    "name": "Er. Babrubahan  Sahu",
    "designation": "Imm.Past Hony. Secretary",
    "email": "babru.iaf@gmail.com",
    "phone": 9437372706,
    "membership_no": "F- 1282308",
    "address": "Chief  Manager (Indgn) HAL,Koraput Engine Division           Qtr. No. M- 63,                           HAL Township Sunabeda-2",
    "division": NaN,
    "image_url":"/Image/mphoto/5.png"
  },
  {
    "name": "Er. Sriram Padhi",
    "designation": "Member",
    "email": "sriram.padhi@gmail.com",
    "phone": 9437306747,
    "membership_no": "F - 1287490",
    "address": "    Executive  Engineer (Central University)    Qtr. No. P - 15,   HAL Township sunabeda-2",
    "division": "Civil Engineering",
    "image_url":"/Image/mphoto/6.jpg"
  },
  {
    "name": "Er/Smt.Sharmistha Das",
    "designation": "Member",
    "email": "sdashal07@gmail.com",
    "phone": 9438657898,
    "membership_no": "AM -0961955",
    "address": " Manager (Works)   HAL Koraput Engine Division, Qtr. No. F -35,   HAL Township sunabeda-2",
    "division": "Civil Engineering",
    "image_url":"/Image/mphoto/7.png"
  },
  {
    "name": "Er /Smt.Anjana Nayak",
    "designation": "Member",
    "email": "aujuritik@gamil.com",
    "phone": 9438087716,
    "membership_no": "AM - 1409304",
    "address": " Manager (IT) HAL                     Qtr. No.   Y -123,   HAL Township sunabeda-2",
    "division": "Computer Engineering ",
    "image_url":"/Image/mphoto/8.png"
  },
  {
    "name": "Er. Pradeep Kumar Dash",
    "designation": "Member",
    "email": "pradeep_wrd@yahoo.co.in",
    "phone": 9437373570,
    "membership_no": "F - 1300098",
    "address": "Sr. Manager (Shops) HAL Koraput Engine Division            Qtr. No. N - 36   HAL Township Sunabeda-2",
    "division": "Electrical Engineering",
    "image_url":"/Image/mphoto/9.png"
  },
  {
    "name": "Er. Manoj Kumar Pattanaik",
    "designation": "Member",
    "email": "er_manojpattanaik@yahoo.co.in",
    "phone": 9438448097,
    "membership_no": "AM- 1358343",
    "address": " Manager (Tooling)   HAL Koraput Engine Division             Qtr. No. G - 17,   HAL Township sunabeda-2",
    "division": "Electrical Engineering",
    "image_url":"/Image/mphoto/10.png"
  },
  {
    "name": "Er. Pradeep Kumar Das",
    "designation": "Member",
    "email": "pkdas4591@gmail.com",
    "phone": 9438221345,
    "membership_no": "M- 1535263",
    "address": "Chief  Manager (Maint.) HAL Koraput Engine Division          Qtr. No. H - 17   HAL Township Sunabeda-2",
    "division": "Electronics & Communications",
    "image_url":"/Image/mphoto/11.png"
  },
  {
    "name": "Er.Sanjeeb Kumar Mishra",
    "designation": "Member",
    "email": "sanjeeb_258@rediffmail.com",
    "phone": 9437091335,
    "membership_no": "AM - 1315709",
    "address": "Sr. Manager (Shops) HAL Koraput Engine Division            Qtr. No. P - 4  ,  HAL Township Sunabeda-2",
    "division": "Electronics & Communications",
    "image_url":"/Image/mphoto/12.png"
  },
  {
    "name": "Er.Annada Prasad Sahoo",
    "designation": "Member",
    "email": "annadaprasad33@gmail.com",
    "phone": 7656016689,
    "membership_no": "M- 1710404",
    "address": "Sr. Manager (Methods) HAL,Koraput Engine Division           Qtr. No. M - 16,                         HAL Township Sunabeda-2",
    "division": "Metallurgy Engineering",
    "image_url":"/Image/mphoto/13.png"
  },
  {
    "name": "Er. Bhimasen Mohakud",
    "designation": "Member",
    "email": "mohakud86@gmail.com",
    "phone": 9438135326,
    "membership_no": "AM - 1371900",
    "address": "Manager (Shops)  HAL Koraput Engine Division Qtr. No.    Y -  10,                     HAL Township Sunabeda-2",
    "division": "Chemical Engineering",
    "image_url":"/Image/mphoto/14.png"
  },
  {
    "name": "Er. Sankarsan Bisoyi",
    "designation": "Member",
    "email": "bisoyi7004@gmail.com",
    "phone": 9437907004,
    "membership_no": "AM - 1477148",
    "address": "Ch. Supervisor(insps)HAL Koraput Engine Division    Qtr. No. G- 119, HAL Township Sunabeda-2",
    "division": "Mining Engineering",
    "image_url":"/Image/mphoto/15.png"
  },
  {
    "name": "Er.Tusara Kanta Nath",
    "designation": "Member",
    "email": "master.tushar@gmail.com",
    "phone": 8458061560,
    "membership_no": "M- 1620201",
    "address": "Sr.Manager (Planning) HAL Koraput Engine Division         Qtr. No. Y-268,                          HAL Township Sunabeda-2",
    "division": "Production Engineering",
    "image_url":"/Image/mphoto/16.png"
  },
  {
    "name": "Er. Sachidananda Swain",
    "designation": "Member",
    "email": "sachidanandaswain@gmail.com",
    "phone": 8895426176,
    "membership_no": "M- 1665884",
    "address": "Sr. Manager (Methods), HAL Koraput Engine Division         Qtr. No. Y - 257                        HAL Township Sunabeda-2",
    "division": "Mechanical Engineering",
    "image_url":"/Image/mphoto/17.png"
  },
  {
    "name": "Er. Gyan Ranjan Sahoo",
    "designation": "Member",
    "email": "gyanraj.ansahoo1981@gmail.com",
    "phone": 9437141094,
    "membership_no": "M- 1466474",
    "address": "Sr. Manager (Shops) HAL Koraput Engine Division             Qtr. No. N -64                           HAL Township Sunabeda-2",
    "division": "Mechanical Engineering",
    "image_url":"/Image/mphoto/18.png"
  }
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