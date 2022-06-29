import { Plus } from "phosphor-react";
import { Button } from "../components/Button";
import { TaskList } from "../components/TaskList";

export function Home() {
    return (
        <main className="h-full flex flex-col justify-center items-center">
            <TaskList />
            <Button icon={<Plus size={24}/>} content="Nova tarefa"/>
        </main>
    )
}