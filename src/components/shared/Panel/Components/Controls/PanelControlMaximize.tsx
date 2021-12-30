import React from "react";
import IconButton from "../../../../atoms/Button/IconButton";
import { VscChromeMaximize} from "react-icons/all";

class PanelControlMaximize extends React.Component<any, any> {
    render() {
        return <IconButton icon={VscChromeMaximize} />;
    }
}

export default PanelControlMaximize;
