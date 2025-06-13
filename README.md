# 📱 Proyecto Final - Clone de Facebook Login

Este proyecto replica la interfaz de login de Facebook utilizando un frontend en HTML/CSS/JavaScript y un backend en .NET Web API, todo dockerizado para fácil despliegue.

## 🏗️ Arquitectura del Proyecto

```
ProyectoFinalDO/
├── backend/                 # API en .NET 8
│   ├── Controllers/         # Controladores de la API
│   ├── LoginRequest.cs      # Modelo de datos
│   ├── Program.cs           # Configuración principal
│   ├── Dockerfile           # Configuración Docker backend
│   └── appsettings.json     # Configuración de la aplicación
├── frontend/                # Frontend HTML/CSS/JS
│   ├── index.html           # Página principal
│   ├── styles.css           # Estilos (replica de Facebook)
│   ├── script.js            # Lógica del frontend
│   ├── nginx.conf           # Configuración del servidor web
│   └── Dockerfile           # Configuración Docker frontend
└── docker-compose.yml       # Orquestación de contenedores
```

## 🚀 Características

### Frontend
- ✅ **Réplica exacta del login de Facebook**
- ✅ **Diseño responsive** adaptable a móviles
- ✅ **Validación de formularios** en tiempo real
- ✅ **Mensajes de notificación** para feedback al usuario
- ✅ **Efectos visuales** modernos y suaves
- ✅ **Conexión con API backend** para autenticación

### Backend
- ✅ **API REST en .NET 8** con Swagger
- ✅ **Modelo de datos** para login requests
- ✅ **Validación** de datos de entrada
- ✅ **CORS configurado** para comunicación frontend-backend
- ✅ **Respuestas JSON** estructuradas

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: .NET 8 Web API, C#
- **Servidor Web**: Nginx (para frontend)
- **Containerización**: Docker & Docker Compose
- **Despliegue**: Preparado para DigitalOcean

## 📦 Instalación y Ejecución

### Prerrequisitos
- Docker
- Docker Compose

### Opción 1: Ejecutar con Docker Compose (Recomendado)

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd ProyectoFinalDO

# Construir y ejecutar ambos servicios
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build
```

### Opción 2: Ejecutar servicios individualmente

```bash
# Backend (en una terminal)
cd backend
docker build -t backend-api .
docker run -p 5000:80 backend-api

# Frontend (en otra terminal)
cd frontend
docker build -t frontend-app .
docker run -p 3000:80 frontend-app
```

## 🌐 Acceso a la Aplicación

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Swagger Documentation**: http://localhost:5000/swagger

## 📡 Endpoints de la API

### POST /api/login
Procesa solicitudes de login

**Request Body:**
```json
{
  "username": "usuario@email.com",
  "password": "contraseña123",
  "loginTime": "2025-01-13T10:30:00Z"
}
```

**Response (Éxito):**
```json
{
  "message": "Login exitoso",
  "username": "usuario@email.com",
  "loginTime": "2025-01-13T10:30:00Z"
}
```

### GET /api/login/status
Verifica el estado de la API

**Response:**
```json
{
  "message": "API funcionando correctamente",
  "timestamp": "2025-01-13T10:30:00Z"
}
```

## 🎨 Funcionalidades del Frontend

1. **Formulario de Login**
   - Validación en tiempo real
   - Mensajes de error personalizados
   - Efectos visuales en inputs y botones

2. **Diseño Responsive**
   - Adaptación automática a dispositivos móviles
   - Breakpoints optimizados

3. **Interactividad**
   - Feedback visual al usuario
   - Estado de carga durante peticiones
   - Notificaciones de éxito/error

## 🐳 Despliegue en DigitalOcean

### Para App Platform:

1. **Backend**:
   - Tipo: Docker Container
   - Source: Este repositorio (carpeta backend)
   - Puerto: 80

2. **Frontend**:
   - Tipo: Static Site o Docker Container
   - Source: Este repositorio (carpeta frontend)
   - Puerto: 80

### Variables de Entorno:
```
ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://+:80
```

## 🔧 Desarrollo Local

### Sin Docker:

**Backend (.NET 8 requerido):**
```bash
cd backend
dotnet restore
dotnet run
```

**Frontend (servidor web requerido):**
```bash
cd frontend
# Usar cualquier servidor web estático
python -m http.server 3000
# o
npx serve -p 3000
```

## 📱 Vista Previa

El frontend replica fielmente el diseño de Facebook con:

- Logo azul característico
- Campos de entrada con placeholders en español
- Botón "Iniciar sesión" en azul Facebook
- Botón "Crear cuenta nueva" en verde
- Footer con enlaces de idiomas
- Animaciones y efectos hover

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es solo para fines educativos y de demostración.

---

**Desarrollado para el curso de Telemática - 2025-1** 🎓 