import { SearchBar } from "./SearchBar";
import { Task } from "./Task";
import { TaskHeader } from "./TaskHeader";

export function TaskList() {
    return (
        <div className="border border-t-3 border-green-500 rounded-[20px] w-[256px] md:w-[512px] md:min-h-[640px] sm:min-h-[440px] min-h-[320px] mt-20">
            <SearchBar />
            <TaskHeader />
            <Task />
        </div>
    )
}