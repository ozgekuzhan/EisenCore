# EmailJS Setup Guide

Contact form uses EmailJS to send emails to info@eisencore.com.

## Setup Steps:

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

### 2. Add Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow instructions to connect your email
- Note down the **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent via EisenCore website contact form.
```

- Set the "To Email" field to: `info@eisencore.com`
- Save the template and note down the **Template ID**

### 4. Get Public Key
- Go to "Account" in EmailJS dashboard
- Find your **Public Key**

### 5. Update .env File
- Copy `.env.example` to `.env`
- Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Restart Dev Server
```bash
npm run dev
```

## Testing

1. Fill out the contact form
2. Click "Send Message"
3. Confirm the dialog
4. Check info@eisencore.com for the email

## Troubleshooting

- Make sure all environment variables are set correctly
- Check EmailJS dashboard for email quota (free plan: 200 emails/month)
- Verify the email service is properly connected
- Check browser console for errors
