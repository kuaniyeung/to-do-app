import { createContext, useContext, useState, ReactNode } from "react";

interface ConfirmationDialogTextContextProps {
  confirmationDialogText: string;
  setConfirmationDialogText: React.Dispatch<React.SetStateAction<string>>;
}

const ConfirmationDialogTextContext = createContext<
  ConfirmationDialogTextContextProps | undefined
>(undefined);

interface ConfirmationDialogIsOpenContextProps {
  confirmationDialogIsOpen: boolean;
  setConfirmationDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmationDialogIsOpenContext = createContext<
  ConfirmationDialogIsOpenContextProps | undefined
>(undefined);

interface DialogProvidersProps {
  children: ReactNode;
}

interface ConfirmationDialogActionContextProps {
  confirmationDialogAction: Function;
  setConfirmationDialogAction: React.Dispatch<React.SetStateAction<Function>>;
}

const ConfirmationDialogActionContext = createContext<
  ConfirmationDialogActionContextProps | undefined
>(undefined);

interface DialogProvidersProps {
  children: ReactNode;
}

const DialogProviders: React.FC<DialogProvidersProps> = ({ children }) => {
  const [confirmationDialogText, setConfirmationDialogText] =
    useState<string>("");

  const [confirmationDialogIsOpen, setConfirmationDialogIsOpen] =
    useState<boolean>(false);

  const [confirmationDialogAction, setConfirmationDialogAction] =
    useState<Function>(() => {});

  return (
    <ConfirmationDialogTextContext.Provider
      value={{ confirmationDialogText, setConfirmationDialogText }}
    >
      <ConfirmationDialogIsOpenContext.Provider
        value={{ confirmationDialogIsOpen, setConfirmationDialogIsOpen }}
      >
        <ConfirmationDialogActionContext.Provider
          value={{ confirmationDialogAction, setConfirmationDialogAction }}
        >
          {children}
        </ConfirmationDialogActionContext.Provider>
      </ConfirmationDialogIsOpenContext.Provider>
    </ConfirmationDialogTextContext.Provider>
  );
};

const useConfirmationDialogText: Function = () => {
  return useContext(ConfirmationDialogTextContext);
};

const useConfirmationDialogIsOpen: Function = () => {
  return useContext(ConfirmationDialogIsOpenContext);
};

const useConfirmationDialogAction: Function = () => {
  return useContext(ConfirmationDialogActionContext);
};

export {
  DialogProviders,
  useConfirmationDialogText,
  useConfirmationDialogIsOpen,
  useConfirmationDialogAction,
};
