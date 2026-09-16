import{PA as o,PB as a,PC as n,PD as e,PE as i,Y3 as h,Y4 as c,Y5 as r,Y6 as t,Y7 as s,Y8 as g}from"./index-lZbCNXvx.js";import{g as m,a as x}from"./10-D-mio07N.js";const l=`
import Lightbox from 'components/base/Lightbox';
import useLightbox from 'hooks/useLightbox';

function LightboxExample () {
  const [attachments] = useState([img9, img10, img11, img12, img13]);
  const { lightboxProps, openLightbox } = useLightbox(attachments);

  return (
    <div>
      <Lightbox {...lightboxProps} />

      <Row className="g-2 md:g-4">
        {attachments.map((img, index) => (
          <Col key={img} xs={6}>
            <img
              src={img}
              alt=""
              className="w-full rounded-lg cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};`,d=`
import Lightbox from 'components/base/Lightbox';
import useLightbox from 'hooks/useLightbox';

function SocialPhotos () {
  const [attachments] = useState([img9, img10, img11, img12, img13]);
  const { lightboxProps, openLightbox } = useLightbox(attachments);
  return (
    <div>
      <Lightbox {...lightboxProps} />
      <Row className="g-2 md:g-4">
        {attachments.map((img, index) => (
          <Col key={img} xs={
            index === 0 ? 6 : index === 1 ? 6 : 4
          }>
            <img
              src={img}
              alt=""
              className="w-full rounded-lg cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};`,b=`
import Lightbox from 'components/base/Lightbox';
import useLightbox from 'hooks/useLightbox';

function SocialPhotos () {
  const { lightboxProps, openLightbox } = useLightbox([img24]);
  return (
    <div>
      <Lightbox {...lightboxProps} />
      <Row className="g-4">
          <Col xs={4}>
            <img
              src={img24}
              alt=""
              className="w-full rounded-lg cursor-pointer"
              onClick={() => openLightbox(1)}
            />
          </Col>
      </Row>
    </div>
  );
};`,L=()=>o.jsxs("div",{className:"mb-9",children:[o.jsx(a,{title:"Lightbox",description:"Phoenix-React uses FsLightbox-react for lightbox. React FsLightbox is a flexible lightbox component for displaying images in a React project.",link:{text:"FsLightbox-react Documentation",url:"https://github.com/banthagroup/fslightbox-react"}}),o.jsxs(n,{children:[o.jsxs(e,{className:"mb-4",children:[o.jsx(e.Header,{title:"useLightbox Hook",noPreview:!0}),o.jsx(e.Body,{children:o.jsxs("div",{children:[o.jsxs("p",{className:"mb-2",children:["The ",o.jsx("code",{children:"useLightbox"})," custom hook is used to implement FsLightbox feature within ","Phoenix"," React. The ",o.jsx("code",{children:"useLightbox"})," hook simplifies the code needed for this functionality, promoting better code organization and maintainability."]}),o.jsx("h5",{className:"mb-2",children:"How to use :"}),o.jsx("p",{className:"mb-2",children:"Begin by importing the useLightbox custom hook at the top of your component file:"}),o.jsx("div",{className:"mb-3",children:o.jsx(i,{code:"import useLightbox from 'hooks/useLightbox';"})}),o.jsxs("p",{className:"mb-2",children:["After that, initialize the ",o.jsx("code",{children:"useLightbox"})," hook by passing in the array of image sources as a parameter. This setup process enables the ",o.jsx("code",{children:"lightbox"})," functionality and grants access to the ",o.jsx("code",{children:"lightboxProps"})," and"," ",o.jsx("code",{children:"openLightbox"})," properties and functions. The"," ",o.jsx("code",{children:"lightboxProps"})," object, obtained from the hook, includes vital properties required to configure the"," ",o.jsx("code",{children:"Lightbox"})," component. Meanwhile, the"," ",o.jsx("code",{children:"openLightbox"})," function empowers you to activate the lightbox view for a specific image. You can activate this function by providing the index of the image you intend to display."]}),o.jsx(i,{code:l})]})})]}),o.jsxs(e,{className:"mb-4",children:[o.jsx(e.Header,{title:"Gallery"}),o.jsx(e.Body,{code:d,scope:{useLightbox:s,Lightbox:t,img11:r,img12:c,img9:x,img10:m,img13:h}})]}),o.jsxs(e,{children:[o.jsx(e.Header,{title:"Simple Image"}),o.jsx(e.Body,{code:b,scope:{useLightbox:s,Lightbox:t,img24:g}})]})]})]});export{L as default};
