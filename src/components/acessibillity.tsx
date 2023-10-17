import React from "react";
import { View } from 'react-native';
import { DsInputCodeContainer } from "./InputCode";


const Acessibillity = () => {
    const [item, setItem] = React.useState('');

    return (
        <View style={{ padding: 63 }}>
            <DsInputCodeContainer ></DsInputCodeContainer>
        </View >
    );
};
export default Acessibillity; 