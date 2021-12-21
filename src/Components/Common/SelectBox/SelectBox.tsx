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
        return options.find(option => option.value === value) ? options.find(option => option.value === value) : null;
    }


    const customStyles = {
        menu: (styles: any) => ({...styles, backgroundColor: "#0e7490"}),
        control: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => ({ ...styles ,color: "#14b8a6", backgroundColor: '#0e7490', border: isSelected ? 'none' : 'none', outline: isSelected ? 'none' : "none" }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "#164e63" :"#0e7490",
                color: '#14b8a6',
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        },
        singleValue: (styles: any) => ({ ...styles, color: "#14b8a76" })
      };

    const changeHandler = (newValue: any) => {
        onFilter(newValue.value)
    }

    return (
        <div className={`shadow-lg shadow-cyan-600/30`}>
            <Select className={`main`} styles={customStyles} value={defaultValue(value, options)} options={options} onChange={changeHandler} />
        </div>
    )
};