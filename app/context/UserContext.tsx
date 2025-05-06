import React, { createContext, useState } from 'react';
import { users as mockUsers, User } from '../data/users-mock';
import StackNavigator from '..';

interface UsersContextValue {
    state: {
        users: User[]
    };
};

export const UsersContext = createContext<UsersContextValue | undefined>(undefined);
interface UsersProviderProps { children: React.ReactNode };

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {

    const [users] = useState<User[]>(mockUsers);

    const contextValue: UsersContextValue = {
        state: { users }
    };

    return (
        <UsersContext.Provider
            value={{
                state: { users }
            }}
        >
            {children}
        </UsersContext.Provider >
    );
};