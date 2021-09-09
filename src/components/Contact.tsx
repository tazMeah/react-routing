import { useParams } from "react-router-dom";

interface RouteParams {
    name: string
}

export default function Contact(){
    const {name} = useParams<RouteParams>();

    return <h1>Contacting: {name} </h1>;

}