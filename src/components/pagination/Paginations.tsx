"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import { PaginationButton } from "@/constants";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  search?: string;
}

const Paginations: React.FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  search,
}) => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationButton
            href={{
              query: {
                page: Number(page) - 1,
                ...(search ? { search } : {}),
              },
            }}
            disabled={!hasPrevPage}
          >
            &larr; Prev
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            href={{
              query: {
                page: Number(page) + 1,
                ...(search ? { search } : {}),
              },
            }}
            disabled={!hasNextPage}
          >
            Next &rarr;
          </PaginationButton>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;
