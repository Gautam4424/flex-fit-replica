
const Footer = () => (
  <footer className="bg-black text-white mt-12">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="font-black text-2xl uppercase mb-4 tracking-widest">GYMSHARK</div>
        <div className="text-sm font-semibold">Engineered for Performance</div>
        <div className="text-xs mt-4 text-gray-400">© 2025 GYMSHARK. All Rights Reserved.</div>
      </div>
      <div>
        <div className="font-bold mb-3 uppercase">Help</div>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Shipping Info</a></li>
          <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
          <li><a href="#" className="hover:underline">FAQ</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold mb-3 uppercase">About</div>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Our Story</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Affiliates</a></li>
          <li><a href="#" className="hover:underline">Sustainability</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold mb-3 uppercase">Newsletter</div>
        <form className="flex flex-col gap-2">
          <input type="email" placeholder="Email address" className="px-3 py-2 rounded-full text-black focus:outline-none"/>
          <button
            type="submit"
            className="bg-white text-black font-bold px-6 py-2 rounded-full uppercase mt-2 hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
        <div className="flex gap-3 text-xl mt-6">
          {/* Placeholder for social icons */}
          <a href="#" aria-label="Instagram" className="hover:text-primary-foreground">IG</a>
          <a href="#" aria-label="Twitter" className="hover:text-primary-foreground">TW</a>
          <a href="#" aria-label="Facebook" className="hover:text-primary-foreground">FB</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
