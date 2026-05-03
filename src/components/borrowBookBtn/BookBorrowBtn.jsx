"use client";
import { authClient } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { FaCheck } from "react-icons/fa";

function BookBorrowBtn({ item }) {
  const session = authClient.useSession();
  const user = session.data?.user;
  
  const handleBorrow = () => {
    if (!user) {
      toast.danger("Please login to borrow books");
      return;
    }

    if (item.available_quantity > 0) {
      toast.success("Borrow Successful");
    } else {
      toast.danger("Not Available");
    }
  };
  return (
    <div>
      <Button
        onClick={handleBorrow}
        className="flex-1 bg-linear-to-r from-amber-500 to-rose-500 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <FaCheck />
        Borrow this Book
      </Button>
    </div>
  );
}

export default BookBorrowBtn;
