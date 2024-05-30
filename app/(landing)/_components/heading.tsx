"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Heroes } from "./heroes";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignInButton } from "@clerk/clerk-react";

import Link from "next/link";
export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-xl sm:text-5xl md:text-6xl font-bold">
        Organize your reading. Welcome to <span>BookTrakt</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Become focused, organized, and calm with BookTrakt.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/books">
            Enter BookTrakt
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get BookTrakt Free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
      <Heroes />
    </div>
  );
};