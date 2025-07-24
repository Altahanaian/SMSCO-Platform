export default function PostJobEn() {
  return (
    <div>
      
<div class="container py-5">
<h3 class="text-center mb-4">Post a New Job</h3>
<form>
<div class="mb-3">
<label class="form-label">Job Title</label>
<input class="form-control" placeholder="e.g., Digital Marketing Manager" type="text"/>
</div>
<div class="mb-3">
<label class="form-label">Job Type</label>
<select class="form-select">
<option>Full Time</option>
<option>Part Time</option>
<option>Remote</option>
</select>
</div>
<div class="mb-3">
<label class="form-label">Location</label>
<input class="form-control" placeholder="Riyadh, Jeddah..." type="text"/>
</div>
<div class="mb-3">
<label class="form-label">Salary (optional)</label>
<input class="form-control" placeholder="e.g., 8000 SAR" type="text"/>
</div>
<div class="mb-3">
<label class="form-label">Job Description</label>
<textarea class="form-control" placeholder="Enter job responsibilities and details..." rows="5"></textarea>
</div>
<button class="btn btn-primary w-100" type="submit">Post Job</button>
</form>
</div>

    </div>
  );
}
