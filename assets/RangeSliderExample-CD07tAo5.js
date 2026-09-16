import{PA as e,PB as n,PC as r,PD as s,Y2 as i}from"./index-DDjZscML.js";const o=`
<PhoenixSlider className="noUi-primary" options={{ start: [45] }} />
`,a=`
<PhoenixSlider
  className="noUi-primary"
  options={{ start: [20, 80], connect: true }}
/>
`,t=`
<>
  <PhoenixSlider className="noUi-primary mb-6" options={{ start: [45] }} />
  <PhoenixSlider className="noUi-success mb-6" options={{ start: [35] }} />
  <PhoenixSlider className="noUi-info mb-6" options={{ start: [40] }} />
  <PhoenixSlider className="noUi-warning mb-6" options={{ start: [70] }} />
  <PhoenixSlider className="noUi-danger" options={{ start: [65] }} />
</>
`,d=`
<>
  <PhoenixSlider
    className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-0 mb-6"
    options={{ start: [45] }}
  />
  <PhoenixSlider
    className="noUi-primary-lighter noUi-handle-primary noUi-slider-medium noUi-handle-circle px-1 mb-6"
    options={{ start: [45] }}
  />
  <PhoenixSlider
    className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-8 pe-4"
    options={{ range: { min: 0, max: 250 }, start: [20, 150], connect: true }}
  />
</>
`,l=`
function PriceFilter() {
  const [range, setRange] = useState([20, 150]);
  return (
    <>
      <PhoenixSlider
        className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-8 pe-4"
        options={{ range: { min: 0, max: 250 }, start: [20, 150], connect: true }}
        onChange={val => setRange(val.map(Number))}
      />
      <p className="mt-6 mb-0 text-muted">
        Selected: \${range[0]} – \${range[1]}
      </p>
    </>
  );
}
`,h=()=>e.jsxs("div",{children:[e.jsxs(n,{title:"Range Slider",description:"A lightweight, ARIA-accessible JavaScript range slider with multi-touch and keyboard support. Fast and has no dependencies.",link:{text:"Documentation for noUiSlider",url:"https://refreshless.com/nouislider/"},children:[e.jsxs("p",{className:"mb-2 text-muted",children:[e.jsx("code",{children:"PhoenixSlider"})," wraps ",e.jsx("code",{children:"nouislider"})," and is styled by the phoenix ",e.jsx("code",{children:".noUi-*"})," skin in"," ",e.jsx("code",{children:"assets/css/plugins/nouislider.css"}),". Colour and size go on the wrapper as class names; everything else goes through"," ",e.jsx("code",{children:"options"}),"."]}),e.jsxs("p",{className:"mb-0 text-muted",children:["hb-react ships a ",e.jsx("code",{children:"Slider"}),", but it emits"," ",e.jsx("code",{children:".slider"}),", ",e.jsx("code",{children:".slider-track"}),","," ",e.jsx("code",{children:".slider-range"})," and ",e.jsx("code",{children:".slider-thumb"}),", none of which has CSS in hummingbird or in this theme — it would render unstyled, so this project uses noUiSlider, as the static theme does."]})]}),e.jsxs(r,{children:[e.jsxs(s,{className:"mb-4",children:[e.jsx(s.Header,{title:"Default",children:e.jsxs("p",{className:"mb-0",children:["A single handle. The defaults match the static theme's initialiser: range ",e.jsx("code",{children:"0–100"}),", ",e.jsx("code",{children:"step"})," 1, tooltips on, and the track connected up to the handle."]})}),e.jsx(s.Body,{code:o,scope:{PhoenixSlider:i}})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(s.Header,{title:"Range Connect",children:e.jsxs("p",{className:"mb-0",children:["Two handles: pass two values to ",e.jsx("code",{children:"start"})," and"," ",e.jsx("code",{children:"connect: true"})," to fill the span between them."]})}),e.jsx(s.Body,{code:a,scope:{PhoenixSlider:i}})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(s.Header,{title:"Colored Sliders",children:e.jsxs("p",{className:"mb-0",children:[e.jsx("code",{children:"noUi-primary"}),", ",e.jsx("code",{children:"noUi-success"}),","," ",e.jsx("code",{children:"noUi-info"}),", ",e.jsx("code",{children:"noUi-warning"})," and"," ",e.jsx("code",{children:"noUi-danger"})," colour the connected part of the track."]})}),e.jsx(s.Body,{code:t,scope:{PhoenixSlider:i}})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(s.Header,{title:"Styling",children:e.jsxs("p",{className:"mb-0",children:[e.jsx("code",{children:"noUi-slider-slim"}),", ",e.jsx("code",{children:"-medium"})," and"," ",e.jsx("code",{children:"-large"})," set the track height;"," ",e.jsx("code",{children:"noUi-handle-circle"})," rounds the handle and"," ",e.jsx("code",{children:"noUi-handle-primary"})," colours it."," ",e.jsx("code",{children:"noUi-target-primary"})," and"," ",e.jsx("code",{children:"noUi-primary-lighter"})," tint the track itself. The large variant is the one the hotel price filter uses."]})}),e.jsx(s.Body,{code:d,scope:{PhoenixSlider:i}})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(s.Header,{title:"Reading the value",children:e.jsxs("p",{className:"mb-0",children:["The slider is uncontrolled once created, as it is in the static theme. Read it with ",e.jsx("code",{children:"onChange"})," (on release) or"," ",e.jsx("code",{children:"onUpdate"})," (while dragging); values arrive formatted, so convert them if you need numbers."]})}),e.jsx(s.Body,{code:l,scope:{PhoenixSlider:i},noInline:!1})]})]})]});export{h as default};
