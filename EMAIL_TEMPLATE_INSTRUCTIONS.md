# Email Template for EmailJS

## How to Use This Template

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Templates**
3. Click on your template (or create a new one)
4. Click on the **HTML** tab in the template editor
5. Copy the entire content from `email-template.html` file
6. Paste it into the HTML editor
7. Make sure your template uses these variable names:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
8. Save your template

## Template Features

✨ **Professional Design**
- Modern gradient header with purple/blue colors
- Clean, organized layout
- Mobile-responsive design
- Professional typography

📧 **Contact Information Card**
- Clearly displays sender's name, email, and subject
- Easy-to-read format with icons

💬 **Message Display**
- Formatted message box with proper spacing
- Preserves line breaks and formatting

🔘 **Quick Reply Button**
- One-click reply button with pre-filled subject line
- Direct mailto link for easy response

📱 **Email Client Compatible**
- Works with Gmail, Outlook, Apple Mail, etc.
- Uses inline styles for maximum compatibility
- Tested across major email clients

## Subject Line

For the email subject, use:
```
New Portfolio Contact: {{subject}}
```

This will create email subjects like:
- "New Portfolio Contact: Freelance Project Inquiry"
- "New Portfolio Contact: Collaboration Opportunity"

## Preview

The email will have:
- **Header**: Purple gradient with "📬 New Portfolio Contact"
- **Body**: Clean white card with all contact details
- **Footer**: Portfolio link and copyright info

## Customization

You can customize the template by modifying:
- **Colors**: Change `#667eea` and `#764ba2` to your brand colors
- **Footer link**: Update the GitHub link to your portfolio URL
- **Text**: Modify any text to match your preferences

## Testing

After setting up:
1. Send a test email from your contact form
2. Check if the formatting looks good in your email client
3. Test the "Reply" button to ensure it works correctly

---

**Note**: Inline styles in email templates are required for proper rendering across different email clients. This is an industry standard practice.