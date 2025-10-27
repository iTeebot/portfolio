# Testing Guide - Premium Redesign

## 🚀 Quick Start

### 1. **Install Dependencies** (if needed)
```bash
npm install
```

### 2. **Set Up Environment Variables**
Create `.env.local` in the root directory:

```bash
# Minimum configuration for testing
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=hello@iteebot.com
```

> **Note**: Without these variables, forms will log submissions to console but won't send emails.

### 3. **Run Development Server**
```bash
npm run dev
```

Visit: http://localhost:3000

---

## 🧪 Testing Checklist

### **Visual Testing:**
- [ ] Hero section loads with clean, minimal design
- [ ] Typography is using Playfair Display (headings) and Inter (body)
- [ ] No purple gradients visible
- [ ] Divisions section has asymmetric layout (2 large, 2 small cards)
- [ ] No bullet points in divisions
- [ ] Dark mode works properly
- [ ] Responsive on mobile/tablet

### **Contact Form Testing:**
1. [ ] Fill out the form with valid data
2. [ ] Submit and check for success message
3. [ ] Try submitting 4 times rapidly (should get rate limited)
4. [ ] Test with invalid email (should show error)
5. [ ] Test with empty fields (should show validation errors)
6. [ ] Check email inbox for message (if Resend is configured)

### **Newsletter Testing:**
1. [ ] Scroll to footer
2. [ ] Enter email in newsletter form
3. [ ] Submit and check for success message
4. [ ] Try subscribing multiple times (should get rate limited)
5. [ ] Check for welcome email (if Resend is configured)

### **Navigation Testing:**
- [ ] Click "About" - should smooth scroll
- [ ] Click "Divisions" - should smooth scroll
- [ ] Click "Contact" - should smooth scroll
- [ ] Mobile menu opens/closes properly
- [ ] Labs division card is clickable
- [ ] Labs link in footer works

---

## 📧 Email Testing

### **Without Email Configured:**
- Forms will work but only log to console
- Check terminal/console for submission data
- Success messages will still appear

### **With Resend (Recommended):**
1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Get API key from dashboard
3. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=onboarding@resend.dev  # or your verified domain
   ```
4. Test forms - you should receive real emails!

---

## 🔒 Security Testing

### **Rate Limiting:**
```bash
# Test contact form rate limit (3 requests per 15 min)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'

# Submit 4 times - 4th should fail with 429 error
```

### **Input Validation:**
```bash
# Test with invalid email
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"invalid","message":"Test"}'

# Should return 400 error
```

---

## 🎨 Visual Inspection

### **Colors to Check:**

**Light Mode:**
- Background should be clean white (`#ffffff`)
- Text should be near-black (`#1a1a1a`)
- No purple gradients
- Subtle blue accent (`#0066cc`) only for interactive elements

**Dark Mode:**
- Background should be near-black (`#0a0a0a`)
- Text should be off-white (`#f5f5f5`)
- Clean, sophisticated look

### **Typography:**
- Headings: **Playfair Display** (elegant serif)
- Body: **Inter** (clean sans-serif)
- Should look professional and readable

---

## 🐛 Troubleshooting

### **Forms Not Submitting:**
1. Check console for errors
2. Verify API routes are running (check `/api/contact` and `/api/newsletter`)
3. Check network tab in browser DevTools

### **Emails Not Sending:**
1. Verify `.env.local` has correct Resend API key
2. Check Resend dashboard for logs
3. Verify "from" email is correct
4. Check terminal for error messages

### **Design Issues:**
1. Clear browser cache
2. Restart dev server
3. Check if fonts loaded (inspect element in DevTools)
4. Verify no old CSS is conflicting

### **Rate Limiting Not Working:**
- Rate limits are in-memory, reset on server restart
- Check that you're testing from same IP address
- Look for rate limit logs in terminal

---

## 📊 Performance Testing

```bash
# Build for production
npm run build

# Run production server
npm start

# Test at http://localhost:3000
```

### **Lighthouse Audit:**
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Expected Scores:** 90+ on all metrics

---

## ✅ Production Checklist

Before deploying:

- [ ] All forms tested and working
- [ ] Environment variables configured in production
- [ ] Resend API key added
- [ ] Domain verified (if using custom domain for email)
- [ ] Rate limiting working
- [ ] Dark mode tested
- [ ] Mobile responsive verified
- [ ] All links working (especially Labs link)
- [ ] Social media links updated
- [ ] Build succeeds without errors
- [ ] Lighthouse scores acceptable

---

## 🎉 Success Indicators

You'll know everything works when:

1. ✅ Website loads with clean, professional design
2. ✅ No purple gradients anywhere
3. ✅ Typography looks elegant (Playfair + Inter)
4. ✅ Contact form submits and you receive email
5. ✅ Newsletter form works and sends welcome email
6. ✅ Rate limiting blocks excessive submissions
7. ✅ Labs division is clickable
8. ✅ Mobile menu works smoothly
9. ✅ Dark mode looks professional
10. ✅ Overall impression: "This is a premium tech consultancy"

---

## 📞 Need Help?

Check these files for more information:
- `ENV-CONFIGURATION.md` - Environment setup details
- `REDESIGN-SUMMARY.md` - Complete list of changes
- `README.md` - General project information

**Common Issues:**
- Forms not sending emails → Check Resend API key
- Rate limiting not working → Check that server hasn't restarted
- Design looks off → Clear cache and restart dev server
- TypeScript errors → Run `npm run build` to see specific errors

