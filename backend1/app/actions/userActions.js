"use server";

import { loginSchema, registerSchema } from "@/lib/userSchema";
import {success, z} from "zod/v4";
import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import Session from "@/models/sessionModel";
import { getUserSessionId, signCookie } from "@/lib/auth";
import { cookies } from "next/headers";

export async function registerUser(_,formData) {
    const {success, data, error} = registerSchema.safeParse(formData)
    
    if(!success){
      return { success: false , error: z.flattenError(error).fieldErrors };
    }
      
    await connectDB();
    try {
      const { name, email, password } = data;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      return {success: true, message: "User registered successfully"};
    } catch (err) {
      console.log(err);
      if (err.code === 11000) {
        return {errors:{
          email : "Email already exists"
        }};
      } else {
        return {errors:{
          name : "Something went wrong.",
        }};
      }
    }
    
} 

export async function loginUser(_,formData) {
    const {success, data, error} = loginSchema.safeParse(formData)
    if(!success){
      return { success: false , error: z.flattenError(error).fieldErrors };
    }
    await connectDB();
    const cookieStore = await cookies();
    
    try {
      const {email, password} = data;
      const user = await User.findOne({ email });
    if (!user) {
      return {
        errors:{
          email : "Invalid Credentials!"
        }
      }
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        errors:{
          password : "Invalid Credentials!"
        }
      }
    }

    const session = await Session.create({ userId: user._id });
    cookieStore.set("sid", signCookie(session.id), {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

    return {
      success: true,
      message: "User logged in successfully",
    };
    } catch (err) {
      return{
        errors:{
          email : "Something went wrong."
        }
      }
    }
}   

export async function logoutUser() {
  const cookieStore = await cookies();
  const sessionId = await getUserSessionId();
  await Session.findByIdAndDelete(sessionId);
  cookieStore.delete("sid");
  return {
    success: true,
    message: "User logged out successfully",
  }
}