import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Show confirmation dialog
    const confirmed = window.confirm(
      `Message will be sent to info@eisencore.com\n\nFrom: ${formData.name}\nEmail: ${formData.email}\n\nDo you want to send this message?`
    )

    if (!confirmed) return

    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'info@eisencore.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        alert('Message sent successfully! We will get back to you soon.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send message. Please try again or contact us directly at info@eisencore.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Let's discuss how we can support your infrastructure needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="bg-white p-12 border border-gray-200">
              <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                SEND US A MESSAGE
              </div>
              <h2 className="text-3xl font-bold text-dark mb-8">
                Contact Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-dark px-8 py-4 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gray-50 p-12 border border-gray-200">
                <div className="inline-block px-4 py-1 bg-secondary/5 text-secondary text-sm font-semibold mb-6">
                  CONTACT INFO
                </div>
                <h2 className="text-3xl font-bold text-dark mb-8">
                  Reach Us
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-dark mb-2">EMAIL</h3>
                    <a href="mailto:info@eisencore.com" className="text-lg text-primary hover:text-primary-dark transition-colors">
                      info@eisencore.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-dark mb-2">ADDRESS</h3>
                    <p className="text-lg text-gray-600">
                      Keizergracht 391A<br />
                      1016EJ Amsterdam<br />
                      The Netherlands
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-dark mb-2">BUSINESS HOURS</h3>
                    <p className="text-lg text-gray-600">
                      Monday - Friday: 9:00 - 18:00<br />
                      24/7 Support Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="border border-gray-200 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.1234567890123!2d4.8816157!3d52.3655157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609e3d1f5f5f5%3A0x1234567890abcdef!2sKeizergracht%20391A%2C%201016%20EJ%20Amsterdam!5e0!3m2!1sen!2snl!4v1234567890123!5m2!1sen!2snl"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EisenCore Location"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
