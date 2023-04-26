'use client'

import { Row, Grid } from "@nextui-org/react"

import { useState, useEffect, useRef } from "react"

import JBadges from "./jason/JBadges"
import JGrid from "./jason/JGrid"
import JSale from "./jason/JSale"
import JLinkButton from "./jason/JLinkButton"
import JLocation from "./jason/JLocation"
import JMargin from "./jason/JMargin"
import JText from "./jason/JText"
import JList from "./jason/JList"
import JH1 from "./jason/JH1"
import JH2 from "./jason/JH2"
import JH3 from "./jason/JH3"
import JH4 from "./jason/JH4"
import JAvatar from "./jason/JAvatar"
import JAutoText from "./jason/JAutoText"
import JImage from "./jason/JImage"
import JNavbar from "./jason/JNavbar"

const components = {
  jbadges: JBadges,
  jgrid: JGrid,
  jsale: JSale,
  jlinkbutton: JLinkButton,
  jlocation: JLocation,
  jmargin: JMargin,
  jtext: JText,
  jlist: JList,
  jh1: JH1,
  jh2: JH2,
  jh3: JH3,
  jh4: JH4,
  javatar: JAvatar,
  jautotext: JAutoText,
  jimage: JImage,
  jnavbar: JNavbar
}

import { editComponent } from '../hooks/editComponent';

export default function RenderPage (props) {
  const json_copy = props;
  const items = props.data.items;
  const template = props.data.template;
  
  const [isEditableClicked, setIsEditableClicked] = useState(false);

	
	const [changeItems, setChangeItems] = useState(0)


  // useEffect(() => {
  //   // console.log(json_copy);
  //   // function handleClick(element) {
  //   //   editComponent(element);
  //   //   // call function
  //   // }

  //   const editableElements = document.querySelectorAll(".jeditable");
  //   editableElements.forEach((element) => {
      
  //     element.addEventListener("click", function(event){
        
  //       let elementEditable = event.currentTarget;
  //       console.dir(elementEditable);
  //       elementEditable.contentEditable = true;
  //       elementEditable.focus();
  //     });

  //     element.addEventListener("blur", function(event){
  //       console.log("NEW DATA");
  //       console.log(event.target.innerHTML);
  //       console.log("JSONINDEX",element.getAttribute('data-jsonindex'));
  //       console.log("COMPONENT",element.getAttribute('data-component'));
  //       console.log("KEY",element.getAttribute('data-key'));

        
  //       console.log("====================================");
  //       //json_copy.data.items[element.getAttribute('data-jsonindex')]['data'][element.getAttribute('data-key')] = event.target.innerHTML;
  //       console.log(json_copy);
        
  //       let newJson ={
  //         "template": "mint",
  //         "meta": 
  //             {
  //                 "title": "Esto es un tituloooo",
  //                 "description": "lololo"
  //             },
  //         "items": [
  //           {
  //             "component": element.getAttribute('data-component'),
  //             "data": {
  //                 "aling": "left",
  //                 "label": event.target.innerHTML
  //             }
  //           }
  //         ]
  //       }

  //       console.log('-->',newJson)

  //     });

  //   });

  //   // return () => {
  //   //   editableElements.forEach((element) => {
  //   //     element.removeEventListener("click", handleClick(element));
  //   //   });
  //   // };
  // }, []);


//////////////////////////////////


const editableElements = useRef([]);
const elementsArray = [];

useEffect(() => {
	editableElements.current = document.querySelectorAll('.jeditable');
	editableElements.current.forEach((element) => {
		element.addEventListener('click', (event) => {
			let elementEditable = event.currentTarget;
			console.dir(elementEditable);
			elementEditable.contentEditable = true;
			elementEditable.focus();
		});

		element.addEventListener('blur', (event) => {
			console.log('NEW DATA');
			console.log(event.target.innerHTML);
			console.log('JSONINDEX', element.getAttribute('data-jsonindex'));
			console.log('COMPONENT', element.getAttribute('data-component'));
			console.log('KEY', element.getAttribute('data-key'));

			elementsArray.push({
				jsonIndex: element.getAttribute('data-jsonindex'),
				component: element.getAttribute('data-component'),
				key: element.getAttribute('data-key'),
				value: event.target.innerHTML
			});

			// Crear una nueva lista con los valores actualizados
			const updatedElementsArray = Array.from(editableElements.current).map((element) => {
				return {
					jsonIndex: element.getAttribute('data-jsonindex'),
					component: element.getAttribute('data-component'),
					key: element.getAttribute('data-key'),
					value: element.innerHTML
				};
			});

			console.log('====================================');
			//json_copy.data.items[element.getAttribute('data-jsonindex')]['data'][element.getAttribute('data-key')] = event.target.innerHTML;
			console.log(updatedElementsArray);
		});
	});
}, []);

////////////////////////////////

  return (
    <>
        <Grid>
          {items.map((item,index) => {
            const JasonComponent = components[item.component.toLowerCase()];
            
            if (components.hasOwnProperty(`${item.component.toLowerCase()}`)) {                           // Chequea que el componente del .json exista dentro de la lista
              return (
                <JasonComponent data={item.data} jsonindex={index} template={template}/>
              )
            }
          })}
        </Grid>
    </>
  )
}
