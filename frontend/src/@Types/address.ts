export type  addressStateType={
    addresses: any[];
    address: any;
    loading: boolean;
    message: string | null;
    type: "success" | "error" | "warning" | "info" | null;
} 