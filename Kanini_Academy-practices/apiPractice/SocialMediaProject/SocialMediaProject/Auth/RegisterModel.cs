using System.ComponentModel.DataAnnotations;

namespace SocialMediaProject.Auth
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "UserName Required")]
        public string UserName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email Required")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password Required")]
        public string Password { get; set; } = string.Empty;
        [Required(ErrorMessage = "Role Required")]
        public string Roles { get; set; } = string.Empty;
    }
}
