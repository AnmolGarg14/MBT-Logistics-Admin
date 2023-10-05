import UserDataTable from "@/components/UserDataTable";

const Users = () => {
  return (
    <section className="pt-2">
      <div className="flex flex-col">
        <div className="flex pb-8">
          <div className="font-bold text-3xl">Users</div>
          <div className="flex items-center pl-8">
            <button className="text-xs bg-soft-color text-black hover:bg-gray-100 rounded-md items-center p-2 border border-black">
              Add New User
            </button>
          </div>
        </div>
        <div>
          <UserDataTable />
        </div>
      </div>
    </section>
  );
};

export default Users;
