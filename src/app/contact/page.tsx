export default function ContactForm() {
    return (
      <div className="bg-black/90 min-h-screen flex justify-center items-center px-6">
        <div className="max-w-3xl w-full">
     
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Contact us</h1>
          </div>
  
          <div className="mb-8 text-white">
            <p className=" mb-2">khan@gmail.com</p>
            <p className=" mb-2">(555) 555-5555</p>
            <p className=" mb-4">Karachi</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#333333]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[#333333]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-[#333333]">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
  
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-white mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-white mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#333333] text-white font-medium py-2 rounded-lg hover:bg-[#555555] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  