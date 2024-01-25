"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { PaginationButton } from "@/constants/LinkDisbaled";

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
        {/* <PaginationItem>
          <PaginationLink href="/">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;
