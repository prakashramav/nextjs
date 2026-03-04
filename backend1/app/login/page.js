"use client";
import { z } from "zod/mini";
import { useActionState, useState , useEffect} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "../actions/userActions";
import { loginSchema } from "@/lib/userSchema";

export default function LoginPage() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(loginUser, {});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("procodrr@gmail.com");
  const [password, setPassword] = useState("Arjun@1211");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(state.success){
      router.push("/");
      // console.log(state.message);
    }
    else{
      setErrors(state.errors);
    }
  }, [state]);


  const handleFormAction = async () => {

    const{success, data, error} = loginSchema.safeParse({
      name,
      email,
      password
    })
    // console.log(result);

    if(!success){
      return setErrors(z.flattenError(error).fieldErrors)
    }
    setErrors({});
    formAction(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Todo App
          </h1>
        </header>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form action={handleFormAction} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-xs text-red-500 -mb-2">{errors?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs text-red-500 -mb-2">{errors?.password}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-medium hover:opacity-90"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-red-600 dark:text-red-400">{error}</p>
      </div>
    </div>
  );
}