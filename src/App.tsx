import Layout from "@/components/Layout";
import {
  MantineProvider,
  createEmotionCache,
  ColorScheme,
} from "@mantine/core";
import {
  NotificationsProvider,
  showNotification,
} from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import Spotlight from "@/components/Spotlight";
import { useTheme } from "next-themes";
import { GeistProvider } from "@geist-ui/core";
import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
} from "@fluentui/react-components";
import { Default as Page } from "@/pages/Dashboard";
import { useEffect } from "react";

function App() {
  const myCache = createEmotionCache({ key: "mantine" });
  const { theme } = useTheme();

  useEffect(() => {
    showNotification({
      title: "Welcome",
      message: "You are currently viewing a beta version of Prime Interface",
      autoClose: 15000,
    });
  }, []);

  return (
    <>
      <FluentProvider
        theme={theme === "dark" ? teamsDarkTheme : teamsLightTheme}
      >
        <GeistProvider themeType={theme}>
          <MantineProvider
            emotionCache={myCache}
            theme={{
              colorScheme: theme as ColorScheme,
              primaryColor: "dark",
              colors: {
                // @ts-ignore
                custom: Object.values({
                  "50": "#f9f6f8",
                  "100": "#f4eff2",
                  "200": "#eae0e6",
                  "300": "#dbc6d2",
                  "400": "#c3a3b5",
                  "500": "#ae869b",
                  "600": "#996d82",
                  "700": "#805669",
                  "800": "#6b4958",
                  "900": "#5b404c",
                }),
              },
            }}
          >
            <Spotlight>
              <NotificationsProvider>
                <ModalsProvider>
                  <Layout>
                    <div className="h-[2000px] overflow-hidden">
                      <Page />
                    </div>
                  </Layout>
                </ModalsProvider>
              </NotificationsProvider>
            </Spotlight>
          </MantineProvider>
        </GeistProvider>
      </FluentProvider>
    </>
  );
}

export default App;
