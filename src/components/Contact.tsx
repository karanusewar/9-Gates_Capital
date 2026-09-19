import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 2xl:px-12 w-full bg-dark text-light relative overflow-hidden border-t border-light/20"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="mb-20 text-center md:text-left">
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold tracking-wide leading-snug mb-6 uppercase">
            PARTNER WITH US <br className="hidden md:block" /> FOR STRATEGIC GROWTH
          </h2>
          <p className="font-sans text-light/50 uppercase tracking-widest">
            Contact our investment team to explore strategic capital allocation and partnership
            opportunities.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 w-full font-sans">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">First Name</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">Middle Name</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">Last Name</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">Company Name</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-xs uppercase tracking-widest text-light/40">
              Company's Address
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">
              Designation in Company
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">
              Business Contact No.
            </label>
            <input
              type="tel"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">Email Address</label>
            <input
              type="email"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">City</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">State</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">Zone</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">Country</label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-light/40">
              Pin / Zip Code
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
            <label className="text-xs uppercase tracking-widest text-light/40">Inquiry</label>
            <textarea
              rows={3}
              className="bg-transparent border-b border-light/20 pb-2 outline-none focus:border-light transition-colors text-lg resize-none"
            ></textarea>
          </div>

          <div className="pt-8 md:col-span-2 lg:col-span-3 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-6 group text-xl font-display font-bold uppercase tracking-wide"
            >
              <span>Submit Inquiry</span>
              <div className="w-14 h-14 rounded-full border border-light/50 flex items-center justify-center group-hover:bg-light group-hover:text-dark transition-all duration-300">
                <ArrowRight size={24} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
