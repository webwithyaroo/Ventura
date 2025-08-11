"use client";
import * as React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

/**
 * Provides the Convex React client context to its React subtree.
 *
 * @param children - React nodes that will receive the Convex context.
 * @returns A ConvexProvider element wrapping `children`.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
