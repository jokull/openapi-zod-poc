import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { updateRetailerBodySchema } from '../../../api/types.zod'

export default class RetailersController {
  public async index({ request }: HttpContextContract) {
    return { retailers: [{ id: 1 }], metadata: { url: request.parsedUrl } }
  }

  public async store({ request, response }: HttpContextContract) {
    const result = updateRetailerBodySchema.safeParse(request.body())
    if (!result.success) {
      response.badRequest({ errors: result.error.issues })
    } else {
      return result.data
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}
}
