import './App.css'
import AppRoutes from "./AppRoutes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}

export default App
