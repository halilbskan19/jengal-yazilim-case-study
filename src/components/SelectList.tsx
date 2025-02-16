import { SelectListProps } from "@/interfaces/select-list";
import { Select, MenuItem } from "@mui/material";

export default function SelectList({ value, onChange, options, minWidth = 120 }: SelectListProps) {
    return (
        <Select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ bgcolor: "white", color: "black", minWidth }}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    );
}
