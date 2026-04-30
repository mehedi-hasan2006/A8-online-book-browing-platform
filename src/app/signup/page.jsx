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
} from "@heroui/react";
import Image from "next/image";

export default function SignupPage() {
  const onSubmit = (e) => {
    e.preventDefault();
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
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          <TextField isRequired name="photoUrl" type="text">
            <Label>Enter Photo Url</Label>
            <Input placeholder="Enter Photo Url" />
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
            <Input placeholder="john@example.com" />
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
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              {/* <Check /> */}
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
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
    </div>
  );
}
