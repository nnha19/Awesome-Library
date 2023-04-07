import { Container } from "@mui/material";

import Appbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Appbar />
      <Container maxWidth={false}>{children}</Container>
    </>
  );
};

export default Layout;
