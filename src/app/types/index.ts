export type LoginResponseOrError = LoginResponseType | ErrorResponse;


type LoginResponseType = Readonly<{
    token: string;
    refreshToken: string;
    tokenExpires: number;
    user: User;
}>;

type ErrorResponse = {
    statusCode: number;
    timestamp: string;
    path: string;
    message: { [key: string]: string };
  };


type User = {
    id?: number;
    email: string;
    provider: string;
    socialId: string | null;
    firstName: string | null;
    lastName: string | null;
    photo?: FileEntity;
    role?: Role;
    status?: Status;
    hash: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
};

type FileEntity = {
    id: string;
    path: string;
}

type Status = {
    id: number;
    name?: string;
}

type Role = {
    id?: number;
    name: string;
    permissions?: Permission[];
}

type Permission = {
    id: number;
    name?: string;
}