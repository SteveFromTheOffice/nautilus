import {FC} from "react";

import style from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return <div className={style.layout}>{children}</div>;
};

export default Layout;
