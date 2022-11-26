import React, { useEffect, useRef, Fragment } from "react";
import {
  BellIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  TrashIcon,
  ArrowTopRightOnSquareIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  ArchiveBoxIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { Menu, Transition } from "@headlessui/react";
import { useAuth } from "../contexts/auth";

const Home = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const asideRef = useRef<HTMLElement>(null);
  const asideMask = useRef<HTMLDivElement>(null);

  const toggleAside = (e: React.MouseEvent<HTMLElement | SVGSVGElement>) => {
    const asideClassList = asideRef.current?.classList;
    const asideMaskClassList = asideMask.current?.classList;

    asideClassList?.toggle("-translate-x-full");
    asideClassList?.toggle("lg:-ml-[250px]");

    if (asideMaskClassList?.contains("invisible")) {
      asideMaskClassList?.remove("invisible", "opacity-0");
      asideMaskClassList?.add("visible", "opacity-50");
    } else {
      asideMaskClassList?.add("invisible", "opacity-0");
      asideMaskClassList?.remove("visible", "opacity-50");
    }
  };

  useEffect(() => {
    const asideClassList = asideRef.current?.classList;
    const asideMaskClassList = asideMask.current?.classList;
    if (asideMaskClassList?.contains("visible")) {
      console.log(1);
      asideMaskClassList?.add("invisible", "opacity-0");
      asideMaskClassList?.remove("visible", "opacity-50");
      asideClassList?.toggle("-translate-x-full");
    }
  }, [location]);

  return (
    <div className="bg-gray-100 flex min-h-screen w-full lg:h-auto">
      <aside
        className="h-full overflow-auto overscroll-none z-20 fixed top-0 left-0 bg-indigo-600 w-[250px] -translate-x-full transition-all duration-500 ease-in-out lg:h-auto lg:static lg:translate-x-0 lg:shrink-0 lg:shadow-2xl lg:shadow-indigo-600"
        ref={asideRef}
      >
        <div className="h-16 flex justify-center items-center shadow-md">
          <Link to="/" className="text-white text-2xl font-medium">
            TURTLE
          </Link>
        </div>
        <Nav />
      </aside>
      <div className="w-full lg:w-auto lg:grow">
        <header className="bg-white h-16 flex justify-between items-center p-4 shadow">
          <Bars3Icon
            className="h-6 w-6 stroke-indigo-600 lg:cursor-pointer"
            onClick={toggleAside}
          />
          <form className="group relative ml-2 mr-auto">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-indigo-500" />
            <input
              className="focus:ring-2 focus:ring-indigo-600 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 border-none w-36 md:w-96"
              type="text"
              aria-label="Search"
              placeholder="Search"
            />
          </form>
          <Menu as="div" className="relative mr-3">
            <div className="flex items-center">
              <Menu.Button>
                <BellIcon className="w-6 h-6 stroke-slate-400 cursor-pointer" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <PencilSquareIcon
                          className={`mr-2 h-5 w-5 ${
                            !active && "stroke-indigo-600"
                          }`}
                          aria-hidden="true"
                        />
                        Edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <DocumentDuplicateIcon
                          className={`mr-2 h-5 w-5 ${
                            !active && "stroke-indigo-600"
                          }`}
                          aria-hidden="true"
                        />
                        Duplicate
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <ArchiveBoxIcon
                          className={`mr-2 h-5 w-5 ${
                            !active && "stroke-indigo-600"
                          }`}
                          aria-hidden="true"
                        />
                        Archive
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <ArrowTopRightOnSquareIcon
                          className={`mr-2 h-5 w-5 ${
                            !active && "stroke-indigo-600"
                          }`}
                          aria-hidden="true"
                        />
                        Move
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <TrashIcon
                          className={`mr-2 h-5 w-5 ${
                            !active && "stroke-indigo-600"
                          }`}
                          aria-hidden="true"
                        />
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="avatar"
            />
            <ArrowRightOnRectangleIcon
              className="ml-2 h-6 w-6 stroke-gray-400 cursor-pointer"
              onClick={() => {
                auth.signout(() => {
                  navigate("/sign-in", { replace: true });
                  window.localStorage.removeItem("user");
                  window.sessionStorage.removeItem("user");
                });
              }}
            />
          </div>
        </header>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <div
        className={`bg-black h-screen w-screen fixed top-0 left-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden`}
        onClick={toggleAside}
        ref={asideMask}
      ></div>
    </div>
  );
};

export default Home;
