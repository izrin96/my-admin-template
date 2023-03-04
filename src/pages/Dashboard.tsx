import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";
import * as React from "react";
import { Tabs } from "@geist-ui/core";
import { IconHome, IconChevronRight, IconTicket } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

function DialogFluentTest() {
  <Dialog>
    <DialogTrigger disableButtonEnhancement>
      <Button>Open dialog</Button>
    </DialogTrigger>
    <DialogSurface>
      <DialogBody>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          exercitationem cumque repellendus eaque est dolor eius expedita nulla
          ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in
          natus iure cumque eaque?
        </DialogContent>
        <DialogActions>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="secondary">Close</Button>
          </DialogTrigger>
          <Button appearance="primary">Do Something</Button>
        </DialogActions>
      </DialogBody>
    </DialogSurface>
  </Dialog>;
}

function Breadcrumb() {
  return (
    <ol
      role="list"
      className="flex items-center gap-1 text-sm p-2 border-b bg-white dark:bg-black dark:border-b-gray-800"
    >
      <li>
        <a href="#" className="flex items-center gap-2">
          <IconHome size={16} />
          Home
        </a>
      </li>

      <li>
        <IconChevronRight size={16} />
      </li>

      <li>
        <a href="#" className="">
          Dashboard
        </a>
      </li>

      <li>
        <IconChevronRight size={16} />
      </li>

      <li>
        <a href="#" className="">
          My Dashboard
        </a>
      </li>
    </ol>
  );
}

function DashboardTable() {
  return (
    <Tabs initialValue="1" hideBorder hideDivider>
      <div className="mx-2">
        <Tabs.Item label="All Ticket" value="1">
          <Card>All ticket table here</Card>
        </Tabs.Item>
        <Tabs.Item label="Hard Down Ticket" value="2">
          <Card>All hard down ticket table here</Card>
        </Tabs.Item>
        <Tabs.Item label="i-CCS Help Ticket" value="3">
          <Card>All i-ccs help ticket table here</Card>
        </Tabs.Item>
        <Tabs.Item label="Scheduled Ticket" value="4">
          <Card>All scheduled ticket table here</Card>
        </Tabs.Item>
        <Tabs.Item label="i-PM Ticket" value="5">
          <Card>All i-pm ticket table here</Card>
        </Tabs.Item>
      </div>
    </Tabs>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-black p-4 rounded-md shadow-lg shadow-gray-200 dark:shadow-gray-900/50 border dark:border-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
}

function Stat() {
  return (
    <div className="p-2 grid grid-cols-4 gap-2">
      {new Array(4).fill(null).map((a, i) => (
        <Card key={i}>
          <div className="flex">
            <div className="grow">
              <div className="text-xl font-semibold">Lorem Ipsum</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Lorem Ipsum is dummy text
              </div>
              <div className="font-extrabold text-5xl mt-4">
                {(Math.random() * 100).toFixed(0)}
              </div>
            </div>
            <div className="items-center flex">
              <IconTicket
                size={80}
                stroke={1}
                className={cn(
                  "bg-gradient-to-r text-white rounded-full p-3 rotate-45",
                  i === 0 ? "from-[#e0dc8b] to-[#f6aa3d]" : "",
                  i === 1 ? "from-[#f6aa3d] to-[#ed4c57]" : "",
                  i === 2 ? "from-[#ed4c57] to-[#a15d78]" : "",
                  i === 3 ? "from-[#a15d78] to-[#6cc4b9]" : ""
                )}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export const Default = () => {
  return (
    <>
      <Breadcrumb />

      <div className="flex px-4 items-center bg-white dark:bg-black border-b dark:border-gray-800 h-24">
        <span className="font-semibold text-lg">My Dashboard</span>
      </div>

      <Stat />

      <DashboardTable />
    </>
  );
};
