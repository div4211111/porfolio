import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IProjectData } from "../config/projectsData";

export interface IAppContext {
  initialProjects: IProjectData[] | null;
  setInitialProjects: Dispatch<SetStateAction<IProjectData[] | null>> | null;
  projects: IProjectData[] | null;
  setProjects: Dispatch<SetStateAction<IProjectData[] | null>> | null;
}

export const AppContext = createContext<IAppContext>({
  initialProjects: null,
  setInitialProjects: null,
  projects: null,
  setProjects: null,
});

export const AppContextProvider = ({
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [projectsState, setProjectsState] = useState<IProjectData[] | null>(
    null
  );
  const [initialProjectsState, setInitialProjectsState] = useState<
    IProjectData[] | null
  >(null);
  useEffect(() => {
    setProjectsState(initialProjectsState);
  }, [initialProjectsState]);

  return (
    <AppContext.Provider
      value={{
        initialProjects: initialProjectsState,
        setInitialProjects: setInitialProjectsState,
        projects: projectsState,
        setProjects: setProjectsState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
