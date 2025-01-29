import CreateChat from "@/features/chats/ui/createChat";
import ContactsList from "@/features/contacts/ui/contactsList";
import { useActions } from "@/shared/hooks/useActions";
import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  const { setAllAsyncMessages } = useActions();

  useEffect(() => {
    setAllAsyncMessages();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-1/4 bg-white border-r border-gray-200 flex flex-col">
        <CreateChat />
        <ContactsList />
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">U</span>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Ваше имя</p>
              <p className="text-sm text-gray-500">В сети</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              Загрузка...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default RootPage;
