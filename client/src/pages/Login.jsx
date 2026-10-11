import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Mail,
  GraduationCap,
  BookOpen,
  Shield,
  Store,
  Bike,
  ArrowRight,
  ShieldCheck,
  Headset,
  Zap,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const BrandMark = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xl shadow-sm">
      R
    </div>
    <div className="flex flex-col">
      <span className="font-display font-bold text-xl text-ink leading-none">
        RMS
      </span>
      <span className="text-[10px] text-muted font-bold tracking-widest mt-0.5">
        HIGH SCHOOL
      </span>
    </div>
  </Link>
);

const roles = [
  {
    id: "student",
    label: "Student",
    icon: GraduationCap,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    desc: "Access your learning resources and performance",
  },
  {
    id: "teacher",
    label: "Teacher",
    icon: BookOpen,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    desc: "Manage classes, students and assignments",
  },
  {
    id: "admin",
    label: "Admin",
    icon: Shield,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    desc: "Manage school operations, data and content",
  },
  {
    id: "vendor",
    label: "Vendor",
    icon: Store,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    desc: "Manage store, orders and dashboard",
  },
  {
    id: "rider",
    label: "Rider",
    icon: Bike,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
    desc: "View delivery routes and earnings",
  },
];

export default function Login() {
  const [view, setView] = useState("login"); // 'login' | 'role'
  const [activeRole, setActiveRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (activeRole === "admin") {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (data.success) {
          localStorage.setItem("adminToken", data.token);
          navigate("/admin");
        } else {
          setError(data.message || "Login failed");
        }
      } catch (err) {
        setError("Server connection error");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Only Admin login is implemented currently");
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-surface overflow-hidden">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden bg-brand">
        {/* Abstract Gradient Background representing school photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#1e4a7d] to-[#122e4d]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

        <div className="relative z-10 p-12 xl:p-20 flex flex-col h-full justify-between w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white font-display font-bold text-3xl mb-1">
              Ravi Mahato Smarak High School
            </h2>
            <p className="text-brand-soft/80 text-lg">
              Mahuda, Dhanbad, Jharkhand
            </p>
          </motion.div>

          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="font-['Dancing_Script',_cursive] text-accent text-4xl md:text-5xl mb-6 transform -rotate-2">
                Education Builds Better Tomorrow
              </div>
              <h1 className="text-4xl xl:text-6xl font-display font-bold text-white leading-tight mb-6">
                {view === "login" ? "Welcome Back!" : "Start Your Journey."}
              </h1>
              <p className="text-brand-soft/90 text-lg xl:text-xl leading-relaxed mb-12">
                Sign in to access your dashboard and manage your learning
                journey with our integrated educational platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: ShieldCheck, title: "Secure Access" },
                { icon: Headset, title: "24/7 Support" },
                { icon: Zap, title: "Better Experience" },
                { icon: CheckCircle2, title: "Regular Updates" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/5">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-between text-brand-soft/60 text-sm mt-12"
          >
            <p>&copy; {new Date().getFullYear()} RMS High School.</p>
            {view === "role" ? (
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full text-white backdrop-blur-sm transition-colors border border-white/20 font-medium">
                <Globe className="w-4 h-4" />
                <span>Login with Google</span>
              </button>
            ) : (
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center relative overflow-y-auto bg-white shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.1)] z-20">
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={() => setView(view === "login" ? "role" : "login")}
            className="text-sm font-medium text-brand hover:text-brand/80 transition-colors bg-brand-soft px-4 py-2 rounded-full"
          >
            {view === "login" ? "Change Role" : "Back to Login"}
          </button>
        </div>

        <div className="p-8 md:p-12 max-w-[480px] w-full mx-auto min-h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {view === "login" ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="mb-8">
                  <div className="mb-10 lg:hidden">
                    <BrandMark />
                  </div>
                  <div className="hidden lg:block mb-8">
                    <BrandMark />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-ink mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-muted">
                    Login to your account to continue
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {roles.slice(0, 3).map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setActiveRole(r.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeRole === r.id
                          ? "bg-brand text-white shadow-md"
                          : "bg-brand-soft text-muted hover:bg-brand-soft/80"
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                  <button
                    onClick={() => setView("role")}
                    className="px-4 py-2 rounded-full text-sm font-medium text-brand hover:bg-brand-soft transition-all duration-200"
                  >
                    More Roles...
                  </button>
                </div>

                <form className="space-y-5" onSubmit={handleLogin}>
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">
                      Username / Roll No / Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-muted" />
                      </div>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full pl-11 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand bg-surface text-ink transition-colors outline-none"
                        placeholder="Enter your credentials"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-muted" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-11 pr-11 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand focus:border-brand bg-surface text-ink transition-colors outline-none"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted hover:text-ink transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand"
                      />
                      <span className="text-sm text-muted">Remember me</span>
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-brand hover:text-brand/80"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-brand text-white py-3.5 px-4 rounded-xl font-medium hover:bg-brand/90 transition-all duration-200 shadow-lg shadow-brand/20 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Logging in..." : "Login"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 flex items-center text-sm text-muted before:flex-1 before:border-t before:border-gray-200 before:mr-4 after:flex-1 after:border-t after:border-gray-200 after:ml-4">
                  Or
                </div>

                <button className="mt-6 w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-ink py-3.5 px-4 rounded-xl font-medium hover:bg-surface transition-colors shadow-sm">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Login with Google
                </button>

                <p className="mt-8 text-center text-sm text-muted">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-brand hover:underline"
                  >
                    Register Here
                  </a>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="role"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full py-4"
              >
                <div className="mb-6 lg:hidden">
                  <BrandMark />
                </div>
                <div className="hidden lg:block mb-6">
                  <BrandMark />
                </div>
                <h2 className="text-3xl font-display font-bold text-ink mb-2">
                  Select Your Role
                </h2>
                <p className="text-muted mb-8">
                  Choose your role to continue to the platform
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {roles.map((r, idx) => {
                    const Icon = r.icon;
                    return (
                      <motion.button
                        key={r.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => {
                          setActiveRole(r.id);
                          setView("login");
                        }}
                        className={`w-full text-left p-4 rounded-2xl border ${r.border} bg-white hover:shadow-md transition-all duration-300 group flex items-center gap-4`}
                      >
                        <div
                          className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${r.bg} ${r.color} group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-ink">{r.label}</h3>
                          <p className="text-xs text-muted mt-0.5 pr-2">
                            {r.desc}
                          </p>
                        </div>
                        <div
                          className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${r.bg} ${r.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-xs text-muted font-medium px-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand" /> Secure Access
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Headset className="w-4 h-4 text-brand" /> 24/7 Support
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand" /> Easy to Use
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
