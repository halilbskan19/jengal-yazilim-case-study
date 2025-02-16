import SelectList from "./SelectList";
import { SelectOption } from "@/interfaces/select-option";

interface ThemeSelectorProps {
  value: string;
  onChange: (theme: string) => void;
}

const themeOptions: SelectOption[] = [
  { value: "brandA", label: "Modern (Brand A)" },
  { value: "brandB", label: "Lüks (Brand B)" },
  { value: "brandC", label: "İndirim (Brand C)" },
];

export default function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  return <SelectList value={value} onChange={onChange} options={themeOptions} minWidth={150} />;
}
