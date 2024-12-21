import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section id='footer' className="text-white pt-10 border-t border-gray-600">
      <div className="container pt-4 w-full mx-auto px-6 md:px-12 lg:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Section */}
          <div className="col-span-2 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              <p className="text-gray-300">
                Jl. Wahid Hasyim No.23, Nologaten, Sleman, Daerah Istimewa Yogyakarta.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                <a
                  href="https://wa.me/6287785369449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  +62 877-8536-9449
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <a
                  href="mailto:pajrikanugraha@gmail.com"
                  className="text-gray-300 hover:underline"
                >
                  pajrikanugraha@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Muh. Fajri Kanugraha Agung. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
