import './MyLabel.css';

interface Props {
    label: string;
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor
}: Props) => {
    return (
        <span className={`${size} ${color} label`} style={{ color: fontColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
