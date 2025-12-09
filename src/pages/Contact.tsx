const Contact = () => {

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-dark via-dark-lighter to-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Let's discuss how we can support your infrastructure needs
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="bg-white p-12 border border-gray-200">
              <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                SEND US A MESSAGE
              </div>
              <h2 className="text-3xl font-bold text-dark mb-8">
                Contact Form
              </h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
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
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="text-center text-gray-600">
                  Please email us directly at <span className="font-semibold">info@eisencore.com</span>
                </div>
              </form>
            </div>

            <div className="space-y-8">
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
                    <p className="text-lg text-gray-600">
                      info@eisencore.com
                    </p>
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
