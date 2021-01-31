import { SlideFade } from "@chakra-ui/react"

import TableSection from "../table-section/table.section"

export default function ListItemContainer(props){    
    console.log(props.parsedlist)
    return (
        <SlideFade in={true} initialScale={0.7} >
            {props.parsedlist.slice(1).map((element,index) => <TableSection output={element} key={index} title={props.parsedlist[0]}/>)}
        </SlideFade>
    )
}