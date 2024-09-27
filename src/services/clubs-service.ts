import * as repository from "../repositories/clubs-repository";
import * as httpResponse from "../utils/http-helper";


export const getClubService = async () => {
    const data = await repository.findAllClubs()
    let response = null
    if (data) {
        response = await httpResponse.ok(data)
    }else {
        response = await httpResponse.noContent()
    }

    return response
}