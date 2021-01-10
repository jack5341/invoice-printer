import {useState} from 'react'
import { ScaleFade } from "@chakra-ui/react"

// Components
import Upmenu from '../components/upmenu/upmenu'
import Content from '../components/content/content'

export default function Homepage(){

    const [hide,setHide] = useState(true)

    return (
        <>
            <ScaleFade in={hide} initialScale={0.9} >
                <Upmenu/>
                <Content/>
            </ScaleFade>
        </>
    )
}