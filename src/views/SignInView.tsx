import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth";
import InputDesign from "../components/InputDesign";
import ButtonDesign from "../components/ButtonDesign";
import Logo from "../components/Logo";

export default function SignInView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (eventSubmit: React.FormEvent) => {
    eventSubmit.preventDefault();

    const success = login(email, password);
    if (success) {
      navigate("/photos");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <h1 className="heading-auth mb-6">Sign in to your account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputDesign
            label="Username"
            type="email"
            value={email}
            onChange={(eventEmail) => setEmail(eventEmail.target.value)}
            placeholder="testing@testing.com"
            required
          />

          <div className="space-y-1">
            <InputDesign
              label="Password"
              type="password"
              value={password}
              onChange={(eventPassword) =>
                setPassword(eventPassword.target.value)
              }
              placeholder="••••••"
              required
            />
            <div className="text-right text-xs text-[color:var(--color-blue-brand)] cursor-pointer hover:underline">
              Forgot password?
            </div>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <ButtonDesign type="submit">Sign in</ButtonDesign>
        </form>
      </div>
    </div>
  );
}
