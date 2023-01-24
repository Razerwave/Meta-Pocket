import { AuthProvier } from "./AuthContext"
import { ThemeChangeProvier } from "./ThemeChangeContext"

const ContextProvider = ({ children }) => {
    return (
        <AuthProvier>
            <ThemeChangeProvier>
                {children}
            </ThemeChangeProvier>
        </AuthProvier>
    )
}

export default ContextProvider 