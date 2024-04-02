import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router";
import useLogout from "../../Hooks/useLogout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownList({ props, setGoogle, setFacebook, setData }) {
  const { logout } = useLogout()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const navigate = useNavigate();
  const togglebutton = () => {
    setIsOpen(!isOpen);
  };
  const showProfileDetials = () => {
    setIsOpen1(!isOpen1);
  };

  const handleLogout = async () => {
    await logout()
    setGoogle(null);
    setFacebook(null);
    setData(null)
  };

  return (
    <div className="md:w-full w-80">
      <Menu as="div" className=" relative inline-block text-left w-full ">
        <div>
          <Menu.Button
            onClick={showProfileDetials}
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md   text-sm font-semibold text-gray-900   ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {props}
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item className="w-full">
                {({ active }) => (
                  <button
                    onClick={() => {
                      navigate("/favorite");
                    }}
                    className={classNames(
                      active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm "
                    )}
                  >
                    favorite
                  </button>
                )}
              </Menu.Item>
              <Menu.Item className="w-full">
                {({ active }) => (
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                    className={classNames(
                      active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm "
                    )}
                  >
                    Support
                  </button>
                )}
              </Menu.Item>

              <Menu.Item className="w-full">
                <button
                  onClick={handleLogout}
                  className="text-gray-700 black px-4 py-2 text-sm "
                >
                  logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
