import { useState } from 'react'
import { ScaleFade } from "@chakra-ui/react"
import Helmet from 'react-helmet'

// Components
import Upmenu from '../components/upmenu/upmenu'
import Content from '../components/content/content'

export default function Homepage(props) {

    const [load, isLoad] = useState(null)
    const [list, setList] = useState(null)
    const [type, setType] = useState(null)
    return (
        <>
            <Helmet>
                <title>Invoice Parser 🧐</title>
            </Helmet>
            <ScaleFade in={true} initialScale={0.9} >
                <Upmenu setType={setType} setList={setList} loadState={isLoad} />
                <Content type={type} list={list} loadState={load} />
            </ScaleFade>
        </>
    )
}