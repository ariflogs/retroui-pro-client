const SignupTwo = () => {
  const handleSubmit = () => {
    // Handle signup
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#FFE600] border-4 border-black px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
            👋 Welcome
          </div>
          <h1 className="text-4xl font-black mb-2">Create Account</h1>
          <p className="text-lg">
            Already have an account?{" "}
            <a
              href="#"
              className="font-bold border-b-2 border-black hover:bg-[#FFE600]"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* Main Form */}
        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Social Login */}
          <div className="p-6 border-b-4 border-black">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border-4 border-black p-3 font-bold hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#FFE600] transition-all">
                <span>G</span>
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 border-4 border-black p-3 font-bold hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#FFE600] transition-all">
                <span>G</span>
                <span>GitHub</span>
              </button>
            </div>
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 border-2 border-black"></div>
              <span className="text-sm font-bold">OR</span>
              <div className="flex-1 border-2 border-black"></div>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="font-bold">Full Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  👤
                </div>
                <input
                  type="text"
                  required
                  className="w-full border-4 border-black p-3 pl-12 font-medium placeholder:text-black/40 focus:outline-none focus:ring-4 ring-[#FFE600]"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="font-bold">Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  📧
                </div>
                <input
                  type="email"
                  required
                  className="w-full border-4 border-black p-3 pl-12 font-medium placeholder:text-black/40 focus:outline-none focus:ring-4 ring-[#FFE600]"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="font-bold">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  🔒
                </div>
                <input
                  type="password"
                  required
                  className="w-full border-4 border-black p-3 pl-12 font-medium placeholder:text-black/40 focus:outline-none focus:ring-4 ring-[#FFE600]"
                  placeholder="Min. 8 characters"
                />
              </div>
              <div className="flex gap-2 text-sm mt-2">
                <div className="w-1/3 h-2 bg-black/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-black"></div>
                </div>
                <span className="font-medium text-black/60">
                  Password strength
                </span>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <div className="relative mt-1">
                <input type="checkbox" className="peer sr-only" required />
                <div className="w-5 h-5 border-2 border-black peer-checked:bg-[#FFE600] transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center text-black scale-0 peer-checked:scale-100 transition-transform">
                  ✓
                </div>
              </div>
              <span className="text-sm">
                I agree to the{" "}
                <a
                  href="#"
                  className="font-bold border-b-2 border-black hover:bg-[#FFE600]"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-bold border-b-2 border-black hover:bg-[#FFE600]"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-bold p-4 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#FFE600] transition-all"
            >
              Create Account →
            </button>
          </form>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>🔒</span>
            <span className="font-medium text-black/60">
              Your data is completely secure with us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupTwo;
