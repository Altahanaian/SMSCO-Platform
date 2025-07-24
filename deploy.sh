#!/bin/bash

echo "📦 بدء عملية نشر SMSCO..."

# التحقق من وجود تغييرات
if git diff-index --quiet HEAD --; then
  echo "✅ لا توجد تغييرات لرفعها."
  exit 0
fi

# إضافة جميع الملفات
git add .

# إعداد رسالة التحديث بشكل احترافي
echo "📝 أدخل رسالة التحديث (مثل: fix: تحسين _document.js أو feat: إضافة ContactForm):"
read commitMessage

# تنفيذ عملية commit
git commit -m "$commitMessage"

# دفع التحديثات إلى GitHub
git push origin main

echo "🚀 تم دفع التحديثات إلى GitHub بنجاح!"
