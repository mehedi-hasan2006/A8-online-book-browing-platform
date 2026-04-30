"use client";

import { Icon } from "@iconify/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/",
      },
      {
        onSuccess: (res) => {
          //redirect to the dashboard or sign in page
          toast.success("Login Successful!");
        },
        onError: (res) => {
          // display the error message
          toast.danger(res.error.message);
        },
      },
    );
    console.log({ data, error });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="mb-5">
        <h1 className="font-bold text-3xl">Login</h1>
      </div>
      <Form
        className="flex w-96 flex-col gap-4 bg-white p-5 shadow-2xl rounded-md"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <div>
            <p className="text-[#2563eb] font-semibold text-[14px] hover:underline cursor-pointer">
              <Link href="/signup"> Register?</Link>
            </p>
          </div>
        </div>
        <div className="text-center text-gray-600 font-semibold">
          <p>OR</p>
        </div>
        <Button className="w-full" variant="tertiary">
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
      </Form>
    </div>
  );
}
