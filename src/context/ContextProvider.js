import { AuthProvier } from "./AuthContext";
import { ThemeProvier } from "./ThemeContext";

export default ContextProvider = ({children}) => {
    return (
        <AuthProvier>
            <ThemeProvier>
                {children}
            </ThemeProvier>
        </AuthProvier>
    )
}