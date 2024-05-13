export type RestaurantOrderResponse = {
    id: string
    sagaId: string
    orderId: string
    restaurantId: string
    createdAt: Date,
    status: 
    failureMessages?: string[]
}