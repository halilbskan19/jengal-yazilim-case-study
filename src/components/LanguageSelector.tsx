import SelectList from "./SelectList";
import { SelectOption } from "@/interfaces/select-option";

interface LanguageSelectorProps {
  value: string;
  onChange: (lang: string) => void;
}

const languageOptions: SelectOption[] = [
  { value: "tr", label: "Türkçe" },
  { value: "en", label: "English" },
];

export default function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return <SelectList value={value} onChange={onChange} options={languageOptions} minWidth={120} />;
}
