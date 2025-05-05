import { FaApple, FaGooglePlay, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#f3f3f3] text-gray-700 px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-16 overflow-hidden">
      {/* Background circular gradients would go here */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Company Info */}
        <div className="w-full">
          <div className="mb-4">
            <img src="/img/logo.svg" alt="midvalley" className="max-w-full h-auto" />
          </div>
          <p className="pl-0 sm:pl-4 mb-6 text-sm">
            It is a long established fact that from will be distracted by the readable from when looking.
          </p>
          <div className="flex pl-0 sm:pl-4 gap-4 text-gray-600">
            <a href="#" className="hover:text-orange-600 transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              <FaPinterestP size={18} />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="pl-0 sm:pl-8 lg:pl-16 pt-2">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-600 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div className="pl-0 sm:pl-8 lg:pl-16 pt-2">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Utility Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-600 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Project Details</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Our Team</a></li>
          </ul>
        </div>

        {/* Contact Box */}
        <div className="bg-orange-100 p-4 sm:p-6 rounded-xl shadow-md w-full">
          <h4 className="text-orange-600 text-sm font-semibold mb-1">Address</h4>
          <h2 className="text-lg md:text-xl font-bold mb-2">Ready To Get Started?</h2>
          <p className="text-sm mb-4">
          Join us in our journey as we push boundaries and embrace innovation
          </p>
          <div className="flex items-start mb-2 text-sm">
            <FaEnvelope className="mt-1 mr-2 text-orange-600 flex-shrink-0" />
            <div>
              <p>info@midvalley.edu.np</p>
            </div>
          </div>
          <div className="flex items-start text-sm">
            <FaPhone className="mt-1 mr-2 text-orange-600 flex-shrink-0" />
            <div>
              <p>+880 123 654 789 00</p>
              <p>+001 6520 698 00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-200 text-center sm:text-left text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Midvalley. All rights reserved.</p>
      </div>
    </footer>
  );
}