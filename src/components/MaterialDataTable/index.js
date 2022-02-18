import './materialdatatable.css'
import { GetData } from '../../utils/getData'

export const MaterialDataTable = () => {

    const usersData = GetData();
    if (usersData.length !== 0) console.log(usersData);
    const columns = [
        {
        IdUser: "UserId",
        field: 'userId'
        },
        {
        IdUser: "Id",
        field: 'id'
        },
        {
        IdUser: "Title",
        field: 'title'
        },
        {
        IdUser: "Completed",
        field: 'completed'
        },
    ]
  return (
    <div>Material Data Table Project
    </div>
  )
}
