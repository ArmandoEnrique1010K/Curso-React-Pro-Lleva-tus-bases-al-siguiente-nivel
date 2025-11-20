import { MyLabel } from "../components/MyLabel";

// Agrupar historias por grupo
export default {
    title: "Examples/MyLabel",
    argTypes: {
        size: {
            control: { type: "radio" },
            options: ["normal", "h1", "h2", "h3"],
        },
        fontColor: {
            control: { type: "color" },
        },
    },
    source: true,
};

export const Basic = (args) => <MyLabel {...args} />;
Basic.args = {
    label: "Basic Label",
    size: "normal",
    allCaps: false,
    fontColor: "#5517ac",
};
Basic.storyName = "Etiqueta básica";
// Basic.description = "Muestra el texto sin transformaciones ni colores.";

export const AllCaps = () => (
    <MyLabel label="All Caps label" allCaps />
);

export const Secondary = () => (
    <MyLabel label="Secondary Label" color="text-secondary" />
);

export const CustomColor = () => (
    <MyLabel label="Custom Color Label" fontColor="#5517ac" />
);
