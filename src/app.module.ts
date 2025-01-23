import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { LecturerModule } from './module/lecturer/lecturer.module';
import { AdminModule } from './module/admin/admin.module';
import { StudentModule } from './module/student/student.module';
import { MailerModule } from './module/mailer/mailer.module';

@Module({
  imports: [AuthModule, UserModule, LecturerModule, AdminModule, StudentModule, MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
