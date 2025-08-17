# EmailJS Template Setup Guide

## Template Configuration

Create a new email template in your EmailJS dashboard with these settings:

### Template Name
`apartment_inquiry_template`

### Template Subject
```
Záujem o byt na Miletičovej - {{from_name}}
```

### Template Content (HTML)
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
    Nová správa zo stránky bytu na Miletičovej
  </h2>
  
  <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #374151;">Kontaktné údaje</h3>
    <p><strong>Meno:</strong> {{from_name}}</p>
    <p><strong>Telefón:</strong> {{phone}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
  </div>
  
  <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #92400e;">Preferovaný termín obhliadky</h3>
    <p><strong>Dátum:</strong> {{preferred_date}}</p>
    <p><strong>Čas:</strong> {{preferred_time}}</p>
  </div>
  
  <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #065f46;">Nehnuteľnosť</h3>
    <p><strong>Property:</strong> {{property}}</p>
  </div>
  
  {{#if message}}
  <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #0c4a6e;">Správa od záujemcu</h3>
    <p style="white-space: pre-wrap;">{{message}}</p>
  </div>
  {{/if}}
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
    <p>Táto správa bola odoslaná zo stránky bytu na Miletičovej dňa {{sent_date}}.</p>
    <p>Pre odpoveď použite email: {{from_email}} alebo telefón: {{phone}}</p>
  </div>
</div>
```

## Variable Mapping

The form sends these variables to the template:

| Form Field | Template Variable | Description |
|------------|------------------|-------------|
| Name | `{{from_name}}` | Visitor's full name |
| Email | `{{from_email}}` | Visitor's email address |
| Phone | `{{phone}}` | Visitor's phone number |
| Date | `{{preferred_date}}` | Preferred viewing date |
| Time | `{{preferred_time}}` | Preferred viewing time |
| Message | `{{message}}` | Optional message (conditional) |
| - | `{{property}}` | Property description (hardcoded) |
| - | `{{to_email}}` | Recipient email (patrikmko@gmail.com) |

## EmailJS Settings

### Service Configuration
- **Service Type**: Gmail
- **Service ID**: `service_jm4ovrd` ✅
- **Connected Email**: patrikmko@gmail.com

### Template Settings  
- **Template ID**: Copy this after creating the template
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **To Email**: patrikmko@gmail.com
- **Reply To**: `{{from_email}}`

## Next Steps

1. **Create Template**: 
   - Go to EmailJS dashboard → Email Templates → Create New Template
   - Use the HTML content above
   - Save and copy the Template ID

2. **Update .env file**:
   - Add your Public Key (User ID)
   - Add the Template ID from step 1

3. **Test the form**:
   - Fill out the contact form on your website
   - Check patrikmko@gmail.com for the test email
   - Verify all fields are populated correctly

## Template ID Location
After creating the template, find the Template ID in your EmailJS dashboard and add it to `.env`:
```
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```