"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

/**
 * Client React component that fetches and displays a list of users.
 *
 * Renders a centered loading message while the users query is unresolved. Once data is available,
 * it shows a heading and a pretty-printed JSON block of the fetched users.
 *
 * @returns The component's JSX: either a loading indicator or the users rendered inside a `<pre>` block.
 */
export default function Page() {
  const users = useQuery(api.users.getMany);

  if (users === undefined) {
    return (
      <div className="flex items-center justify-center min-h-svh">
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">This is from the Widget app</h1>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(users, null, 2)}
        </pre>
      </div>
    </div>
  );
}
