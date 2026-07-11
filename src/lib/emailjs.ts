import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    if (SERVICE_ID === 'your_service_id') {
      console.warn('EmailJS not configured. Set VITE_EMAILJS_* env variables.')
      return false
    }

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Hosea Urbanus Audu',
      },
      { publicKey: PUBLIC_KEY }
    )
    return true
  } catch (error) {
    console.error('Email send failed:', error)
    return false
  }
}
