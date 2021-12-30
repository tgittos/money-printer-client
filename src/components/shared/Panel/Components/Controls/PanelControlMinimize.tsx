import React from "react";
import IconButton from "../../../../atoms/Button/IconButton";
import {VscChromeMinimize} from "react-icons/all";

class PanelControlMinimize extends React.Component<any, any> {
    render() {
        return <IconButton icon={VscChromeMinimize} />;
    }
}

export default PanelControlMinimize;
