import {useState} from 'react'
import { ScaleFade } from "@chakra-ui/react"

// Components
import Upmenu from '../components/upmenu/upmenu'
import Content from '../components/content/content'

export default function Homepage(){

    const [load,isLoad] = useState(null)
    const [list,setList] = useState(null)

    return (
        <>
            <ScaleFade in={true} initialScale={0.9} >
                <Upmenu setList={setList} loadState={isLoad} />
                <Content list={list} loadState={load} />
            </ScaleFade>
        </>
    )
}