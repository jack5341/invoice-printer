import { Box, Text } from "@chakra-ui/react";

export default function Alert(){
    return (
        <Box position="fixed" width="100%" padding="0.5rem" color="white" background="#107c41" bottom="0">
            <Text>
                We will use your cookies for your best experience
            </Text>
        </Box>
    )
}