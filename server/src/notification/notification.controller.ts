import { NotificationService } from "./notification.service";
import { Controller, Sse } from "@nestjs/common";
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('notifications')
export class NotificationController {

  constructor(private notificationService: NotificationService) {
  }

  @Sse('sse')
  notify() {
    // return interval(1000).pipe(map((_) => ({ data: { hello: Date.now() } })));
    return this.notificationService.subscribe();
  }

}
