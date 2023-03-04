import React from "react";
import { NavLink, Select } from "@mantine/core";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import { useTheme } from "next-themes";

function Sidebar() {
  const { theme } = useTheme();
  return (
    <aside className="fixed bg-white dark:bg-black pt-16 min-h-screen top-0 w-[240px] hidden overflow-y-auto border-r border-r-gray-200 dark:border-r-gray-800 md:block">
      <div className="flex flex-col gap-4">
        <div className="px-2">
          <Select
            value={"Wire Bond"}
            label="Process"
            data={[
              { value: "Wire Bond", label: "Wire Bond" },
              { value: "Die Attach", label: "Die Attach" },
            ]}
            transition={"pop-top-right"}
            transitionDuration={200}
          />
        </div>
        <div>
          <NavLink
            variant="filled"
            label="First parent link"
            icon={<IconGauge size="1rem" stroke={1.5} />}
            childrenOffset={28}
            active
            defaultOpened
          >
            <NavLink variant="filled" label="First child link" />
            <NavLink label="Second child link" />
            <NavLink
              label="Nested parent link"
              childrenOffset={28}
              defaultOpened
            >
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Third child link" />
            </NavLink>
          </NavLink>

          <NavLink
            label="Second parent link"
            icon={<IconFingerprint size="1rem" stroke={1.5} />}
            childrenOffset={28}
            defaultOpened
          >
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Third child link" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
