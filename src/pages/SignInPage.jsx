import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Here you would normally validate user credentials
    navigate("/dashboard"); // Redirect to Dashboard page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 p-4">
      <form onSubmit={handleSignIn} className="bg-white shadow-2xl p-8 rounded-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
