import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

interface TableCell {
  id: number;
  checked: boolean;
  name: string;
  title: string;
  email: string;
  role: string;
  status: number;
}

const Base = () => {
  const [tableData, setTableData] = useState<TableCell[]>([]);

  useEffect(() => {
    const tableData = [
      {
        id: 1,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 1,
      },
      {
        id: 2,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 0,
      },
      {
        id: 3,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 1,
      },
      {
        id: 4,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 0,
      },
      {
        id: 5,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 1,
      },
      {
        id: 6,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 1,
      },
      {
        id: 7,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 1,
      },
      {
        id: 8,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 0,
      },
      {
        id: 9,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 0,
      },
      {
        id: 10,
        checked: false,
        name: "Leon",
        title: "Full Stack",
        email: "leon@example.com",
        role: "member",
        status: 0,
      },
    ];
    setTableData(tableData);
  }, []);

  const toggleAllCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log((e.target as HTMLInputElement).checked);
    const newTableData = tableData.map((v, i) => {
      return { ...v, checked: (e.target as HTMLInputElement).checked };
    });

    setTableData(newTableData);
  };

  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const dataId = parseInt(target.dataset?.id as string);
    const newTableData = tableData.map((v, i) => {
      if (v.id === dataId) {
        return { ...v, checked: (e.target as HTMLInputElement).checked };
      }

      return v;
    });

    setTableData(newTableData);
  };
  return (
    <>
      <div className="bg-white rounded shadow overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h1>Users</h1>
          <button className="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
            Add User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr className="text-slate-900 text-sm text-left">
                <th className="px-4 py-3 font-medium rounded-tl-md">Name</th>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium rounded-tr-md"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((v, i) => (
                <tr
                  className="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
                  key={i}
                >
                  <td className="px-4 py-3 whitespace-nowrap">{v.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{v.title}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{v.email}</td>
                  <td className="px-4 py-3 whitespace-nowrap  text-xs font-medium">
                    {v.status === 1 ? (
                      <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                        InActive
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{v.role}</td>
                  <td className="h-[44px] flex items-center gap-1">
                    <PencilIcon className="w-4 h-4 cursor-pointer" />
                    <TrashIcon className="w-4 h-4 cursor-pointer" />
                    {/* <span className="text-indigo-600 text-sm">Edit</span> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded mt-4 shadow overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h1>Users</h1>
          <button className="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
            Add User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr className="text-slate-900 text-sm text-left">
                <th className="px-4 py-3 text-left text-sm font-medium text-slate-900 rounded-tl-md">
                  <input
                    type="checkbox"
                    className="rounded border-gray-400"
                    onClick={toggleAllCheck}
                  />
                </th>
                <th className="px-4 py-3 font-medium rounded-tl-md">Name</th>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium rounded-tr-md"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((v, i) => (
                <tr className="odd:bg-white even:bg-slate-50  text-sm text-slate-900" key={i}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-400"
                      checked={v.checked}
                      onChange={handleCheckedChange}
                      data-id={v.id}
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {v.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {v.title}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {v.email}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs font-medium">
                    {v.status === 1 ? (
                      <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                        InActive
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {v.role}
                  </td>
                  <td className="h-[44px] flex items-center gap-1">
                    <PencilIcon className="w-4 h-4 cursor-pointer" />
                    <TrashIcon className="w-4 h-4 cursor-pointer" />
                    {/* <span className="text-indigo-600 text-sm">Edit</span> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Base;
