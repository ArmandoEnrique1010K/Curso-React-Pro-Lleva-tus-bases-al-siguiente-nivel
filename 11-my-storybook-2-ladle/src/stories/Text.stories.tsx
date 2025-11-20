import { Text } from "../components/Text";

export default {
    title: "Componentes/Text",
};

export const Default = () => <Text />;


export const Secundario = () => (
    <p style={{ color: "blue", fontSize: "18px" }}>
        Texto secundario
    </p>
);
