export class UserRequestDto{
    public nome: string
    public sobrenome: string
    public idade: string
    public sexo: string
    public cpf: string
    public rg: string
    public telefone: string
    public email: string
    public senha: string
}

export class UsuarioAtualizarDto{
    public nome: string
    public sobrenome: string
    public telefone: string
    public senha: string
}