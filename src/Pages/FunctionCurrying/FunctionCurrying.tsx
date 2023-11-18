import { useState } from "react";
const FunctionCurrying = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
    });
    const handleChange = (fieldName: string) => (event) => {
        const { value } = event.target;
        console.log("value changed", value);
        setState((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
    };
    return (
        <>
            <h2>FunctionCurrying</h2>

            <div className="form">
                <label htmlFor="name">Name :  </label>
                <input type="text"
                    className="name"
                    placeholder="Full Name"
                    value={state.name}
                    onChange={handleChange("name")}
                />
                <br />
                <label htmlFor="email">Email :  </label>
                <input type="text"
                    placeholder="email"
                    value={state.email}
                    onChange={handleChange("email")}
                />
            </div>

            <h2>Enter Result</h2>
            {
                JSON.stringify(state)
            }
        </>
    )
}

export default FunctionCurrying