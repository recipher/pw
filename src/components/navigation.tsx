"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/astro/components";

const navigation = [
  { name: "Wargaming", href: "/games/wargames" },
  { name: "Role Playing", href: "/games/rpg" },
  { name: "Members", href: "/members" },
  { name: "Play", href: "/play" },
  { name: "Discord", icon: "discord", href: "https://discord.gg/7kq4JxcYy" },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://instagram.com/peebleswargaming",
  },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md/6 font-normal text-gray-900 pt-1.5"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/join"
              className="rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Peebles Wargaming</span>
          <ShieldCheckIcon className="h-8 w-auto" />
        </a>
        {/*<div className="flex flex-1 justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Sign In <span aria-hidden="true">&rarr;</span>
              </a>
            </div>*/}
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Peebles Wargaming</span>
              <ShieldCheckIcon className="h-8 w-auto" />
            </a>
            {/*<div className="flex flex-1 justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Sign In <span aria-hidden="true">&rarr;</span>
              </a>
            </div>*/}
          </div>
          <div className="mt-6 space-y-2">
            <a
              href="/join"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join
            </a>
            <div className="mt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-thin text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
