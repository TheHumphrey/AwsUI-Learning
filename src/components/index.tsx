import React, { ReactElement } from "react";

import { Alert, AppLayout, AppLayoutProps } from "@awsui/components-react";

const appCss: React.CSSProperties = {
  width: "100%",
  height: "100%",
  margin: 0,
  backgroundColor: "white",
};

const Component = (): ReactElement => {
  return (
    <>
      <div style={appCss}>
        {/* <Alert /> */}
        <AppLayout content={<Alert>Hello, that's an alert</Alert>} />
      </div>
    </>
  );
};

export default Component;
