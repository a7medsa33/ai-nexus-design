import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ProfileForm() {
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@example.com");
  const [dirty, setDirty] = useState(false);

  const handleChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    setDirty(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Profile</h2>
        <p className="text-sm text-muted-foreground">Manage your personal information</p>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="text-lg bg-gradient-to-r from-indigo-500 to-violet-600 text-white">AJ</AvatarFallback>
        </Avatar>
        <Button variant="outline" className="rounded-xl">Change Avatar</Button>
      </div>

      <div className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={name} onChange={handleChange(setName)} className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={handleChange(setEmail)} className="rounded-xl" />
          <p className="text-xs text-muted-foreground">Used for notifications and account recovery</p>
        </div>
        <Button
          disabled={!dirty}
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90 disabled:opacity-50"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
