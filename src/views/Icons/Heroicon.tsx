import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ArchiveBoxArrowDownIcon,
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownOnSquareIcon,
  ArrowDownOnSquareStackIcon,
  ArrowDownRightIcon,
  ArrowDownTrayIcon,
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Heroicon = () => {
  const icons = [
    <AcademicCapIcon className="w-6 h-6" />,
    <AdjustmentsHorizontalIcon className="w-6 h-6" />,
    <AdjustmentsVerticalIcon className="w-6 h-6" />,
    <ArchiveBoxArrowDownIcon className="w-6 h-6" />,
    <ArchiveBoxXMarkIcon className="w-6 h-6" />,
    <ArchiveBoxIcon className="w-6 h-6" />,
    <ArrowDownCircleIcon className="w-6 h-6" />,
    <ArrowDownLeftIcon className="w-6 h-6" />,
    <ArrowDownOnSquareIcon className="w-6 h-6" />,
    <ArrowDownOnSquareStackIcon className="w-6 h-6" />,
    <ArrowDownRightIcon className="w-6 h-6" />,
    <ArrowDownTrayIcon className="w-6 h-6" />,
    <ArrowDownIcon className="w-6 h-6" />,
    <ArrowLeftCircleIcon className="w-6 h-6" />,
    <ArrowLeftOnRectangleIcon className="w-6 h-6" />,
    <ArrowLeftIcon className="w-6 h-6" />,
  ];

  return (
    <main className="bg-gray-100 p-4 min-h-screen">
      <div className="text-sm">
        <p>Heroicons</p>
        <p>By the makers of tailwindcss</p>
      </div>
      <div className="grid grid-cols-2 mt-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {icons.map((v,i) => (
          <div key={i} className="bg-white flex items-center justify-center rounded-xl text-slate-900 ring-1 ring-inset ring-slate-900/[0.08] aspect-square">
            {v}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://heroicons.com/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white bg-indigo-600 px-4 py-2 rounded inline-flex justify-center items-center"
        >
          <span>Browse all available icons</span>
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </main>
  );
};

export default Heroicon;
