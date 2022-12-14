import { Global, Module } from '@nestjs/common';
import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";

@Global()
@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports:[NotificationService]
})
export class NotificationModule {}
