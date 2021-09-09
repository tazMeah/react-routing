import { useHistory } from "react-router-dom";

export default function PushButton() {
    const history = useHistory();
    

    function handleClick() {
		history.push("/about");

		
	}

	return (
		<button type="button" onClick={handleClick}>
			another way to About
		</button>
	);
}
