import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../../../components/ui/dialog";
import { useNavigate } from "react-router-dom";

const KeyboardShortcutsPage = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div className="relative">
      {/* Dialog Component from Shadcn */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          onClick={() => {
            setOpen(false);
            navigate("/setting/accessibility_display_and_languages");
          }}
        />
        <DialogContent className="bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            {/* Navigation Shortcuts */}
            <div>
              <h2 className="text-lg font-semibold">Navigation</h2>
              <ul className="space-y-2">
                <li>
                  Next post: <span className="font-mono">J</span>
                </li>
                <li>
                  Previous post: <span className="font-mono">K</span>
                </li>
                <li>
                  Page down: <span className="font-mono">Space</span>
                </li>
                <li>
                  Home: <span className="font-mono">G H</span>
                </li>
                {/* Add more shortcuts */}
              </ul>
            </div>

            {/* Action Shortcuts */}
            <div>
              <h2 className="text-lg font-semibold">Actions</h2>
              <ul className="space-y-2">
                <li>
                  New post: <span className="font-mono">N</span>
                </li>
                <li>
                  Send post: <span className="font-mono">Ctrl + Enter</span>
                </li>
                <li>
                  Like: <span className="font-mono">L</span>
                </li>
                <li>
                  Reply: <span className="font-mono">R</span>
                </li>
                {/* Add more shortcuts */}
              </ul>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => {
              setOpen(false);
              navigate("/setting/accessibility_display_and_languages");
            }}
            className="mt-4 bg-red-500 text-white p-2 rounded-md"
          >
            Close
          </button>
          <button
            className="absolute top-2 right-5 text-gray-400 w-4 h-4 p-3 rounded-md"
            onClick={() => {
              setOpen(false);
              navigate("/setting/accessibility_display_and_languages");
            }}
          >
            X
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KeyboardShortcutsPage;
