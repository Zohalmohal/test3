import { Publisher, Subjects, TicketCreatedEvent } from "@learnertester/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
