import{PA as e,PB as i,PC as n,PD as t,hy as s,PF as o,Y1 as a,QH as c}from"./index-DDjZscML.js";const r=`
<div className="relative">
  <EmojiPickerButton className="btn btn-primary">
    <FontAwesomeIcon icon={faFaceSmile} className="text-lg" />
  </EmojiPickerButton>
</div>
`,d=`
function EmojiMessageBox() {
  const [message, setMessage] = useState('');
  return (
    <div className="relative flex items-center gap-4">
      <input
        className="form-control"
        value={message}
        placeholder="Say something…"
        onChange={e => setMessage(e.target.value)}
      />
      <EmojiPickerButton
        className="btn btn-phoenix-secondary"
        aria-label="Add an emoji"
        onSelect={emoji => setMessage(current => current + emoji)}
      >
        <FontAwesomeIcon icon={faFaceSmile} className="text-lg" />
      </EmojiPickerButton>
    </div>
  );
}
`,m=()=>e.jsxs("div",{children:[e.jsx(i,{title:"Emoji button",description:"Picmo displays a panel of emojis where one can be selected. What is done with the selected emoji is up to you.",link:{text:"Documentation for Picmo",url:"https://picmojs.com/docs/api/overview/"},children:e.jsxs("p",{className:"mb-0 text-muted",children:[e.jsx("code",{children:"EmojiPickerButton"})," wraps Picmo's popup picker and anchors it to the button you render inside it. The popup is appended to ",e.jsx("code",{children:"<body>"})," and floated, so it overlays the page rather than growing the container. Its styling comes from the theme skin in ",e.jsx("code",{children:"assets/css/plugins/picmo.css"}),", which reads"," ",e.jsx("code",{children:"data-hb-theme"})," and so follows dark mode on its own."]})}),e.jsxs(n,{children:[e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"Example",children:e.jsxs("p",{className:"mb-0",children:["A bare trigger. ",e.jsx("code",{children:"position"})," places the popup relative to the button and defaults to ",e.jsx("code",{children:"bottom-start"}),", as in the static theme."]})}),e.jsx(t.Body,{code:r,scope:{EmojiPickerButton:a,FontAwesomeIcon:o,faFaceSmile:s}})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(t.Header,{title:"Appending to an input",children:e.jsxs("p",{className:"mb-0",children:[e.jsx("code",{children:"onSelect"})," receives the chosen character. Append it to your own state — this is what the chat composer does."]})}),e.jsx(t.Body,{code:d,scope:{EmojiPickerButton:a,FontAwesomeIcon:o,faFaceSmile:s,useState:c.useState}})]})]})]});export{m as default};
