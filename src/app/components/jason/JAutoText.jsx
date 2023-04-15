import React, { useEffect } from "react";
import { Text } from "@nextui-org/react"

export default function JAutoText(props) {
	const data = props.data;
	const template = props.template

    const font = () => {
        if (template === 'retroMonitor') {
          return "'__Press_Start_2P_e81491', '__Press_Start_2P_Fallback_e81491'"
        }
    }

  	const info = [
		{
		AboutDevTypeText:
			// "<p><b>What should we talk about?</b></p><ul><li>Ask Sam for fun things to do in new places</li><li>Talk through your new business ideas</li><li>Learn about any topic</li><li>Ask Sam to make a story for you on the spot</li><li>Perform a mock interview in the car on your way to the real interview</li><li>It can help you write your personal gratitude journal</li><li>Whatever you want!</li></ul>",
			`<Text css={{fontFamily:font()}}>${data.label}<p>`,
		},
	];

	useEffect(() => {
		const allElements = document.getElementsByClassName("typeing");

		for (let j = 0; j < allElements.length; j++) {
		const currentElementId = allElements[j].id;
		const currentElementIdContent = info[0][currentElementId];
		const element = document.getElementById(currentElementId);
		const devTypeText = currentElementIdContent;

		// type code
		let i = 0,
			isTag,
			text;

		function typeX() {
			text = devTypeText.slice(0, ++i);

			if (text === devTypeText) return;

			element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
			const char = text.slice(-1);

			if (char === "<") isTag = true;
			if (char === ">") isTag = false;
			if (isTag) return typeX();

			setTimeout(typeX, 45);
		}

		typeX();
		}
	}, []);

	return (
		<span
		id="AboutDevTypeText"
		className="typeing"
		style={{ color: "#fff" }}
		></span>
	);
}
