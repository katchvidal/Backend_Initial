
export interface IContext{
    req: IRequest;
    connection: IConnection;  
}



interface IRequest {
    headers:{
        token:string
    };
}


interface IConnection {
    token: string;
}