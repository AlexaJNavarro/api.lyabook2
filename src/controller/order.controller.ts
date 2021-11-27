import mercadopago from "mercadopago";
import { Request, Response } from "express";
import { Answer } from "../helper/answer.helper";

export class OrderController {
  public static async GenerateOrder(req: Request, res: Response): Promise<Response> {
    try {
      mercadopago.configure({
        access_token:
          "TEST-6706525738118846-082101-03ee4a59346a45ff4f27a6f2eb905cf4-775792906",
      })

  
      var back_urls = {
        success: "https://lyabook.hostman.site/mi-cuenta",
        failure: "https://lyabook.hostman.site/mi-cuenta",
        pending: "https://lyabook.hostman.site/mi-cuenta",
      }
  
      let preferences = {
        items: req.body,
        back_urls
      };
  
      const response = await mercadopago.preferences.create(preferences);
      const id_order = response.body.id;
  
      return res
        .status(201)
        .json({ message: "Orden Generada", id: id_order, data: response });
    } catch (error) {
      return res
        .status(400)
        .json({ message: error, data: null});
    }
  }
}
