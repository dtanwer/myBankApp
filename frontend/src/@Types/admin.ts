export type adminLogin={
    username:string,
    password:string
}

export type adminStateType = {
    admin:any|null;
    token:string|null;
    loading:boolean;
    message:string|null;
    type:"success"|"error"|"warning"|"info"|null;
}