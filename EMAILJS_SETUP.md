# EmailJS Setup Instructions

## Overview
This portfolio uses EmailJS to handle contact form submissions. When someone fills out the contact form, you'll receive an email notification.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
Hello Fedi,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" > "General" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123xyz`)

### 5. Configure Environment Variables
1. Copy `.env.template` to `.env`:
   ```bash
   cp .env.template .env
   ```

2. Edit `.env` and add your actual values:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   ```

### 6. Test the Form
1. Start your development server: `bun run dev`
2. Navigate to the contact section
3. Fill out and submit the test form
4. Check your email for the message

## Template Variables
The following variables are sent from the contact form:
- `from_name` - The sender's name
- `from_email` - The sender's email
- `subject` - The message subject
- `message` - The message content
- `to_name` - Your name (hardcoded as "Fedi Mechergui")

## Troubleshooting
- If emails aren't being received, check your EmailJS service configuration
- Verify that your email provider allows EmailJS to send emails
- Check the browser console for any error messages
- Make sure all environment variables are set correctly

## Security Note
The `.env` file is gitignored to keep your EmailJS credentials secure. Never commit your actual credentials to version control.