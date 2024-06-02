import { CommandMenu } from "./_components/command";
import { DataTableDemo } from "./_components/Bookdata";
const BooksPage = () => {
    return (
    <div>
        <CommandMenu />
        <div className="pl-20 pr-20">
            <DataTableDemo />
        </div>
    </div>);
    }

export default BooksPage;