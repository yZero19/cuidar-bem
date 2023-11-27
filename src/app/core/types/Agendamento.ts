export class AgendamentoRequestDto {
    public paciente: string
    public data: any
    public horario: string
    public medico: string
    public servico: string
}

export class AgendamentoAtualizarDto {
    public id: number
    public paciente: string
    public data: any
    public horario: string
    public medico: string
    public servico: string
}

