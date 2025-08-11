"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

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
        <h1 className="text-2xl font-bold">This is from the web app</h1>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(users, null, 2)}
        </pre>
      </div>
      <Button onClick={() => addUser()} className="mt-4">
        Add user
      </Button>
    </div>
  );
}
