import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">this is from the widget app </h1>
        <Button size="sm">Button</Button>
        <Input placeholder="Input" />
      </div>
    </div>
  );
}
