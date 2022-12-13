import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { MailService } from './mail.service';

@Injectable()
export class SMTPMailService implements MailService {
  sendEmail(): string {
    return 'SMTP';
  }
}
