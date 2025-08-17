# Email Integration Plan for Contact Form

## Current Situation
The ContactForm component is currently a static HTML form with no backend functionality. When users click "Mám záujem" (I'm interested), nothing happens - there's no form submission handler.

## Form Data Collection
The form collects:
- Name and surname
- Phone number
- Email address
- Preferred date/time for viewing
- Optional message

## Available Dependencies
The project already includes:
- `react-hook-form` for form handling
- `zod` for validation
- `@hookform/resolvers` for form validation integration

## Implementation Options

### Option 1: EmailJS (Recommended)
- **Pros**: Client-side only, no backend needed, simple setup
- **Cons**: Emails visible in client code, limited customization
- **Setup**: Add EmailJS SDK, configure service template

### Option 2: Netlify Forms (If hosting on Netlify)
- **Pros**: Built-in form handling, spam protection
- **Cons**: Netlify-specific, requires deployment
- **Setup**: Add `netlify` attribute to form

### Option 3: Custom Backend Service
- **Pros**: Full control, secure email credentials
- **Cons**: Requires backend development and hosting
- **Setup**: Create Express.js API with nodemailer

## Recommended Implementation: EmailJS

### EmailJS Account Setup ✅
- **Account Created**: Connected to patrikmko@gmail.com
- **Service ID**: `service_jm4ovrd`
- **Status**: Ready for integration

### Steps:
1. **Install EmailJS**: Add `@emailjs/browser` dependency
2. **Setup EmailJS Account**: ✅ COMPLETED - service_jm4ovrd configured
3. **Create Email Template**: Design template with form fields
4. **Update ContactForm**: 
   - Add React Hook Form integration
   - Add form validation with Zod
   - Add EmailJS submission handler
   - Add loading states and success/error feedback
5. **Add Environment Variables**: Store EmailJS keys securely
6. **Test Email Delivery**: Verify emails reach patrikmko@gmail.com

### Form Fields to Include:
- Name, phone, email (required)
- Preferred viewing date/time
- Message (optional)
- Property interest confirmation

### User Experience:
- Form validation before submission
- Loading spinner during send
- Success message on completion
- Error handling for failed sends
- Form reset after successful submission

## Email Template Design
The email sent to patrikmko@gmail.com will include:
- **Subject**: "Záujem o byt na Miletičovej - [Name]"
- **Body**:
  - Contact details (name, phone, email)
  - Preferred viewing time
  - Personal message
  - Property reference (Miletičova apartment)
  - Timestamp of inquiry