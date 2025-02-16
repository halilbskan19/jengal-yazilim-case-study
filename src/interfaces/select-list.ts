export interface SelectListProps {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    minWidth?: number;
}
