"use client";
import { Button, toast } from "@heroui/react";
import { FaCheck } from "react-icons/fa";

function BookBorrowBtn({ item }) {
  console.log(item);
  const handleBorrow = () => {
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
        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <FaCheck />
        Borrow this Book
      </Button>
    </div>
  );
}

export default BookBorrowBtn;
