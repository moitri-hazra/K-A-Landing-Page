import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-medium uppercase">Product</span>
            <span>Use Cases</span>
            <span>For Business</span>
            <span>Resources</span>
            <span>Pricing</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium uppercase">Downloads</span>
            <span>Desktop App</span>
            <span>Chrome Extension</span>
            <span>Safari Extension</span>
            <span>iOS App</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium uppercase">Resources</span>
            <span>Blog</span>
            <span>Help & Support</span>
            <span>Community</span>
            <span>Status</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium uppercase">Company</span>
            <span>About Us</span>
            <span>Careers</span>
            <span>Media Kit</span>
            <span>Sitemap</span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div>© 2024, Designed by Moitri Hazra</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
