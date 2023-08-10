import React from "react";
import '../estilos/Footer.css'
import { useTheme } from './ThemeProvider';

export default function Footer() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className="footer" style={{ background: theme.background, color: theme.text }}>
            <div className="footer-up">
                <p>
                    DESCARGO DE RESPONSABILIDAD IMPORTANTE: todo el contenido disponible en nuestro sitio web, en todos los sitios web hypervinculados, y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociadas tienen como único objetivo proporcionarle información general procedente de fuentes externas.
                </p>
            </div>
            <div>
                <p>Cripto Stadistics</p>
                <p>© 2023</p>

            </div>
        </div>
    )
}