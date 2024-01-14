"use client";
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import { Button } from "../ui/button";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Paginations: React.FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="ghost"
            disabled={!hasPrevPage}
            onClick={() => router.push(`/?page=${Number(page) - 1}`)}
          >
            &larr; Prev
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="ghost"
            disabled={!hasNextPage}
            onClick={() => router.push(`/?page=${Number(page) + 1}`)}
          >
            Next &rarr;
          </Button>
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
