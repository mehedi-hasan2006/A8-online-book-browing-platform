"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Label,
  SearchField,
  Spinner,
} from "@heroui/react";
import React, { useState } from "react";

function Search() {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const MIN_LENGTH = 3;
  const isInvalid = value.length > 0 && value.length < MIN_LENGTH;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length < MIN_LENGTH) {
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Search submitted:", { query: value });
      setValue("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <Form className="flex  items-center gap-4" onSubmit={handleSubmit}>
        <SearchField
          isRequired
          isInvalid={isInvalid}
          name="search"
          value={value}
          onChange={setValue}
        >
          <Label>Search products</Label>
          <SearchField.Group className="focus:ring-2 ring-amber-500">
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search products..." />
            <SearchField.ClearButton />
          </SearchField.Group>
          {isInvalid ? (
            <FieldError>
              Search query must be at least {MIN_LENGTH} characters
            </FieldError>
          ) : (
            <Description>
              Enter at least {MIN_LENGTH} characters to search
            </Description>
          )}
        </SearchField>
        <Button
          className="bg-linear-to-r from-amber-500 to-rose-500 text-white"
          isDisabled={value.length < MIN_LENGTH}
          isPending={isSubmitting}
          type="submit"
          variant="primary"
        >
          {isSubmitting ? (
            <>
              <Spinner color="current" size="sm" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
      </Form>
    </div>
  );
}

export default Search;
