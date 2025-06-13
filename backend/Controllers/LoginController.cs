using Microsoft.AspNetCore.Mvc;

namespace BackendAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request == null)
            {
                return BadRequest("Datos de login inválidos");
            }

            // Aquí puedes agregar la lógica de autenticación
            // Por ahora, solo simulamos una respuesta exitosa
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Usuario y contraseña son requeridos");
            }

            // Simular autenticación exitosa
            var response = new
            {
                message = "Login exitoso",
                username = request.Username,
                loginTime = request.LoginTime
            };

            return Ok(response);
        }

        [HttpGet("status")]
        public IActionResult Status()
        {
            return Ok(new { message = "API funcionando correctamente", timestamp = DateTime.Now });
        }
    }
} 