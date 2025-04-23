import {SModalInput} from "./AuthForm/AuthForm.styled.js";

export const BaseInput = ({
        tag = "input",
        id,
        name,
        placeholder = "",
        type= "text",
        error = false,
        onChange,

    }) => {
            const Component = tag === "textarea" ? "textarea" : SModalInput;
            return(
                <Component
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    $error={error}
                    onChange={onChange}
                />
            )
    }

    export default BaseInput