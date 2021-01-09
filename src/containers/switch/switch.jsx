import { FormControl,FormLabel,Switch } from "@chakra-ui/react"

export default function SwitchContainer(){
    return (
        <FormControl pl="3" mt="1" display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
                Dark Mode 🌑
            </FormLabel>
            <Switch id="email-alerts" />
        </FormControl>
    )
}