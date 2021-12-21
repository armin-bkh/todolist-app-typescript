import Select from 'react-select';

type selectBoxProps = {
    value: string,
    onFilter: (value: string) => void;
}

type optionsType = {
    label: string, 
    value: string,
}[]

const options: optionsType = [
    {label: "All", value: "All"},
    {label: "Completed", value: "Completed"},
    {label: "Uncompleted", value: "Uncompleted"},
]

export const SelectBox = ({ value, onFilter }: selectBoxProps) => {

    const defaultValue = (value: string, options: optionsType) => {
        return options.find(option => option.value === value) ? options.find(option => option.value === value) : '';
    }

    const changeHandler = (newValue: any) => {
        onFilter(newValue.value)
    }

    return (
        <Select value={defaultValue(value, options)} options={options} onChange={changeHandler} />
    )
};