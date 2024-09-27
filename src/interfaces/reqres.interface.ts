export interface ReqResUserListResponse {
    info: Info;
    data: User[];
}

export interface User {
    _id:             number;
    films:           string[];
    enemies:         any[];
    name:            string;
    imageUrl?:       string;
    url:             string;
    __v:             number;
}

export interface Info {
    count:        number;
    totalPages:   number;
    previousPage: null;
    nextPage:     string;
}
