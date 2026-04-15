"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Discord, Instagram } from "./icons";
import { UserButton, SignInButton } from "@clerk/astro/components";

const navigation = [
  { name: "Wargaming", href: "/games/wargames" },
  { name: "Role Playing", href: "/games/rpg" },
  { name: "Members", href: "/members" },
  { name: "Events", href: "/events" },
  { name: "Play", href: "/play" },
  { name: "Discord", icon: "Discord", href: "https://discord.gg/7kq4JxcYy" },
  {
    name: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/peebleswargaming",
  },
];

const Icons = { Instagram, Discord };

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Peebles Wargaming</span>
            <img
              alt="Peebles Wargaming"
              src="/favicon.png"
              className="mx-auto size-8"
            />
            {/*<ShieldCheckIcon className="h-8 w-auto" />*/}
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const Icon = item.icon === undefined ? null : Icons[item.icon];
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-md/6 font-normal text-gray-900"
              >
                {Icon === null ? (
                  <div className="pt-1">{item.name}</div>
                ) : (
                  <Icon />
                )}
              </a>
            );
          })}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {/*<a
              href="#"
              className="hidden text-sm/6 font-semibold text-gray-900 lg:block"
            >
              Log in
            </a>*/}
          <a
            href="/join"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Peebles Wargaming</span>
              <ShieldCheckIcon className="h-8 w-auto" />
            </a>
            <a
              href="/join"
              className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
            >
              Join
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const Icon =
                    item.icon === undefined ? null : Icons[item.icon];
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-normal text-gray-900"
                    >
                      {Icon === null ? (
                        <div className="pl-1">{item.name}</div>
                      ) : (
                        <Icon />
                      )}
                    </a>
                  );
                })}
              </div>
              {/*<div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Sign In
                  </a>
                </div>*/}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
