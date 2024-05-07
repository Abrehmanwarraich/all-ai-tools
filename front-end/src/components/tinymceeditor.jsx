
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Tinymceeditor = () => {

    const [content, setContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };
  console.log(content);
  
  return (
    <div className="overflow-hidden">
        <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            apiKey="oxja26fp9aj1li6ihkja5sv5lcokmubxekm4xzcjnyw803t5"
            textareaName="editorname"
            onEditorChange={handleEditorChange}
            init={{
              height: 350,
              menubar: false,
              content_style: "body { color: red; }",
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar: `undo redo | formatselect | bold italic backcolor |
                       alignleft aligncenter alignright alignjustify |
                       bullist numlist outdent indent | removeformat | help`,
                       content_css: 'editorStyles' // Path to your custom theme CSS file
            }}
            
          />
          
    </div>
  )
}

export default Tinymceeditor