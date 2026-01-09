import cityhall from "./cityhall.jpg";
import community from "./community.png";

function next() {
  return  (
  <div>
  <div className="py-16 p-16 text-white rounded-tl-[55px] rounded-tr-[55px] " style={{ backgroundColor: "var(--accent)" }}>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold libre">About Crossroads</h2>
          <p className="opacity-90 poppins text-gray-300">
            We are a community of people who care about each other and our town. So, we curated a safe space where you can find all the resources you need to make your life in Suwanee easier.
          </p>
                    <p className="opacity-90 poppins text-gray-300">
            We ensure to maintain quality and integrity of the information we provide. In addition, our values include universal inclusivity, so no one has the chance to feel left out.
          </p>
          <p className="opacity-90 poppins text-gray-300">
            The world cannot be fixed all at once, but we believe that a better world starts with small, local steps towards peace and understanding, and Crossroads Suwanee is just that.
          </p>
        </div>
        <div className="space-y-4">
          <img src={cityhall} alt="Next" className="w-full h-auto rounded-xl shadow-md" />
        </div>
      </div>
    </div>
  </div>
  <div className="py-16 p-16 text-black text-right ">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
        <img src={community} alt="Next" className="w-full h-auto " />
        </div>
        <div className="space-y-4 ">
          
                    <h2 className="text-2xl font-semibold libre">Join our Newsletter</h2>
          <p className="opacity-90 poppins text-gray-600">
            For weekly news, updates, and community events, and more.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="w-full text-left space-y-3">
            <div>
              <label htmlFor="newsletter-email" className="block text-sm  font-medium text-gray-700 poppins">Email</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label htmlFor="newsletter-name" className="sr-only">Name (optional)</label>
                <input
                  id="newsletter-name"
                  type="text"
                  placeholder="Name (optional)"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg px-5 py-2 font-semibold text-white shadow-sm"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 poppins">By subscribing, you agree to receive emails from Crossroads Suwanee. You can unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer className="py-8 text-center text-sm text-gray-500 poppins">
    © 2026 Crossroads Suwanee. All rights reserved.
  </footer>
  </div>
  );
}

export default next;
