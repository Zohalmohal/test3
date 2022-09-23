import { Publisher, Subjects, TicketUpdatedEvent } from "@learnertester/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
