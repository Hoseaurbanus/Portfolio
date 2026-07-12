import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

if (PUBLIC_KEY) {
  emailjs.init({ publicKey: PUBLIC_KEY })
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS not configured. Set VITE_EMAILJS_* env variables.')
      return false
    }

    const now = new Date()
    const timeString = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Hosea Urbanus Audu',
      time: timeString,
    })
    return true
  } catch (error) {
    console.error('Email send failed:', error)
    return false
  }
}
