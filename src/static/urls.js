export const URL = "/items";
export const TAPE_URl =
    process.env.NODE_ENV === "production" ?
        "/tape_detection" :
        "http://localhost:6245/detect";
