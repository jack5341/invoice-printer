import { Center, Text, ScaleFade } from "@chakra-ui/react"
import { DragHandleIcon } from '@chakra-ui/icons'
import {useDraggable} from '@dnd-kit/core'

export default function Card(props) {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.index,
      });
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <ScaleFade initialScale={0.9} in={true}>
            <Center borderRadius="xl" ref={setNodeRef} style={style} {...listeners} {...attributes} shadow="md" bg="#5ba2e6" m={3} p={4}>
                <DragHandleIcon mr="3" style={{position: "absolute", marginLeft: "-11rem"}} />
                <Text pl="5">
                    {props.title} 
                </Text>
            </Center>
        </ScaleFade>
    )
}