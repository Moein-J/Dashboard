import { createContext, useState } from "react";

const TabDefaultValue = {
  tab: "Home",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTab: (state: string) => {},
};

export const TabContext = createContext(TabDefaultValue);

const TabContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [tab, setTab] = useState(TabDefaultValue.tab);
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabContextProvider;
