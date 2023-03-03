import React from "react";
import BiographyEvent from "./biographyEvent";

export default function BiographyEventList({ biography }) {
    const biographyElements = biography.map(biography =>
        <li key={biography.id}> <BiographyEvent biography={biography} /></li>)
return(
    <ul>
        {biographyElements}
    </ul>
)
    }