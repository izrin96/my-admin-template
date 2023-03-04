import React, { useContext } from "react";
import { Kbd, Menu, Badge } from "@mantine/core";
import { Button } from "@/components/ui/button";
import { openSpotlight } from "@mantine/spotlight";
import { IconMoon, IconSun, IconBell } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavigationMenuDemo } from "./HeaderMenu";

function Notification() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="p-1.5 h-auto">
          <IconBell size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Notifications</h4>
            <p className="text-sm">Coming soon</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function Profile() {
  return (
    <Menu
      shadow="md"
      width={100}
      transition="pop-top-left"
      trigger="hover"
      position="bottom-end"
    >
      <Menu.Target>
        <div className="flex gap-2 cursor-pointer">
          <img
            className="rounded-full"
            src={`https://source.boringavatars.com/beam/34/${"Shahredza Izrin Bin Shahbudin"}?colors=e0dc8b,f6aa3d,ed4c57,574435,6cc4b9`}
            alt="Profile Picture"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              Shahredza Izrin Bin Shahbudin
            </span>
            <span className="text-xs">132327 - Admin</span>
          </div>
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-gray-200 bg-white/80 dark:border-b-gray-800 dark:bg-black/80 saturate-150 backdrop-blur">
      <div className="flex h-14 items-center mx-4">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer flex items-center gap-2">
            <span className="font-bold dark:text-gray-300 text-lg">
              Prime Interface
            </span>
            <Badge variant="filled">Beta</Badge>
          </div>
          <NavigationMenuDemo />
          <div
            onClick={() => openSpotlight()}
            className="flex justify-between items-center bg-white/60 hover:bg-gray-50 dark:bg-gray-900/60 dark:hover:bg-black rounded-md border border-gray-300 dark:border-gray-800 px-3 h-[37px] w-[250px] text-sm cursor-pointer"
          >
            <div>Search</div>
            <div className="flex items-center">
              <Kbd mr={5}>⌘</Kbd>/
              <Kbd ml={5} mr={5}>
                ctrl
              </Kbd>{" "}
              + <Kbd ml={5}>K</Kbd>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-4 justify-end">
          <div className="flex gap-2">
            <Notification />
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              className="p-1.5 h-auto"
            >
              {theme === "dark" ? (
                <IconSun size={20} />
              ) : (
                <IconMoon size={20} />
              )}
            </Button>
          </div>
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
