import React from "react";
import BiographyEvent from "./biographyEvent";

export default function BiographyEventList(props) {
return(
    <ul>
        {
            props.biography.map(biography => (
                <li key={biography.id}> <BiographyEvent biography={biography} /></li>
            ))
        }
    </ul>
)
    }