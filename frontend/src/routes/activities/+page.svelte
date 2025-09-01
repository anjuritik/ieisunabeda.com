<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activities Page</title>
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container my-5">
  <h1 class="mb-4">Welcome to the Activities Page</h1>

  <!-- Documents List -->
  <ul class="list-group">
    <li class="list-group-item list-group-item-action" data-file="/Image/docs/1.jfif">Workshop on GST</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc2.pdf">Document 2</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc3.pdf">Document 3</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc4.pdf">Document 4</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc5.pdf">Document 5</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc6.pdf">Document 6</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc7.pdf">Document 7</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc8.pdf">Document 8</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc9.pdf">Document 9</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc10.pdf">Document 10</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc11.pdf">Document 11</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc12.pdf">Document 12</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc13.pdf">Document 13</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc14.pdf">Document 14</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc15.pdf">Document 15</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc16.pdf">Document 16</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc17.pdf">Document 17</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc18.pdf">Document 18</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc19.pdf">Document 19</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc20.pdf">Document 20</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc21.pdf">Document 21</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc22.pdf">Document 22</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc23.pdf">Document 23</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc24.pdf">Document 24</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc25.pdf">Document 25</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc26.pdf">Document 26</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc27.pdf">Document 27</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc28.pdf">Document 28</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc29.pdf">Document 29</li>
    <li class="list-group-item list-group-item-action" data-file="/static/docs/doc30.pdf">Document 30</li>
  </ul>
</div>

<!-- Modal -->
<div class="modal fade" id="docModal" tabindex="-1" aria-labelledby="docModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="docModalLabel">Document</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe id="docFrame" src="" style="width:100%; height:600px;" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</div>

<!-- Bootstrap 5 JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<script>
  // Add click event to all list items
  document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', () => {
      const file = item.getAttribute('data-file');
      const title = item.textContent;
      document.getElementById('docModalLabel').textContent = title;
      document.getElementById('docFrame').src = file;
      new bootstrap.Modal(document.getElementById('docModal')).show();
    });
  });
</script>

</body>
</html>