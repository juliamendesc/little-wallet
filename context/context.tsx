import { useWeb3React } from '@web3-react/core';
import { createContext, useState } from 'react';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    phone: string;
    city: string;
}

interface State {
    loading:boolean,
    error: string | null,
    connected: boolean,
    data: User | null
}


interface AuthState extends State{
    setAuthState: React.Dispatch<React.SetStateAction<State>>
}

export const AuthenticationContext = createContext<AuthState>({
    loading:false,
    error: null,
    connected: false,
    data: null,
    setAuthState: () =>{}
});

export default function AuthContext({ children }) {
  const web3React = useWeb3React();
  const { account, library } = web3React;

  const isConnected = typeof account === 'string' && !!library;

  const [authState, setAuthState] = useState<State>({
    loading:false,
    data:null,
    error: null,
    connected: isConnected
})

return <AuthenticationContext.Provider value={{...authState, setAuthState}}>
            {children}
        </AuthenticationContext.Provider>
};
