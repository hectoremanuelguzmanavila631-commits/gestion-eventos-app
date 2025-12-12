// Ejemplo conceptual de manejo de error 404
// App.js (añadiendo una ruta al final de la configuración)

// ... dentro de <Routes> ...
// Copilot podría haber sugerido añadir esta línea para manejar URLs no encontradas:
<Route path="*" element={<h1>404: Página no encontrada</h1>} />
// ...

// Ejemplo conceptual de validación de entrada (en un formulario de registro)
const validateForm = (formData) => {
  // Copilot podría haber sugerido las condiciones básicas de validación:
  // "Validar que el email tenga el formato correcto y la contraseña tenga al menos 8 caracteres"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return { valid: false, message: "Email inválido." };
  }
  if (formData.password.length < 8) {
    return { valid: false, message: "La contraseña debe tener al menos 8 caracteres." };
  }
  return { valid: true };
};
