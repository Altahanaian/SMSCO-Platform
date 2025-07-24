export default function PostJobAr() {
  return (
    <div dir="rtl">
      
<div class="container py-5">
<h3 class="text-center mb-4">نشر وظيفة جديدة</h3>
<form>
<div class="mb-3">
<label class="form-label">المسمى الوظيفي</label>
<input class="form-control" placeholder="مثال: مسؤول تسويق رقمي" type="text"/>
</div>
<div class="mb-3">
<label class="form-label">نوع الوظيفة</label>
<select class="form-select">
<option>دوام كامل</option>
<option>دوام جزئي</option>
<option>عن بعد</option>
</select>
</div>
<div class="mb-3">
<label class="form-label">الموقع</label>
<input class="form-control" placeholder="الرياض، جدة..." type="text"/>
</div>
<div class="mb-3">
<label class="form-label">الراتب (اختياري)</label>
<input class="form-control" placeholder="مثال: 8000 ريال" type="text"/>
</div>
<div class="mb-3">
<label class="form-label">الوصف الوظيفي</label>
<textarea class="form-control" placeholder="أدخل تفاصيل الوظيفة والمسؤوليات..." rows="5"></textarea>
</div>
<button class="btn btn-primary w-100" type="submit">نشر الوظيفة</button>
</form>
</div>

    </div>
  );
}
