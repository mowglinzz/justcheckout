export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to JustCheckout
        </h1>
        <p className="text-center text-lg mb-8">
          Your platform for selling digital products with embedded checkout widgets
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  )
} 