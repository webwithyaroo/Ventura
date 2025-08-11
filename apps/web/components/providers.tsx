"use client";
import * as React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

/**
 * Wraps its children with the ConvexProvider to supply the Convex client via React context.
 *
 * Use this component at the top level of the component tree to make the `convex` client
 * available to descendant components that use Convex hooks or utilities.
 *
 * @param children - React nodes to be rendered inside the ConvexProvider.
 * @returns A React element that provides the Convex client to its children.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
