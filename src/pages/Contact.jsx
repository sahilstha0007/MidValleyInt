import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <div className="bg-indigo-50 py-16 text-center rounded-b-3xl relative overflow-hidden">
        <h1 className="text-4xl font-bold">Contact Us</h1>
       
     
      </div>

      {/* Info Cards */}
      

      {/* Contact Form & Map */}
      <div className="grid md:grid-cols-2 gap-10 px-28 py-10 items-start">
        <iframe
          className="w-full h-96 rounded-xl border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.1048702561525!2d144.96236841579653!3d-37.81633474226471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43a0c8df4d%3A0x2a460c53e06a2f0!2sEnvato!5e0!3m2!1sen!2sau!4v1682810802364"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div>
          <h2 className="text-4xl font-bold mb-4 text-indigo-800">Ready To Get Started?</h2>
          <p className="text-sm mb-6">
          Get in touch with us for more inquiries.          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="border p-3 rounded-xl w-full border-gray-500" />
              <input type="email" placeholder="Your Email" className="border p-3 rounded-xl w-full border-gray-500" />
            </div>
            <textarea
              placeholder="Write Message*"
              className="border border-gray-500 p-3 rounded-xl w-full h-32"

            ></textarea>
            <button
              type="submit"
              className="bg-indigo-800 text-white px-6 py-3 rounded-full hover:bg-indigo-900 transition-all"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-28 py-12">
        <div className="bg-indigo-50 text-center p-6 rounded-xl shadow">
          <FaMapMarkerAlt className="text-indigo-800 text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Our Address</h3>
          <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
        </div>
        <div className="bg-indigo-50 text-center p-6 rounded-xl shadow">
          <FaEnvelope className="text-indigo-800 text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Info@Example.Com</h3>
          <p>Email us anytime for any kind of query.</p>
        </div>
        <div className="bg-indigo-50 text-center p-6 rounded-xl shadow">
          <FaPhone className="text-indigo-800 text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Hot: +208-666-0112</h3>
          <p>Call us any kind of support, we will wait for it.</p>
        </div>
      </div>

    </div>
  );
}
