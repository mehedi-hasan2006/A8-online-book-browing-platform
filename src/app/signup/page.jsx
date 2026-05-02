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
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email(
      {
        name,
        image,
        email,
        password,
      },
      {
        onSuccess: (res) => {
          //redirect to the dashboard or sign in page
          toast.success("Registration Successful!");
          router.push("/login");
        },
        onError: (res) => {
          // display the error message
          toast.danger(res.error.message);
        },
      },
    );
  };

  // Google Sign In Fucntion
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="flex  justify-center items-center ">
        <h1 className="font-bold text-3xl">Registration</h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Form
          className="flex w-96 flex-col gap-4 bg-white p-5 shadow-2xl rounded-md"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input
              className="focus:ring-2 ring-amber-500"
              name="name"
              placeholder="John Doe"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label>Enter Photo Url</Label>
            <Input
              className="focus:ring-2 ring-amber-500"
              name="image"
              placeholder="Enter Photo Url"
            />
            <FieldError />
          </TextField>

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
            <Input
              className="focus:ring-2 ring-amber-500"
              name="email"
              placeholder="john@example.com"
            />
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
            <Input
              className="focus:ring-2 ring-amber-500"
              name="password"
              placeholder="Enter your password"
            />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              className="bg-linear-to-r from-amber-500 to-rose-500 text-white"
              type="submit"
            >
              Register
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
          <div className="text-center text-gray-600 font-semibold">
            <p>OR</p>
          </div>
          <Button
            className="w-full bg-linear-to-r from-amber-500 to-rose-500 text-white"
            variant="tertiary"
            onClick={handleGoogleSignIn}
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
        </Form>
      </div>
    </div>
  );
}
