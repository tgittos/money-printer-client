import React from "react";
import IconButton from "../../../../atoms/Button/IconButton";
import { VscChromeClose } from "react-icons/all";

class PanelControlClose extends React.Component<any, any> {
    render() {
        return <IconButton icon={VscChromeClose} />;
    }
}

export default PanelControlClose;