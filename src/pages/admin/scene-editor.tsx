
import { Scene } from "scenejs";
import { Timeline } from "react-scenejs-editor";
import { Editor } from "scenejs-editor";
import { ref } from "react-scenejs-editor";

function SceneEditor() {
    const scene: Scene = new Scene();
    const timeline!: Timeline;
    const editor!: Editor

    // load an empty scene
    scene.load({});
    editor.update(true);

    return <div>
        <Editor ref={ref(this, "editor")}
                scene={scene} />
    </div>
}

export default SceneEditor;