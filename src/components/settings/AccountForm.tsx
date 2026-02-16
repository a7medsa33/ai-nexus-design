import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function AccountForm() {
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const { deleteAccount } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!confirm("Are you sure? This action cannot be undone.")) return;
    try {
      await deleteAccount();
      toast({ title: "Account deleted" });
      navigate("/login");
    } catch {
      toast({ title: "Failed to delete account", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Account</h2>
        <p className="text-sm text-muted-foreground">Manage your account security</p>
      </div>

      <div className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input id="current-password" type="password" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} className="rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} className="rounded-xl" />
          <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
        </div>
        <Button disabled={!currentPw || !newPw} className="rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 disabled:opacity-50">
          Update Password
        </Button>
      </div>

      <div className="border-t border-border pt-6 mt-8">
        <h3 className="text-lg font-semibold text-destructive mb-2">Danger Zone</h3>
        <p className="text-sm text-muted-foreground mb-4">Once you delete your account, there is no going back.</p>
        <Button variant="destructive" className="rounded-xl" onClick={handleDelete}>Delete Account</Button>
      </div>
    </div>
  );
}
