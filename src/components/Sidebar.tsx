import React from "react";
import { NavLink, Select } from "@mantine/core";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { RemoveScroll } from "react-remove-scroll";

function Sidebar({ opened }: { opened: boolean }) {
  const [isMobileLayout, setIsMobileLayout] = React.useState(false);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 768px)");

    const handleChange = () => setIsMobileLayout(!mediaQueryList.matches);
    handleChange();

    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  return (
    <RemoveScroll enabled={isMobileLayout && opened}>
      <aside
        className={cn(
          "fixed bg-white dark:bg-black pt-14 min-h-screen z-30 top-0 w-full md:w-[240px] border-r border-r-gray-200 dark:border-r-gray-800 md:block",
          opened ? "" : "hidden"
        )}
      >
        <div className="flex flex-col pt-2">
          <div className="px-2 h-[4.5rem]">
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
          <div className="overflow-auto h-[calc(100vh-8.5rem)] pb-28 md:pb-0">
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
            >
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
              <NavLink label="Third child link" />
            </NavLink>
          </div>
        </div>
      </aside>
    </RemoveScroll>
  );
}

export default Sidebar;
