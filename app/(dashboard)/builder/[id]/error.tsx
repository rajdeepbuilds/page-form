"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

function ErrorPage({ error }: { error: Error }) {
    useEffect(() => console.error(error), [error]);

  return(
  <div className="flex w-full h-full flex-col items-center justify-center gap-4">
     <h2 className="text-primary text-4xl font-semibold">Something went wrong!</h2>
     <Button>
        <Link href={"/"}>
            Go back to Home
        </Link>
     </Button>
  </div>
  )
}

export default ErrorPage;
