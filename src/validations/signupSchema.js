import { object, string,ref} from "yup"

export const signupSchema = object({
    email:string()
        .email("Ingrese un mail valido")
        .required("Ingrese un mail"),
    password:string()
        .min(6,"minimo 6 caracteres")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            "La contraseña debe contener al menos una letra, un número, un carácter especial y tener una longitud mínima de 6 caracteres"
        )
        .required("Ingrese un password"),
    confirmPassword:string()
        .oneOf([ref("password")],"los password no son iguales")
        .required("vuelva a ingresar el email")
})