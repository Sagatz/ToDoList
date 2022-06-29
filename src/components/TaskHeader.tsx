export function TaskHeader() {
    const taskList = {
        task : 'tarefa',
        status : 'estado',
        createdIn : 'criado em',
        expireIn : 'expira em',
        finishedIn : 'concluido em'
    }

    return (
        <header className="bg-green-500 h-8 w-full flex items-center justify-between p-2">
            {Object.entries(taskList).map(([key, value]) => {
                return (
                    <span key={key}>{value.toUpperCase()}</span>
                )
            })}
        </header>
    )
}