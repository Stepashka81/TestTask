import React, {useEffect, useState} from "react";
import biography from "./My_arrays";
import BiographyEventList from "./Biographyeventlist";
import SortButton from "./Sortbutton";


function Tab(){

    const list = biography;
    const [sortOrder, setSortOrder] = React.useState({
        field: 'liveEvent',
        direction: true
    });

    useEffect(() => {
        let c = sortOrder.direction;

        list.sort((a, b) => {
            let x = c ? a : b;
            let y = c ? b : a;
            return ('' + x[sortOrder.field]).localeCompare(y[sortOrder.field]);
        });
    }, [sortOrder.field, sortOrder.direction]);



    const onClick = (e) => {
        setSortOrder((prevOrder) => ({
            field: 'liveEvent',
            direction: !sortOrder.direction
        }))
    }

    return(
    <>
        <h1>Our Biography</h1>
        <BiographyEventList biography={list} />
        <SortButton click={onClick}/>
    </>
    )
}
export default Tab