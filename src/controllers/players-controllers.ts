import { Request , Response } from "express"
import * as PlayerServices from "../services/players-service"
import { StatisticsModel } from "../models/statistics-model";


export const  getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await PlayerServices.getPlayerService();
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const getPlayerById = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await PlayerServices.getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req:Request,res:Response) => {
    const bodyValue = req.body
    const httpResponse = await PlayerServices.createPlayerService(bodyValue)
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
        console.log(bodyValue)
    }

    // else{
    //     const response = await noContent()
    //     res.status( response.statusCode).json(response.body)
    // }
}

export const deletePlayerById = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await PlayerServices.deletePlayerById(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayerById = async (req:Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue :StatisticsModel = req.body

    const httpResponse = await PlayerServices.updatePlayerById(id,bodyValue);
    

}
