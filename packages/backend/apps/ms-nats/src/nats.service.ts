//
//
//
// import { NatsJetStreamClient } from '@nestjs-plugins/nestjs-nats-jetstream-transport';
// import { Injectable } from '@nestjs/common';
// import { PubAck } from 'nats';
// import { Observable } from 'rxjs';
//
// interface OrderCreatedEvent {
//     id: number;
//     product: string;
//     quantity: number;
// }
// interface OrderUpdatedEvent {
//     id: number;
//     quantity: number;
// }
// interface OrderDeleteEvent {
//     id: number;
// }
//
// const ORDER_CREATED = 'order.created';
// const ORDER_UPDATED = 'order.updated';
// const ORDER_DELETED = 'order.deleted';
//
// @Injectable()
// export class NatsService {
//     constructor(private client: NatsJetStreamClient) {}
//
//     // createStream() {
//     //     this.client.
//     // }
//
//     createOrder(): string {
//         this.client
//             .emit<OrderCreatedEvent>(ORDER_CREATED, {
//                 id: 1,
//                 product: 'Socks',
//                 quantity: 1,
//             })
//             .subscribe((pubAck) => {
//                 console.log(pubAck);
//             });
//         return 'order created.';
//     }
//
//     updateOrder(): string {
//         this.client
//             .emit<OrderUpdatedEvent>(ORDER_UPDATED, { id: 1, quantity: 10 })
//             .subscribe();
//         return 'order updated';
//     }
//
//     deleteOrder(): string {
//         this.client
//             .emit<OrderDeleteEvent>(ORDER_DELETED, { id: 1 })
//             .subscribe((pubAck) => {
//                 console.log(pubAck);
//             });
//         return 'order deleted';
//     }
//
//     // request - response
//     // accumulate(payload: number[]): Observable<number[]> {
//     //     const pattern = { cmd: 'sum' };
//     //     return this.client.send<number>(pattern, payload);
//     // }
// }