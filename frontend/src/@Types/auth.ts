export type authStateType = {
    user:any|null;
    token:string|null;
    loading:boolean;
    message:string|null;
    type:"success"|"error"|"warning"|"info"|null;
}